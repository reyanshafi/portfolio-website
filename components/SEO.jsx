import Head from 'next/head';

export default function SEO() {
  const title = "Reyan Shafi | Full-Stack Developer";
  const description = "Reyan Shafi is a Full-Stack Developer specializing in crafting clean, minimalistic user experiences with React, Next.js, and Tailwind CSS.";
  const siteUrl = "https://reyannshafi.vercel.app/"; // Replace with your actual URL
  const imageUrl = `${siteUrl}/assets/pic.png`; // Replace with your OG image
  const author = "Reyan Shafi";
  const keywords = [
    'Reyan Shafi',
    'Full Stack Developer',
    'React Developer',
    'Next.js Portfolio',
    'Tailwind CSS',
    'Minimalist Web Design',
    'Web Development',
    'JavaScript',
    'UI/UX'
  ].join(', ');

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author,
    url: siteUrl,
    image: imageUrl,
    sameAs: [
      "https://github.com/reyanshafi",
      "https://www.linkedin.com/in/reyanshafi/",
    ],
    jobTitle: "Full-Stack Developer",
    description,
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
