import { useState } from "react";
import PricingCard from "./pricing-card";
import { Bundle } from "@/feature/sanity";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function Pricing({ bundles }: { bundles: Bundle[]}) {
  const [bundleSelected, setSelectedBundle] = useState('Super fan')
  const [currency, setCurrency] = useState('usd')

  return (
    <>
    <div className="flex items-center justify-center">
      <Select onValueChange={(value) => setCurrency(value)} defaultValue={currency}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select current" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="usd">Dollars ($)</SelectItem>
          <SelectItem value="gdes">Gourde (HTG)</SelectItem>
        </SelectContent>
      </Select>  
    </div>
    <section className="w-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          {bundles.map((bundle) => (
            <PricingCard
            key={bundle._id}
            name={bundle.name}
            price={currency === 'usd' ? `$${bundle.price_usd}` : `${bundle.price_gdes} HTG`}
            duration={bundle.duration}
            accesses={bundle.accesses}
            selected={bundleSelected === bundle.name}
            onClick={() => setSelectedBundle(bundle.name)}
            link={`/follow/buy?bundle=${bundle._id}&payment_type=${currency === 'usd' ? 'stripe' : 'moncash'}`}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
