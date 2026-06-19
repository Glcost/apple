"use client";

import AppleHeroTemplate from "@/components/AppleHeroTemplate";

export default function SupportPage() {
  return (
    <main>
      <AppleHeroTemplate 
        title="We're here to help."
        subtitle="Apple Support"
        description="Find solutions, get answers, and learn how to get the most out of your Apple devices."
        imageUrl="" 
        imageAlt="Apple Support Representative"
        theme="light"
        ctaText="Get Support"
        secondaryCtaText="Search articles"
      />
    </main>
  );
}
