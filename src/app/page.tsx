import Index from "@/module/home/Index";


export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TechCorp',
    url: 'https://www.techcorp-example.com',
    logo: 'https://www.techcorp-example.com/logo.png',
    sameAs: [
      'https://www.facebook.com/techcorp',
      'https://www.twitter.com/techcorp',
      'https://www.linkedin.com/company/techcorp'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tech Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US'
    }
  }
  return (
    <div>
      <Index
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
