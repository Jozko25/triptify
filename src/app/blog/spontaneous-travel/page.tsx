import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function BlogPost() {
  // In a real application, you would fetch the blog post data based on an ID or slug
  const post = {
    title: "The Art of Spontaneous Travel: Flexible Route Planning",
    date: "October 20, 2024",
    readTime: "6 min read",
    author: {
      name: "Marko Duran",
      avatar: "/marko.jpg", // Update this path with the correct image
    },
    content: `
    <p>Spontaneous travel is one of the most exhilarating ways to explore the world. The freedom to change plans on a whim can lead to some of the most memorable adventures. In this post, we'll delve into the art of flexible route planning, enabling you to embrace spontaneity while still making the most of your travels.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">1. Embrace the Unexpected</h2>
    <p>One of the joys of spontaneous travel is embracing the unexpected. Be open to new experiences and opportunities that arise along your journey. Sometimes the best adventures come from last-minute decisions, whether it's a local festival, a scenic overlook, or an inviting café.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">2. Use Technology to Your Advantage</h2>
    <p>With the right apps and tools, flexible route planning has never been easier. Use travel apps that provide real-time information about nearby attractions, restaurants, and accommodations. GPS navigation can help you discover hidden gems off the beaten path, making it easier to adjust your plans as you go.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">3. Pack Light and Smart</h2>
    <p>When you're planning to travel spontaneously, packing light is essential. A smaller, well-organized backpack allows you to move quickly and make decisions on the go. Include versatile clothing, essential toiletries, and a small first-aid kit to prepare for any situation.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">4. Create a Loose Itinerary</h2>
    <p>While spontaneity is key, having a loose itinerary can provide structure to your travels. Outline your main destinations and activities, but leave room for improvisation. This way, you can prioritize must-see sights while still allowing for detours and unexpected adventures.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">5. Connect with Locals</h2>
    <p>Engaging with locals can lead to incredible experiences and insider knowledge about the best places to visit. Don't hesitate to ask for recommendations, as locals often know hidden spots that may not be on the typical tourist map.</p>
    
    <p>In conclusion, the art of spontaneous travel lies in the balance between flexibility and planning. Embrace the unknown, make the most of each moment, and allow your journey to unfold naturally. With the right mindset, every trip can turn into an extraordinary adventure.</p>
    <p>So grab your Triptify app, and let the adventure begin!</p>
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
