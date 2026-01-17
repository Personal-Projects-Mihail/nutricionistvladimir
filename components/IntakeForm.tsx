'use client';

import { useState, useEffect, useRef } from 'react';

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
  preferredDate: string;
  preferredTime: string;
  appointmentDuration: string;
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
        preferredDate: '',
        preferredTime: '',
        appointmentDuration: '30',
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

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>> & { mainGoals?: string; preferredDate?: string; preferredTime?: string; appointmentDuration?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [availabilityStatus, setAvailabilityStatus] = useState<'idle' | 'checking' | 'available' | 'unavailable'>('idle');
  const [unavailableSlots, setUnavailableSlots] = useState<Set<string>>(new Set());
  const [loadingUnavailableSlots, setLoadingUnavailableSlots] = useState(false);

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
      preferredDate: 'Преферирана дата за консултација',
      preferredTime: 'Преферирано време за консултација',
      appointmentDuration: 'Времетраење на консултација',
      appointmentDurations: {
        '15': '15 минути',
        '30': '30 минути',
        '45': '45 минути',
      },
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
      checkingAvailability: 'Проверка на достапност...',
      available: '✅ Овој термин е достапен',
      unavailable: '❌ Овој термин не е достапен. Ве молиме изберете друго време.',
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
      preferredDate: 'Preferred Consultation Date',
      preferredTime: 'Preferred Consultation Time',
      appointmentDuration: 'Appointment Duration',
      appointmentDurations: {
        '15': '15 minutes',
        '30': '30 minutes',
        '45': '45 minutes',
      },
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
      checkingAvailability: 'Checking availability...',
      available: '✅ This time slot is available',
      unavailable: '❌ This time slot is not available. Please choose a different time.',
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

    if (!formData.preferredDate) {
      newErrors.preferredDate = t.required;
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = t.required;
    }

    if (!formData.appointmentDuration) {
      newErrors.appointmentDuration = t.required;
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
      // Debug: Log form data before sending
      console.log('📤 Submitting form data:', {
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        appointmentDuration: formData.appointmentDuration,
        fullFormData: formData,
      });

      // Submit to API endpoint
      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          lang, // Include language for calendar event
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit intake form');
      }

      console.log('Intake form submitted successfully:', data);
      
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
        preferredDate: '',
        preferredTime: '',
        appointmentDuration: '30',
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
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Debounce timer for availability checking
  const availabilityCheckTimeout = useRef<NodeJS.Timeout | null>(null);

  // Fetch unavailable slots when date changes
  useEffect(() => {
    if (!formData.preferredDate) {
      setUnavailableSlots(new Set());
      return;
    }

    setLoadingUnavailableSlots(true);
    
    // Debounce the API call
    const timeout = setTimeout(async () => {
      try {
        const response = await fetch(`/api/unavailable-slots?date=${formData.preferredDate}`);
        const data = await response.json();

        if (data.success && Array.isArray(data.unavailableSlots)) {
          const unavailableSet = new Set<string>(data.unavailableSlots as string[]);
          setUnavailableSlots(unavailableSet);
          
          // Clear selected time if it becomes unavailable
          if (formData.preferredTime && unavailableSet.has(formData.preferredTime)) {
            setFormData((prev) => ({ 
              ...prev, 
              preferredTime: '' // Always use empty string, never undefined
            }));
            setAvailabilityStatus('idle');
          }
        } else {
          setUnavailableSlots(new Set());
        }
      } catch (error) {
        console.error('Error fetching unavailable slots:', error);
        setUnavailableSlots(new Set());
      } finally {
        setLoadingUnavailableSlots(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [formData.preferredDate]);

  // Check availability when date or time changes
  useEffect(() => {
    // Clear any existing timeout
    if (availabilityCheckTimeout.current) {
      clearTimeout(availabilityCheckTimeout.current);
    }

    // Only check if date, time, and duration are provided
    if (!formData.preferredDate || !formData.preferredTime || !formData.appointmentDuration) {
      setAvailabilityStatus('idle');
      return;
    }

    // Set checking status immediately
    setAvailabilityStatus('checking');

      // Debounce the API call (wait 500ms after user stops typing)
      availabilityCheckTimeout.current = setTimeout(async () => {
        try {
          const response = await fetch(
            `/api/availability?date=${formData.preferredDate}&time=${formData.preferredTime}&duration=${formData.appointmentDuration}`
          );
          const data = await response.json();

          if (data.success && data.available !== undefined) {
            setAvailabilityStatus(data.available ? 'available' : 'unavailable');
          } else {
            // If check fails, assume available (fail open)
            setAvailabilityStatus('available');
          }
        } catch (error) {
          console.error('Error checking availability:', error);
          // Fail open - assume available
          setAvailabilityStatus('available');
        }
      }, 500);

    // Cleanup timeout on unmount or when dependencies change
    return () => {
      if (availabilityCheckTimeout.current) {
        clearTimeout(availabilityCheckTimeout.current);
      }
    };
  }, [formData.preferredDate, formData.preferredTime]);

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
      // Ensure value is always a string (never undefined)
      const stringValue = value || '';
      setFormData((prev) => ({ ...prev, [name]: stringValue }));
      
      // Clear error when user starts typing
      if (errors[name as keyof FormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }

      // Reset availability status when date/time/duration changes (will be updated by useEffect)
      if (name === 'preferredDate' || name === 'preferredTime' || name === 'appointmentDuration') {
        setAvailabilityStatus('idle');
      }
    }
  };

  const today = new Date().toISOString().split('T')[0];

  // Generate time slots in 15-minute intervals from 09:00 to 17:00 (9 AM to 5 PM)
  const generateTimeSlots = (): string[] => {
    const slots: string[] = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        // Skip 17:15, 17:30, 17:45 since we only go up to 17:00 (5 PM)
        if (hour === 17 && minute > 0) {
          break;
        }
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

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

      {/* Preferred Date and Time */}
      <div className="space-y-4">
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
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              disabled={loadingUnavailableSlots}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.preferredTime ? 'border-red-500' : 'border-border'
              } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-required="true"
              aria-invalid={!!errors.preferredTime}
              aria-describedby={errors.preferredTime ? 'preferredTime-error' : undefined}
            >
              <option value="">{loadingUnavailableSlots ? (lang === 'mk' ? 'Вчитување...' : 'Loading...') : t.selectOption}</option>
              {timeSlots.map((time) => {
                const isUnavailable = unavailableSlots.has(time);
                return (
                  <option 
                    key={time} 
                    value={time}
                    disabled={isUnavailable}
                    className={isUnavailable ? 'text-gray-400 bg-gray-100' : ''}
                  >
                    {time} {isUnavailable ? (lang === 'mk' ? '(Зафатено)' : '(Unavailable)') : ''}
                  </option>
                );
              })}
            </select>
            {errors.preferredTime && (
              <p id="preferredTime-error" className="mt-1 text-sm text-red-500">
                {errors.preferredTime}
              </p>
            )}
          </div>
        </div>

        {/* Appointment Duration */}
        <div>
          <label htmlFor="appointmentDuration" className="block text-sm font-medium text-text mb-2">
            {t.appointmentDuration} <span className="text-red-500">*</span>
          </label>
          <select
            id="appointmentDuration"
            name="appointmentDuration"
            value={formData.appointmentDuration}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.appointmentDuration ? 'border-red-500' : 'border-border'
            } bg-background text-text focus:outline-none focus:ring-2 focus:ring-primary`}
            aria-required="true"
            aria-invalid={!!errors.appointmentDuration}
            aria-describedby={errors.appointmentDuration ? 'appointmentDuration-error' : undefined}
          >
            <option value="">{t.selectOption}</option>
            <option value="15">{t.appointmentDurations['15']}</option>
            <option value="30">{t.appointmentDurations['30']}</option>
            <option value="45">{t.appointmentDurations['45']}</option>
          </select>
          {errors.appointmentDuration && (
            <p id="appointmentDuration-error" className="mt-1 text-sm text-red-500">
              {errors.appointmentDuration}
            </p>
          )}
        </div>

        {/* Availability Status */}
        {formData.preferredDate && formData.preferredTime && formData.appointmentDuration && (
          <div className="mt-2">
            {availabilityStatus === 'checking' && (
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{t.checkingAvailability}</span>
              </div>
            )}
            {availabilityStatus === 'available' && (
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t.available}</span>
              </div>
            )}
            {availabilityStatus === 'unavailable' && (
              <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 font-medium">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{t.unavailable}</span>
              </div>
            )}
          </div>
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
        disabled={isSubmitting || availabilityStatus === 'unavailable' || availabilityStatus === 'checking'}
        className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? t.submitting : t.submit}
      </button>
      {availabilityStatus === 'unavailable' && (
        <p className="text-sm text-red-600 dark:text-red-400 text-center mt-2">
          {t.unavailable}
        </p>
      )}
    </form>
  );
}
