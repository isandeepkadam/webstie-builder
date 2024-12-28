'use client';

import { type ComponentConfig } from '@puck-ui/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

export const Contact: ComponentConfig = {
  fields: {
    title: { type: 'text' },
    subtitle: { type: 'text' },
    buttonText: { type: 'text' },
  },
  defaultProps: {
    title: 'Get in Touch',
    subtitle: 'Have questions? We\'d love to hear from you.',
    buttonText: 'Send Message',
  },
  render: ({ title, subtitle, buttonText }) => {
    return (
      <div className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
          <p className="text-center text-muted-foreground mb-8">{subtitle}</p>
          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Input placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Input type="email" placeholder="Your Email" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Your Message" className="min-h-[150px]" />
              </div>
              <Button className="w-full" size="lg">{buttonText}</Button>
            </form>
          </Card>
        </div>
      </div>
    );
  },
};