'use client';

import { Puck, type Config } from '@puck-ui/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/blocks/heading';
import { Hero } from '@/components/blocks/hero';
import { Features } from '@/components/blocks/features';
import { Testimonials } from '@/components/blocks/testimonials';
import { Contact } from '@/components/blocks/contact';

const config: Config = {
  components: {
    Heading,
    Hero,
    Features,
    Testimonials,
    Contact,
  },
};

export default function Editor() {
  return (
    <div className="min-h-screen">
      <Puck
        config={config}
        onPublish={async (data) => {
          console.log('Published:', data);
          // Here you would typically save the data to your backend
        }}
        renderHeader={({ actions }) => (
          <div className="flex items-center justify-between p-4 border-b">
            <h1 className="text-2xl font-bold">Website Builder</h1>
            <div className="flex gap-2">
              {actions.map((action) => (
                <Button
                  key={action.label}
                  onClick={action.onClick}
                  variant={action.label === 'Publish' ? 'default' : 'outline'}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      />
    </div>
  );
}