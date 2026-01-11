'use client';

import { useState } from 'react';

interface IntakeFormProps {
  lang: 'mk' | 'en';
}

interface FormData {
  fullName: string;
  age: string;
  height: string;
  currentWeight: string;
  gender: string;
  contact: string;
  mainGoals: string[];
  healthConditions: string;
  medications: string;
  mealsPerDay: string;
  mealsPerDayOther: string;
  eatingTime: string;
  foodRestrictions: string;
  preferredFoods: string;
  physicalActivity: string;
  physicalActivityOther: string;
  waterIntake: string;
  waterIntakeOther: string;
  startDate: string;
  hasLabResults: string;
  otherGoal: string;
}

export default function IntakeForm({ lang }: IntakeFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    age: '',
    height: '',
    currentWeight: '',
    gender: '',
    contact: '',
    mainGoals: [],
    healthConditions: '',
    medications: '',
    mealsPerDay: '',
    mealsPerDayOther: '',
    eatingTime: '',
    foodRestrictions: '',
    preferredFoods: '',
    physicalActivity: '',
    physicalActivityOther: '',
    waterIntake: '',
    waterIntakeOther: '',
    startDate: '',
    hasLabResults: '',
    otherGoal: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>> & { mainGoals?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const content = {
    mk: {
      title: 'Пополнете ги овие кратки информации за вас',
      fullName: 'Име и презиме',
      age: 'Возраст',
      height: 'Висина (cm)',
      currentWeight: 'Моментална тежина (kg)',
      gender: 'Пол',
      genders: {
        male: 'Машки',
        female: 'Женски',
      },
      contact: 'Контакт (телефон/е-маил/Instagram)',
      mainGoal: 'Главна цел',
      mainGoalNote: '(Можеш да одбереш повеќе од една)',
      mainGoals: {
        weightLoss: 'Намалување на телесна тежина',
        weightGain: 'Зголемување на телесна тежина',
        muscleGain: 'Зголемување мускулна маса',
        weightMaintenance: 'Одржување на телесна тежина',
        healthImprovement: 'Подобрување на здравје (притисок, шеќер, холестерол и др.)',
        nutritionForCondition: 'Исхрана при болест/состојба',
        other: 'Other:',
      },
      healthConditions: 'Имате ли некаква дијагностицирана здравствена состојба?',
      healthConditionsNote: '(дијабетес, проблеми со тироидна жлезда, притисок, гастритис и слично)',
      medications: 'Земате ли редовна терапија/лекови или суплементи?',
      mealsPerDay: 'Колку оброци дневно имате вообичаено?',
      mealsPerDayOptions: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        noSchedule: 'Без распоред',
        other: 'Other:',
      },
      eatingTime: 'Во кое време од денот најмногу јадете/прејадувате?',
      foodRestrictions: 'Имате ли храна која не ја јадете или сте алергични/интолерантни?',
      preferredFoods: 'Дали постојат намирници/јадења кои особено ги сакате и сакате да ги задржиме во планот?',
      physicalActivity: 'Колку пати неделно сте физички активни (вежбање, шетање, тренинг)?',
      physicalActivityOptions: {
        notActive: 'Не сум активен/а',
        '1-2': '1-2 пати',
        '3-4': '3-4 пати',
        '5+': '5+ пати',
        other: 'Other:',
      },
      waterIntake: 'Колку вода пиете дневно?',
      waterIntakeOptions: {
        lessThan1: '<1 литар',
        '1-1.5': '1-1.5 литри',
        '2': '2 литри',
        '2+': '2+ литри',
        other: 'Other:',
      },
      startDate: 'Од кога сакате да почнете со планот?',
      hasLabResults: 'Дали имате резултати од последните лабораториски анализи што сте ги правеле?',
      hasLabResultsNote: '(имајте ги на првата консултација или можете да ги испратите по порака)',
      hasLabResultsOptions: {
        yes: 'Да',
        no: 'Не',
      },
      submit: 'Испрати',
      submitting: 'Се праќа...',
      successMessage: 'Благодариме! Вашите информации се примена. Ќе ве контактираме наскоро.',
      errorMessage: 'Се појави грешка. Ве молиме обидете се повторно.',
      required: 'Ова поле е задолжително',
      selectOption: 'Изберете опција',
    },
    en: {
      title: 'Please fill in these brief information about you',
      fullName: 'Full Name',
      age: 'Age',
      height: 'Height (cm)',
      currentWeight: 'Current Weight (kg)',
      gender: 'Gender',
      genders: {
        male: 'Male',
        female: 'Female',
      },
      contact: 'Contact (phone/email/Instagram)',
      mainGoal: 'Main Goal',
      mainGoalNote: '(You can select more than one)',
      mainGoals: {
        weightLoss: 'Weight Loss',
        weightGain: 'Weight Gain',
        muscleGain: 'Muscle Mass Increase',
        weightMaintenance: 'Weight Maintenance',
        healthImprovement: 'Health Improvement (blood pressure, sugar, cholesterol, etc.)',
        nutritionForCondition: 'Nutrition for Illness/Condition',
        other: 'Other:',
      },
      healthConditions: 'Do you have any diagnosed health condition?',
      healthConditionsNote: '(diabetes, thyroid problems, blood pressure, gastritis, etc.)',
      medications: 'Do you take regular therapy/medications or supplements?',
      mealsPerDay: 'How many meals per day do you usually have?',
      mealsPerDayOptions: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        noSchedule: 'No Schedule',
        other: 'Other:',
      },
      eatingTime: 'What time of day do you eat/snack the most?',
      foodRestrictions: 'Do you have foods you don\'t eat or are allergic/intolerant to?',
      preferredFoods: 'Are there foods/meals you particularly like and want to keep in the plan?',
      physicalActivity: 'How many times per week are you physically active (exercise, walking, training)?',
      physicalActivityOptions: {
        notActive: 'Not Active',
        '1-2': '1-2 times',
        '3-4': '3-4 times',
        '5+': '5+ times',
        other: 'Other:',
      },
      waterIntake: 'How much water do you drink daily?',
      waterIntakeOptions: {
        lessThan1: '<1 liter',
        '1-1.5': '1-1.5 liters',
        '2': '2 liters',
        '2+': '2+ liters',
        other: 'Other:',
      },
      startDate: 'When do you want to start with the plan?',
      hasLabResults: 'Do you have results from recent lab tests?',
      hasLabResultsNote: '(bring them to the first consultation or you can send them via message)',
      hasLabResultsOptions: {
        yes: 'Yes',
        no: 'No',
      },
      submit: 'Submit',
      submitting: 'Submitting...',
      successMessage: 'Thank you! Your information has been received. We will contact you soon.',
      errorMessage: 'An error occurred. Please try again.',
      required: 'This field is required',
      selectOption: 'Select an option',
    },
  };

  const t = content[lang];

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> & { mainGoals?: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.required;
    }

    if (!formData.age.trim()) {
      newErrors.age = t.required;
    }

    if (!formData.height.trim()) {
      newErrors.height = t.required;
    }

    if (!formData.currentWeight.trim()) {
      newErrors.currentWeight = t.required;
    }

    if (!formData.gender) {
      newErrors.gender = t.required;
    }

    if (!formData.contact.trim()) {
      newErrors.contact = t.required;
    }

    if (formData.mainGoals.length === 0) {
      newErrors.mainGoals = t.required;
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
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        fullName: '',
        age: '',
        height: '',
        currentWeight: '',
        gender: '',
        contact: '',
        mainGoals: [],
        healthConditions: '',
        medications: '',
        mealsPerDay: '',
        mealsPerDayOther: '',
        eatingTime: '',
        foodRestrictions: '',
        preferredFoods: '',
        physicalActivity: '',
        physicalActivityOther: '',
        waterIntake: '',
        waterIntakeOther: '',
        startDate: '',
        hasLabResults: '',
        otherGoal: '',
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
      const checkboxValue = (e.target as HTMLInputElement).value;
      
      if (name === 'mainGoals') {
        const updatedGoals = checked
          ? [...formData.mainGoals, checkboxValue]
          : formData.mainGoals.filter((goal) => goal !== checkboxValue);
        
        setFormData((prev) => ({
          ...prev,
          mainGoals: updatedGoals,
        }));

        // Clear error when user selects a goal
        if (updatedGoals.length > 0 && errors.mainGoals) {
          setErrors((prev) => ({ ...prev, mainGoals: undefined }));
        }
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      
      // Clear error when user starts typing
      if (errors[name as keyof FormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">{t.title}</h2>

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
          required
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
        )}
      </div>

      {/* Age */}
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-text mb-2">
          {t.age} <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          max="120"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.age ? 'border-red-500' : 'border-border'
          } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
          required
        />
        {errors.age && (
          <p className="mt-1 text-sm text-red-500">{errors.age}</p>
        )}
      </div>

      {/* Height */}
      <div>
        <label htmlFor="height" className="block text-sm font-medium text-text mb-2">
          {t.height} <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
          min="50"
          max="250"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.height ? 'border-red-500' : 'border-border'
          } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
          required
        />
        {errors.height && (
          <p className="mt-1 text-sm text-red-500">{errors.height}</p>
        )}
      </div>

      {/* Current Weight */}
      <div>
        <label htmlFor="currentWeight" className="block text-sm font-medium text-text mb-2">
          {t.currentWeight} <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="currentWeight"
          name="currentWeight"
          value={formData.currentWeight}
          onChange={handleChange}
          min="1"
          max="500"
          step="0.1"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.currentWeight ? 'border-red-500' : 'border-border'
          } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
          required
        />
        {errors.currentWeight && (
          <p className="mt-1 text-sm text-red-500">{errors.currentWeight}</p>
        )}
      </div>

      {/* Gender */}
      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-text mb-2">
          {t.gender} <span className="text-red-500">*</span>
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.gender ? 'border-red-500' : 'border-border'
          } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
          required
        >
          <option value="">{t.selectOption}</option>
          <option value="male">{t.genders.male}</option>
          <option value="female">{t.genders.female}</option>
        </select>
        {errors.gender && (
          <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
        )}
      </div>

      {/* Contact */}
      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-text mb-2">
          {t.contact} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.contact ? 'border-red-500' : 'border-border'
          } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
          required
        />
        {errors.contact && (
          <p className="mt-1 text-sm text-red-500">{errors.contact}</p>
        )}
      </div>

      {/* Main Goals */}
      <div>
        <label className="block text-sm font-medium text-text mb-2">
          {t.mainGoal} <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-text-secondary mb-3">{t.mainGoalNote}</p>
        <div className="space-y-2">
          {Object.entries(t.mainGoals).map(([key, label]) => (
            <div key={key} className="flex items-start gap-3">
              <input
                type="checkbox"
                id={`goal-${key}`}
                name="mainGoals"
                value={key}
                checked={formData.mainGoals.includes(key)}
                onChange={handleChange}
                className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-2 focus:ring-primary"
              />
              <label htmlFor={`goal-${key}`} className="text-sm text-text-secondary">
                {label}
              </label>
            </div>
          ))}
        </div>
        {formData.mainGoals.includes('other') && (
          <input
            type="text"
            name="otherGoal"
            value={formData.otherGoal}
            onChange={handleChange}
            placeholder={lang === 'mk' ? 'Наведете друга цел' : 'Specify other goal'}
            className="mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
          />
        )}
        {errors.mainGoals && (
          <p className="mt-1 text-sm text-red-500">{errors.mainGoals}</p>
        )}
      </div>

      {/* Health Conditions */}
      <div>
        <label htmlFor="healthConditions" className="block text-sm font-medium text-text mb-2">
          {t.healthConditions}
        </label>
        <p className="text-sm text-text-secondary mb-2">{t.healthConditionsNote}</p>
        <textarea
          id="healthConditions"
          name="healthConditions"
          value={formData.healthConditions}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Medications */}
      <div>
        <label htmlFor="medications" className="block text-sm font-medium text-text mb-2">
          {t.medications}
        </label>
        <textarea
          id="medications"
          name="medications"
          value={formData.medications}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Meals Per Day */}
      <div>
        <label htmlFor="mealsPerDay" className="block text-sm font-medium text-text mb-2">
          {t.mealsPerDay}
        </label>
        <select
          id="mealsPerDay"
          name="mealsPerDay"
          value={formData.mealsPerDay}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{t.selectOption}</option>
          {Object.entries(t.mealsPerDayOptions).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        {formData.mealsPerDay === 'other' && (
          <input
            type="text"
            name="mealsPerDayOther"
            value={formData.mealsPerDayOther}
            onChange={handleChange}
            placeholder={lang === 'mk' ? 'Наведете број на оброци' : 'Specify number of meals'}
            className="mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
          />
        )}
      </div>

      {/* Eating Time */}
      <div>
        <label htmlFor="eatingTime" className="block text-sm font-medium text-text mb-2">
          {t.eatingTime}
        </label>
        <textarea
          id="eatingTime"
          name="eatingTime"
          value={formData.eatingTime}
          onChange={handleChange}
          rows={2}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Food Restrictions */}
      <div>
        <label htmlFor="foodRestrictions" className="block text-sm font-medium text-text mb-2">
          {t.foodRestrictions}
        </label>
        <textarea
          id="foodRestrictions"
          name="foodRestrictions"
          value={formData.foodRestrictions}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Preferred Foods */}
      <div>
        <label htmlFor="preferredFoods" className="block text-sm font-medium text-text mb-2">
          {t.preferredFoods}
        </label>
        <textarea
          id="preferredFoods"
          name="preferredFoods"
          value={formData.preferredFoods}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Physical Activity */}
      <div>
        <label htmlFor="physicalActivity" className="block text-sm font-medium text-text mb-2">
          {t.physicalActivity}
        </label>
        <select
          id="physicalActivity"
          name="physicalActivity"
          value={formData.physicalActivity}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{t.selectOption}</option>
          {Object.entries(t.physicalActivityOptions).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        {formData.physicalActivity === 'other' && (
          <input
            type="text"
            name="physicalActivityOther"
            value={formData.physicalActivityOther}
            onChange={handleChange}
            placeholder={lang === 'mk' ? 'Наведете активност' : 'Specify activity'}
            className="mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
          />
        )}
      </div>

      {/* Water Intake */}
      <div>
        <label htmlFor="waterIntake" className="block text-sm font-medium text-text mb-2">
          {t.waterIntake}
        </label>
        <select
          id="waterIntake"
          name="waterIntake"
          value={formData.waterIntake}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{t.selectOption}</option>
          {Object.entries(t.waterIntakeOptions).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        {formData.waterIntake === 'other' && (
          <input
            type="text"
            name="waterIntakeOther"
            value={formData.waterIntakeOther}
            onChange={handleChange}
            placeholder={lang === 'mk' ? 'Наведете количина' : 'Specify amount'}
            className="mt-2 w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
          />
        )}
      </div>

      {/* Start Date */}
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-text mb-2">
          {t.startDate}
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          min={today}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Lab Results */}
      <div>
        <label htmlFor="hasLabResults" className="block text-sm font-medium text-text mb-2">
          {t.hasLabResults}
        </label>
        <p className="text-sm text-text-secondary mb-2">{t.hasLabResultsNote}</p>
        <select
          id="hasLabResults"
          name="hasLabResults"
          value={formData.hasLabResults}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">{t.selectOption}</option>
          <option value="yes">{t.hasLabResultsOptions.yes}</option>
          <option value="no">{t.hasLabResultsOptions.no}</option>
        </select>
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
