import PricingCard from "./pricing-card";

export default function Pricing() {
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
          selected
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
          />
        </div>
      </div>
    </section>
  )
}
