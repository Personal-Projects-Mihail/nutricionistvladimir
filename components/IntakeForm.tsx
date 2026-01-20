'use client';

import { useState } from 'react';

interface IntakeFormProps {
  lang: 'mk' | 'en';
}

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export default function IntakeForm({ lang }: IntakeFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const content = {
    mk: {
      title: 'Пополнете ги овие кратки информации за вас',
      firstName: 'Име',
      lastName: 'Презиме',
      phone: 'Телефон',
      email: 'Е-маил',
      submit: 'Испрати',
      submitting: 'Се праќа...',
      successMessage: 'Благодариме! Вашите информации се примени. Ќе ве контактираме наскоро.',
      errorMessage: 'Се појави грешка. Ве молиме обидете се повторно.',
      required: 'Ова поле е задолжително',
      invalidEmail: 'Внесете валидна е-маил адреса',
    },
    en: {
      title: 'Please fill in these brief information about you',
      firstName: 'First Name',
      lastName: 'Last Name',
      phone: 'Phone',
      email: 'Email',
      submit: 'Submit',
      submitting: 'Submitting...',
      successMessage: 'Thank you! Your information has been received. We will contact you soon.',
      errorMessage: 'An error occurred. Please try again.',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
    },
  };

  const t = content[lang];

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t.required;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t.required;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.required;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.required;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = t.invalidEmail;
      }
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
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          lang,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit intake form');
      }

      setSubmitStatus('success');

      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      });
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const stringValue = value || '';
    setFormData((prev) => ({ ...prev, [name]: stringValue }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* Success Modal Popup */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center animate-scale-in">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">
                {lang === 'mk' ? 'Успешно!' : 'Success!'}
              </h3>
            </div>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              {t.successMessage}
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="w-full bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {lang === 'mk' ? 'Затвори' : 'Close'}
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">{t.title}</h2>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-600 dark:text-red-400 font-medium">{t.errorMessage}</p>
          </div>
        )}

        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-text mb-2">
            {t.firstName} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.firstName ? 'border-red-500' : 'border-border'
            } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
            required
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-text mb-2">
            {t.lastName} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.lastName ? 'border-red-500' : 'border-border'
            } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
            required
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
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
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
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
            required
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
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
    </>
  );
}
