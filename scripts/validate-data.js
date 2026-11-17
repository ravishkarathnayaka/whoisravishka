// Validation script for portfolioData integrity
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '..', 'src', 'data', 'portfolioData.ts');
const content = fs.readFileSync(dataFile, 'utf8');

if (!content.includes('projects:') || !content.includes('credentials:')) {
  console.error('Data validation failed: Missing required sections');
  process.exit(1);
}

console.log('Portfolio data validation: PASSED');
