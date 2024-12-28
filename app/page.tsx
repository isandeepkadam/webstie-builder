"use client";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Render } from '@measured/puck';
import { config } from '@/lib/puck/config';

export default function Home() {
  
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('puck'))
    setItems(data);
    console.log({ data})
  }, []);
  console.log({ items })
  return (
    <main className="flex min-h-screen flex-col">
      {items && <Render config={config} data={items} />}
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-6">Website Builder</h1>
        <p className={cn("text-lg mb-8", "text-muted-foreground")}>
          Create beautiful websites with our drag-and-drop builder
        </p>
        <Link 
          href="/editor" 
          className={cn(
            "inline-flex items-center justify-center",
            "px-6 py-3 rounded-lg",
            "bg-primary text-primary-foreground",
            "hover:bg-primary/90 transition-colors"
          )}
        >
          Open Editor
        </Link>
      </div>
    </main>
  );
}