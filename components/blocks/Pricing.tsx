'use client';

import { type ComponentConfig } from '@puck-ui/react';
import { Card } from '@/components/ui/card';
import { DropZone } from '@measured/puck';

export const PricingSection: ComponentConfig = {
  fields: {
    title: { type: 'text' },
    plans: {
      type: 'array',
      arrayFields: {
        title: { type: 'text' },
        price: { type: 'text' },
        description: { type: 'text' },
        // features: {
        //   type: 'array',
        //   arrayFields: { type: 'text' },
        // },
        buttonText: { type: 'text' },
        // popular: { type: 'boolean' },
      },
    },
  },
  defaultProps: {
    title: 'Simple, Transparent Pricing',
    plans: [
      {
        title: 'Starter',
        price: '$49/month',
        description: 'Perfect for small organizations',
        features: ['Up to 5 users', '5 templates', 'Basic analytics'],
        buttonText: 'Get Started',
        popular: false,
      },
      {
        title: 'Professional',
        price: '$99/month',
        description: 'For growing organizations',
        features: ['Up to 20 users', 'Unlimited templates', 'Advanced analytics', 'AI story generation'],
        buttonText: 'Get Started',
        popular: true,
      },
      {
        title: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations',
        features: ['Unlimited users', 'Custom templates', 'Enterprise support', 'Custom integrations'],
        buttonText: 'Contact Sales',
        popular: false,
      },
    ],
  },
  render: ({ title, plans }) => {
    return (
      <div className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-6 ${plan.popular ? 'bg-black text-white' : ''}`}>
              <div className="flex flex-col items-center text-center">
                {plan.popular && <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-xs">Popular</div>}
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold mb-2">{plan.price}</p>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <ul className="mb-4 space-y-2">
                  {/* {plan?.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground">{feature}</li>
                  ))} */}
                </ul>
                <button className="bg-primary text-white py-2 px-4 rounded">{plan.buttonText}</button>
              </div>
            </Card>
          ))}
          <DropZone zone="my-content" />
        </div>
      </div>
    );
  },
};
