/**
 * Test Email Script
 * 
 * Run this script to send a test email without filling out the form
 * 
 * Usage:
 *   node scripts/test-email.js [lang]
 * 
 * Examples:
 *   node scripts/test-email.js        # Sends in English (default)
 *   node scripts/test-email.js en     # Sends in English
 *   node scripts/test-email.js mk     # Sends in Macedonian
 * 
 * Or use curl:
 *   curl -X POST http://localhost:3000/api/test-email?lang=mk
 *   curl -X POST http://localhost:3000/api/test-email?lang=en
 */

const testEmail = async () => {
  // Get language from command line argument (default to 'en')
  const lang = process.argv[2] || 'en';
  
  // Validate language
  if (lang !== 'mk' && lang !== 'en') {
    console.error('❌ Invalid language. Use "mk" for Macedonian or "en" for English.');
    console.error(`   Received: "${lang}"`);
    process.exit(1);
  }
  
  const baseUrl = process.env.API_URL || 'http://localhost:3000';
  const url = `${baseUrl}/api/test-email?lang=${lang}`;
  
  try {
    console.log(`📧 Sending test email in ${lang === 'mk' ? 'Macedonian' : 'English'}...`);
    console.log(`📍 Endpoint: ${url}`);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Test email sent successfully!');
      console.log('📋 Test data used:', JSON.stringify(data.testData, null, 2));
    } else {
      console.error('❌ Failed to send test email:');
      console.error('Error:', data.error);
      if (data.details) {
        console.error('Details:', data.details);
      }
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\n💡 Make sure your dev server is running: npm run dev');
    process.exit(1);
  }
};

testEmail();
