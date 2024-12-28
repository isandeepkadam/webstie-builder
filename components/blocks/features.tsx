'use client';

import { type ComponentConfig } from '@puck-ui/react';
import { Card } from '@/components/ui/card';
import { Laptop, Shield, Zap } from 'lucide-react';

export const Features: ComponentConfig = {
  fields: {
    title: { type: 'text' },
    features: {
      type: 'array',
      arrayFields: {
        title: { type: 'text' },
        description: { type: 'text' },
        icon: { 
          type: 'select',
          options: [
            { label: 'Laptop', value: 'laptop' },
            { label: 'Shield', value: 'shield' },
            { label: 'Zap', value: 'zap' },
          ],
        },
      },
    },
  },
  defaultProps: {
    title: 'Our Features',
    features: [
      {
        title: 'Easy to Use',
        description: 'Our platform is designed to be intuitive and user-friendly.',
        icon: 'laptop',
      },
      {
        title: 'Secure',
        description: 'Your data is protected with enterprise-grade security.',
        icon: 'shield',
      },
      {
        title: 'Lightning Fast',
        description: 'Experience blazing fast performance with our optimized platform.',
        icon: 'zap',
      },
    ],
  },
  render: ({ title, features }) => {
    const IconMap = {
      laptop: Laptop,
      shield: Shield,
      zap: Zap,
    };

    return (
      <div className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = IconMap[feature.icon as keyof typeof IconMap];
            return (
              <Card key={index} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  },
};