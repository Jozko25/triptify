import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function BlogPost() {
  // In a real application, you would fetch the blog post data based on an ID or slug
  const post = {
    title: "Eco-Friendly Travel: Sustainable Route Planning",
    date: "October 18, 2024",
    readTime: "7 min read",
    author: {
      name: "Anna Novakova",
      avatar: "/anicka.jpg", // Update this path with the correct image
    },
    content: `
    <p>As travelers become increasingly aware of their impact on the environment, eco-friendly travel has gained traction as a sustainable way to explore the world. This post will guide you through the essentials of sustainable route planning, ensuring your adventures leave a minimal carbon footprint.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">1. Choose Eco-Friendly Transportation</h2>
    <p>Start by selecting transportation options that reduce your carbon emissions. Consider taking trains or buses instead of flying, and if you must fly, look for direct flights to minimize your travel distance. When driving, opt for electric or hybrid vehicles, or use carpooling services to share rides and cut down on individual emissions.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">2. Plan Your Route Wisely</h2>
    <p>Utilize route planning tools that focus on eco-friendly travel options. Look for routes that avoid congested areas, reducing idle time and fuel consumption. Prioritize stops at locations that allow for a blend of nature and culture, enabling you to immerse yourself in local environments while minimizing travel distances.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">3. Support Local and Sustainable Businesses</h2>
    <p>When planning your itinerary, consider staying at eco-conscious accommodations, dining at local eateries, and supporting businesses that prioritize sustainability. Research options that use renewable energy, reduce waste, and give back to their communities.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">4. Reduce, Reuse, and Recycle</h2>
    <p>Carry reusable items, such as water bottles, utensils, and bags, to minimize single-use plastics. Familiarize yourself with recycling facilities along your route to dispose of waste responsibly. Opt for digital tickets and maps to reduce paper usage.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">5. Leave No Trace</h2>
    <p>As you explore nature, be sure to follow Leave No Trace principles. Stick to marked trails, avoid disturbing wildlife, and pack out all trash. This ensures the preservation of natural habitats for future generations.</p>
    
    <p>By incorporating these sustainable practices into your travel plans, you can help protect the environment while enjoying memorable adventures. The joy of eco-friendly travel lies not only in the destinations you visit but also in knowing you are making a positive impact on the planet.</p>
    <p>So, get ready to chart your course with the Triptify app, and make your travels as green as they are memorable!</p>
    `,
  }

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <div className='bg-zinc-900 rounded-xl p-9'>
          <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-white">{post.author.name}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="mb-8 bg-gray-700" />

          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <Separator className="my-8 bg-gray-700" />

          <div className="flex justify-between items-center">
            <Link href="/blog" className="text-blue-400 hover:text-blue-300">
              ← More Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
