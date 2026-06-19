"use client";

import AppleHeroTemplate from "@/components/AppleHeroTemplate";

export default function AirPodsPage() {
  return (
    <main>
      <AppleHeroTemplate 
        title="Adaptive Audio. Now playing."
        subtitle="AirPods Pro"
        description="A transformative audio experience. Active Noise Cancellation, Transparency mode, and Personalized Spatial Audio."
        imageUrl="/img/airpods.png" 
        imageAlt="AirPods Pro"
        theme="dark"
      />
    </main>
  );
}
