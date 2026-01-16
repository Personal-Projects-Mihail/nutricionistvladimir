'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TestEmailPage() {
  const [isSending, setIsSending] = useState(false);
  const [selectedLang, setSelectedLang] = useState<'mk' | 'en'>('en');
  const [result, setResult] = useState<{ 
    success: boolean; 
    message: string; 
    error?: string;
    emailSent?: boolean;
    calendarCreated?: boolean;
    calendarLink?: string | null;
  } | null>(null);

  const sendTestEmail = async (lang: 'mk' | 'en' = selectedLang) => {
    setIsSending(true);
    setResult(null);

    try {
      const response = await fetch(`/api/test-email?lang=${lang}`, {
        method: 'POST',
      });

      const data = await response.json();

      if (response.ok) {
        const message = data.calendarCreated && data.emailSent
          ? 'Test email sent and calendar event created successfully!'
          : data.emailSent
          ? 'Test email sent successfully! (Calendar not configured)'
          : 'Test email sent successfully!';
        
        setResult({
          success: true,
          message,
          emailSent: data.emailSent,
          calendarCreated: data.calendarCreated,
          calendarLink: data.calendarLink,
        });
      } else {
        setResult({
          success: false,
          message: 'Failed to send test email',
          error: data.error || 'Unknown error',
        });
      }
    } catch (error: any) {
      setResult({
        success: false,
        message: 'Error sending test email',
        error: error.message,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Header lang="en" />
      <main className="min-h-screen bg-background pt-20 pb-16">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl border border-primary/10">
            <h1 className="text-3xl font-bold text-text mb-4">Test Email</h1>
            <p className="text-text-secondary mb-6">
              Click the button below to send a test email with sample intake form data.
              This is useful for testing email functionality without filling out the form.
            </p>

            {/* Language Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-text mb-2">
                Select Language / Изберете јазик:
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedLang('en')}
                  className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                    selectedLang === 'en'
                      ? 'bg-primary text-white border-primary'
                      : 'bg-background text-text border-border hover:border-primary'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setSelectedLang('mk')}
                  className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                    selectedLang === 'mk'
                      ? 'bg-primary text-white border-primary'
                      : 'bg-background text-text border-border hover:border-primary'
                  }`}
                >
                  Македонски
                </button>
              </div>
            </div>

            <button
              onClick={() => sendTestEmail(selectedLang)}
              disabled={isSending}
              className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
            >
              {isSending 
                ? `Sending in ${selectedLang === 'mk' ? 'Macedonian' : 'English'}...` 
                : `Send Test Email (${selectedLang === 'mk' ? 'Macedonian' : 'English'})`}
            </button>

            {result && (
              <div
                className={`p-4 rounded-lg border ${
                  result.success
                    ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800'
                }`}
              >
                <p
                  className={`font-medium ${
                    result.success
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-red-600 dark:text-red-400'
                  }`}
                >
                  {result.message}
                </p>
                {result.error && (
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">{result.error}</p>
                )}
                {result.success && (
                  <div className="mt-4 space-y-2">
                    {result.emailSent && (
                      <p className="text-sm text-green-600 dark:text-green-400">
                        ✅ Email sent to nutricionistvladimir@gmail.com
                      </p>
                    )}
                    {result.calendarCreated && result.calendarLink && (
                      <div>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          ✅ Calendar event created
                        </p>
                        <a
                          href={result.calendarLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline mt-1 inline-block"
                        >
                          View in Google Calendar →
                        </a>
                      </div>
                    )}
                    {!result.calendarCreated && (
                      <p className="text-sm text-yellow-600 dark:text-yellow-400">
                        ⚠️ Calendar not configured - event not created
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h2 className="text-lg font-semibold text-text mb-2">Test Data Used:</h2>
              <ul className="text-sm text-text-secondary space-y-1">
                <li>• Name: Test User</li>
                <li>• Age: 30</li>
                <li>• Date: 7 days from now</li>
                <li>• Time: 14:00</li>
                <li>• Duration: 30 minutes</li>
                <li>• Goals: Weight Loss, Health Improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
