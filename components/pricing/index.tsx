import { useState } from "react";
import PricingCard from "./pricing-card";

export default function Pricing() {
  const [bundleSelected, setSelectedBundle] = useState<'basic' | 'pro' | 'entreprise'>('pro')

  return (
    <section className="w-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <PricingCard
          name="Basic"
          price="$29"
          accesses={[
            '720p Video Rendering',
            '2GB Cloud Storage',
            'Basic Video Templates'
          ]}
          selected={bundleSelected === 'basic'}
          onClick={() => setSelectedBundle('basic')}
          />
          
          <PricingCard
          name="Pro"
          price="$59"
          accesses={[
            '1080p Video Rendering',
            '10GB Cloud Storage',
            'Premium Video Templates',
            'Collaboration Tools'
          ]}
          onClick={() => setSelectedBundle('pro')}
          selected={bundleSelected === 'pro'}
          popular
          />
          
          <PricingCard
          name="Enterprise"
          price="$99"
          accesses={[
            '4K Video Rendering',
            'Unlimited Cloud Storage',
            'Custom Video Templates',
            'Advanced Collaboration Tools',
            'Dedicated Support'
          ]}
          selected={bundleSelected === 'entreprise'}
          onClick={() => setSelectedBundle('entreprise')}
          />
        </div>
      </div>
    </section>
  )
}
