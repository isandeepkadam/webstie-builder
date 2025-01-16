"use client";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Render } from '@measured/puck';
import { config } from '@/lib/puck/config';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { DragHandleDots2Icon } from '@radix-ui/react-icons'
import { Sparkles, Code, Layout, Cpu, PenTool, Blocks } from 'lucide-react'
// import { useRouter } from 'next/router';


export default function Home() {
  
  const [items, setItems] = useState(undefined);
  useEffect(() => {
    //@ts-ignore
    const data = JSON.parse(localStorage.getItem('puck'))
    setItems(data);
    console.log({ data})
  }, []);
  console.log({ items })

  const [prompt, setPrompt] = useState('')
  const [dragging, setDragging] = useState(false)

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', 'dragged-element')
    setDragging(true)
  }

  const handleDragEnd = () => {
    setDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    // In a real application, you would handle the drop here
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  // const router = useRouter();


  return (
    <main className="flex min-h-screen flex-col">
      {/* {items && <Render config={config} data={items} />}
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
      </div> */}
      <div className="min-h-screen bg-white">
      <header className="py-4 px-6 border-b">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">AI Website Builder</h1>
          <nav className="flex gap-4">
            <Button variant="ghost" className="text-sm">Features</Button>
            <Button variant="ghost" className="text-sm">Pricing</Button>
            <Button className="text-sm">Start Free</Button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl font-bold">Build Websites with AI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Create stunning websites using AI and intuitive drag-and-drop tools</p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Link href={"/editor"} className='h-10 px-4 py-2 flex items-center justify-center'>Watch Demo</Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-2 gap-6">
          <Card className="p-6 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              <h3 className="font-medium">AI Design</h3>
            </div>
            <p className="text-sm text-gray-600">Generate stunning designs with AI</p>
          </Card>
          <Card className="p-6 space-y-2">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-500" />
              <h3 className="font-medium">Custom Components</h3>
            </div>
            <p className="text-sm text-gray-600">Create components with natural language</p>
          </Card>
        </section>

        {/* Builder Interface */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold">Drag & Drop Builder</h3>
          <Card className="p-6">
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 mb-6 h-48 flex items-center justify-center">
              <p className="text-gray-400">Drag components here</p>
            </div>
            <div className="flex gap-4">
              {['Header', 'Image', 'Text'].map((item) => (
                <Card key={item} className="p-3 cursor-move flex items-center gap-2">
                  <DragHandleDots2Icon className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{item}</span>
                </Card>
              ))}
            </div>
          </Card>
        </section>

        {/* AI Component Generator */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold">AI Component Generator</h3>
          <Card className="p-6 space-y-4">
            <Textarea 
              placeholder="Describe your component (e.g., 'Create a pricing table with 3 tiers')"
              className="resize-none"
              rows={3}
            />
            <Button>Generate</Button>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6">
          <h3 className="text-2xl font-semibold">Start Building Today</h3>
          <Button size="lg">Create Your Website</Button>
        </section>
      </main>

      <footer className="border-t py-8 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600">
          <p>&copy; 2025 AI Website Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </main>
  );
}