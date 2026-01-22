const fs = require('fs');

// Simple syntax check for the component
const componentPath = './components/ExpandableServiceCards.tsx';
const content = fs.readFileSync(componentPath, 'utf8');

// Check for common issues
const checks = {
  'Has opening brace': content.includes('{'),
  'Has closing brace': content.includes('}'),
  'Has return statement': content.includes('return'),
  'Has export': content.includes('export'),
  'Balanced motion.div': (content.match(/<motion\.div/g) || []).length === (content.match(/<\/motion\.div>/g) || []).length,
  'No unclosed tags': !content.match(/<[^/>]+(?!.*\/>)(?!.*<\/)/),
  'Has framer-motion import': content.includes("from 'framer-motion'"),
};

console.log('Syntax Check Results:');
console.log('=====================');
Object.entries(checks).forEach(([check, result]) => {
  console.log(`${result ? '✓' : '✗'} ${check}`);
});

const allPassed = Object.values(checks).every(Boolean);
console.log('\n' + (allPassed ? '✓ All checks passed!' : '✗ Some checks failed'));
process.exit(allPassed ? 0 : 1);
