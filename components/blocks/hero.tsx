'use client';

import { type ComponentConfig } from '@puck-ui/react';
import { Button } from '@/components/ui/button';

export const Hero: ComponentConfig = {
  fields: {
    title: { type: 'text' },
    subtitle: { type: 'text' },
    buttonText: { type: 'text' },
    buttonLink: { type: 'text' },
    backgroundImage: { type: 'text' },
  },
  defaultProps: {
    title: 'Welcome to Our Website',
    subtitle: 'Create something amazing with our platform',
    buttonText: 'Get Started',
    buttonLink: '#',
    backgroundImage: 'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6',
  },
  render: ({ title, subtitle, buttonText, buttonLink, backgroundImage }) => {
    return (
      <div 
        className="relative min-h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl mb-8">{subtitle}</p>
          <Button asChild size="lg">
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </div>
      </div>
    );
  },
};