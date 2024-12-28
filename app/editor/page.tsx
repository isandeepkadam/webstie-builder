'use client';

import { Puck } from '@measured/puck';
import { config } from '@/lib/puck/config';
import '@measured/puck/dist/index.css';
import { useEffect, useState } from 'react';

export default function Editor() {

  const [items, setItems] = useState(undefined);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('puck'))
    setItems(data);
    console.log({ data})
  }, []);

  return (
    items && <Puck
      config={config}
      data={items || 
        {
          content: [],
          root: {title: "My Website"}
        }
      }
      onPublish={async (data) => {
        console.log('Published:', data);
        localStorage.setItem('puck', JSON.stringify(data));
        // Here you would typically save the data to your backend
      }}
    />
  );
}