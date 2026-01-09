'use client';

import { useState } from 'react';

interface BookingFormProps {
  lang: 'mk' | 'en';
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: string;
  primaryGoal: string;
  ageRange: string;
  gender: string;
  medicalConditions: string;
  allergies: string;
  lifestyleLevel: string;
  message: string;
  consentData: boolean;
  consentEmail: boolean;
}

export default function BookingForm({ lang }: BookingFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    primaryGoal: '',
    ageRange: '',
    gender: '',
    medicalConditions: '',
    allergies: '',
    lifestyleLevel: '',
    message: '',
    consentData: false,
    consentEmail: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const content = {
    mk: {
      fullName: 'Полно име',
      email: 'Емаил адреса',
      phone: 'Телефонски број',
      preferredDate: 'Преферирана дата',
      preferredTime: 'Преферирано време',
      consultationType: 'Тип на консултација',
      consultationTypes: {
        weightLoss: 'Намалување на тежина',
        gutHealth: 'Здравје на цревата',
        hormonalBalance: 'Хормонален баланс',
        sportsNutrition: 'Спортска исхрана',
        familyNutrition: 'Семејна исхрана',
        chronicConditions: 'Хронични состојби',
        general: 'Општа консултација',
      },
      primaryGoal: 'Примарна цел (опционално)',
      ageRange: 'Возрасна група (опционално)',
      ageRanges: {
        under18: 'Под 18',
        '18-29': '18-29',
        '30-39': '30-39',
        '40-49': '40-49',
        '50plus': '50+',
      },
      gender: 'Пол (опционално)',
      genders: {
        male: 'Машки',
        female: 'Женски',
        preferNot: 'Преферирам да не кажам',
      },
      medicalConditions: 'Постоечки медицински состојби (опционално)',
      allergies: 'Алергии/непреносливост на храна (опционално)',
      lifestyleLevel: 'Ниво на активност (опционално)',
      lifestyleLevels: {
        sedentary: 'Седечки (малку или никаква активност)',
        lightlyActive: 'Лесно активен (1-3 дена/недела)',
        moderatelyActive: 'Умерено активен (3-5 дена/недела)',
        veryActive: 'Многу активен/атлет (6-7 дена/недела)',
      },
      message: 'Кратка порака до нутриционистот (опционално)',
      consentData: 'Се согласувам да се обработуваат моите лични податоци за оваа консултација',
      consentEmail: 'Се согласувам да добивам потврди за термини преку емаил',
      submit: 'Закажи консултација',
      submitting: 'Се праќа...',
      successMessage: 'Благодариме! Вашето барање е примено. Ќе ве контактираме наскоро.',
      errorMessage: 'Се појави грешка. Ве молиме обидете се повторно.',
      required: 'Ова поле е задолжително',
      invalidEmail: 'Невалидна емаил адреса',
      selectOption: 'Изберете опција',
    },
    en: {
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      preferredDate: 'Preferred Date',
      preferredTime: 'Preferred Time',
      consultationType: 'Type of Consultation',
      consultationTypes: {
        weightLoss: 'Weight Loss',
        gutHealth: 'Gut Health',
        hormonalBalance: 'Hormonal Balance',
        sportsNutrition: 'Sports Nutrition',
        familyNutrition: 'Family Nutrition',
        chronicConditions: 'Chronic Conditions',
        general: 'General Consultation',
      },
      primaryGoal: 'Primary Goal (Optional)',
      ageRange: 'Age Range (Optional)',
      ageRanges: {
        under18: 'Under 18',
        '18-29': '18-29',
        '30-39': '30-39',
        '40-49': '40-49',
        '50plus': '50+',
      },
      gender: 'Gender (Optional)',
      genders: {
        male: 'Male',
        female: 'Female',
        preferNot: 'Prefer not to say',
      },
      medicalConditions: 'Existing Medical Conditions (Optional)',
      allergies: 'Food Allergies/Intolerances (Optional)',
      lifestyleLevel: 'Activity Level (Optional)',
      lifestyleLevels: {
        sedentary: 'Sedentary (little or no exercise)',
        lightlyActive: 'Lightly Active (1-3 days/week)',
        moderatelyActive: 'Moderately Active (3-5 days/week)',
        veryActive: 'Very Active/Athlete (6-7 days/week)',
      },
      message: 'Short Message to Nutritionist (Optional)',
      consentData: 'I consent to processing my personal data for this consultation',
      consentEmail: 'I agree to receive appointment confirmations via email',
      submit: 'Book Consultation',
      submitting: 'Submitting...',
      successMessage: 'Thank you! Your request has been received. We will contact you soon.',
      errorMessage: 'An error occurred. Please try again.',
      required: 'This field is required',
      invalidEmail: 'Invalid email address',
      selectOption: 'Select an option',
    },
  };

  const t = content[lang];

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    // Required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.required;
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = t.required;
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = t.required;
    }

    if (!formData.consultationType) {
      newErrors.consultationType = t.required;
    }

    if (!formData.consentData) {
      newErrors.consentData = t.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call - Replace with actual submission logic
      // In production, this would send to your backend or email service
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        consultationType: '',
        primaryGoal: '',
        ageRange: '',
        gender: '',
        medicalConditions: '',
        allergies: '',
        lifestyleLevel: '',
        message: '',
        consentData: false,
        consentEmail: false,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-primary font-medium">{t.successMessage}</p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-600 dark:text-red-400 font-medium">{t.errorMessage}</p>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-text mb-2">
          {t.fullName} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.fullName ? 'border-red-500' : 'border-border'
          } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
          aria-required="true"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1 text-sm text-red-500">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
          {t.email} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-border'
          } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
          {t.phone} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.phone ? 'border-red-500' : 'border-border'
          } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-500">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-text mb-2">
            {t.preferredDate} <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            min={today}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.preferredDate ? 'border-red-500' : 'border-border'
            } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
            aria-required="true"
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? 'preferredDate-error' : undefined}
          />
          {errors.preferredDate && (
            <p id="preferredDate-error" className="mt-1 text-sm text-red-500">
              {errors.preferredDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-text mb-2">
            {t.preferredTime} <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.preferredTime ? 'border-red-500' : 'border-border'
            } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
            aria-required="true"
            aria-invalid={!!errors.preferredTime}
            aria-describedby={errors.preferredTime ? 'preferredTime-error' : undefined}
          />
          {errors.preferredTime && (
            <p id="preferredTime-error" className="mt-1 text-sm text-red-500">
              {errors.preferredTime}
            </p>
          )}
        </div>
      </div>

      {/* Consultation Type */}
      <div>
        <label htmlFor="consultationType" className="block text-sm font-medium text-text mb-2">
          {t.consultationType} <span className="text-red-500">*</span>
        </label>
        <select
          id="consultationType"
          name="consultationType"
          value={formData.consultationType}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.consultationType ? 'border-red-500' : 'border-border'
          } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
          aria-required="true"
          aria-invalid={!!errors.consultationType}
          aria-describedby={errors.consultationType ? 'consultationType-error' : undefined}
        >
          <option value="">{t.selectOption}</option>
          <option value="weightLoss">{t.consultationTypes.weightLoss}</option>
          <option value="gutHealth">{t.consultationTypes.gutHealth}</option>
          <option value="hormonalBalance">{t.consultationTypes.hormonalBalance}</option>
          <option value="sportsNutrition">{t.consultationTypes.sportsNutrition}</option>
          <option value="familyNutrition">{t.consultationTypes.familyNutrition}</option>
          <option value="chronicConditions">{t.consultationTypes.chronicConditions}</option>
          <option value="general">{t.consultationTypes.general}</option>
        </select>
        {errors.consultationType && (
          <p id="consultationType-error" className="mt-1 text-sm text-red-500">
            {errors.consultationType}
          </p>
        )}
      </div>

      {/* Primary Goal */}
      <div>
        <label htmlFor="primaryGoal" className="block text-sm font-medium text-text mb-2">
          {t.primaryGoal}
        </label>
        <input
          type="text"
          id="primaryGoal"
          name="primaryGoal"
          value={formData.primaryGoal}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Age Range and Gender */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="ageRange" className="block text-sm font-medium text-text mb-2">
            {t.ageRange}
          </label>
          <select
            id="ageRange"
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">{t.selectOption}</option>
            <option value="under18">{t.ageRanges.under18}</option>
            <option value="18-29">{t.ageRanges['18-29']}</option>
            <option value="30-39">{t.ageRanges['30-39']}</option>
            <option value="40-49">{t.ageRanges['40-49']}</option>
            <option value="50plus">{t.ageRanges['50plus']}</option>
          </select>
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-text mb-2">
            {t.gender}
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">{t.selectOption}</option>
            <option value="male">{t.genders.male}</option>
            <option value="female">{t.genders.female}</option>
            <option value="preferNot">{t.genders.preferNot}</option>
          </select>
        </div>
      </div>

      {/* Medical Conditions */}
      <div>
        <label htmlFor="medicalConditions" className="block text-sm font-medium text-text mb-2">
          {t.medicalConditions}
        </label>
        <textarea
          id="medicalConditions"
          name="medicalConditions"
          value={formData.medicalConditions}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Allergies */}
      <div>
        <label htmlFor="allergies" className="block text-sm font-medium text-text mb-2">
          {t.allergies}
        </label>
        <textarea
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          rows={2}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Lifestyle Level */}
      <div>
        <label htmlFor="lifestyleLevel" className="block text-sm font-medium text-text mb-2">
          {t.lifestyleLevel}
        </label>
        <select
          id="lifestyleLevel"
          name="lifestyleLevel"
          value={formData.lifestyleLevel}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{t.selectOption}</option>
          <option value="sedentary">{t.lifestyleLevels.sedentary}</option>
          <option value="lightlyActive">{t.lifestyleLevels.lightlyActive}</option>
          <option value="moderatelyActive">{t.lifestyleLevels.moderatelyActive}</option>
          <option value="veryActive">{t.lifestyleLevels.veryActive}</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Consent Checkboxes */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consentData"
            name="consentData"
            checked={formData.consentData}
            onChange={handleChange}
            className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-2 focus:ring-primary"
            aria-required="true"
            aria-invalid={!!errors.consentData}
            aria-describedby={errors.consentData ? 'consentData-error' : undefined}
          />
          <label htmlFor="consentData" className="text-sm text-text-secondary">
            {t.consentData} <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.consentData && (
          <p id="consentData-error" className="text-sm text-red-500">
            {errors.consentData}
          </p>
        )}

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consentEmail"
            name="consentEmail"
            checked={formData.consentEmail}
            onChange={handleChange}
            className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-2 focus:ring-primary"
          />
          <label htmlFor="consentEmail" className="text-sm text-text-secondary">
            {t.consentEmail}
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t.submitting : t.submit}
      </button>
    </form>
  );
}
