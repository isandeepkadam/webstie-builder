'use client';

import { type ComponentConfig } from '@puck-ui/react';

export const Footer: ComponentConfig = {
  fields: {
    title: { type: 'text' },
    links: {
      type: 'array',
      arrayFields: {
        url: { type: 'text' },
        display: { type: 'text' },
        // icon: { 
        //   type: 'select',
        //   options: [
        //     { label: 'Laptop', value: 'laptop' },
        //     { label: 'Shield', value: 'shield' },
        //     { label: 'Zap', value: 'zap' },
        //   ],
        // },
      },
    },
  },
  defaultProps: {
    title: 'Footer',
    links: [
      {
        url: 'https://facebook.com',
        display: 'Facebook',
        // icon: 'laptop',
      },
      {
        url: 'https://twitter.com',
        display: 'Twitter',
        // icon: 'shield',
      },
      {
        url: 'https://instagram.com',
        display: 'Instagram',
        // icon: 'zap',
      },
    ],
  },
  render: ({ title, links }) => {
    console.log({ title, links })
    return (
      <div 
        className="relative min-h-[200px] flex items-center justify-center text-white bg-teal-900"
      >
        <div className="max-w-4xl mx-auto text-center px-4 flex gap-4">
        {links.map((link, index) => {
          return (
            <a key={index} href={link.url} target='_blank'>
              {link.display}
            </a>
          );
        })}
        </div>
      </div>
    );
  },
};

