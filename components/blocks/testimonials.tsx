'use client';

import { type ComponentConfig } from '@puck-ui/react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Testimonials: ComponentConfig = {
  fields: {
    title: { type: 'text' },
    testimonials: {
      type: 'array',
      arrayFields: {
        name: { type: 'text' },
        role: { type: 'text' },
        content: { type: 'textarea' },
        avatar: { type: 'text' },
      },
    },
  },
  defaultProps: {
    title: 'What Our Customers Say',
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'CEO at TechCorp',
        content: 'This platform has transformed how we build and manage our website. Highly recommended!',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      },
      {
        name: 'Michael Chen',
        role: 'Designer',
        content: 'The ease of use and flexibility is amazing. I can create beautiful websites in no time.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      },
    ],
  },
  render: ({ title, testimonials }) => {
    return (
      <div className="py-16 px-4 bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col gap-4">
                <p className="text-muted-foreground italic">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  },
};