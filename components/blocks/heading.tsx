'use client';

import { ComponentConfig } from '@measured/puck';

export const Heading: ComponentConfig = {
  fields: {
    text: { type: 'text' },
    level: {
      type: 'select',
      options: [
        { label: 'H1', value: 'h1' },
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
      ],
    },
  },
  defaultProps: {
    text: 'Enter heading text',
    level: 'h2',
  },
  render: ({ text, level }) => {
    const Tag = level as keyof JSX.IntrinsicElements;
    const styles = {
      h1: 'text-4xl font-bold mb-6',
      h2: 'text-3xl font-semibold mb-4',
      h3: 'text-2xl font-medium mb-3',
    };

    return (
      <Tag className={styles[level as keyof typeof styles]}>
        {text}
      </Tag>
    );
  },
};