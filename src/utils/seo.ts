export function generatePersonSchema(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ravishka Prabhath Rathnayaka",
    "jobTitle": "Cybersecurity Specialist & AI Systems Engineer",
    "url": "https://whoisravishka.vercel.app"
  });
}
