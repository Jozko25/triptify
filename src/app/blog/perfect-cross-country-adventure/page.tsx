import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function BlogPost() {
  const post = {
    title: "How to Plan the Perfect Cross-Country Adventure",
    date: "October 19, 2024",
    readTime: "7 min read",
    author: {
      name: "Emma Johnson",
      avatar: "/emma.jpg",
    },
    content: `
<p>Planning a cross-country adventure can be an exhilarating yet daunting task. From choosing the right destinations to ensuring a smooth travel experience, there's much to consider. In this guide, we'll break down the essential steps to help you create an unforgettable journey across the country.</p>
<h2>1. Set Your Destination and Route</h2>
<p>Begin by deciding where you want to go and the main attractions you want to visit. Use mapping tools to plot your route and identify any interesting stops along the way. Consider factors like travel time and distance, and be flexible enough to accommodate spontaneous detours.</p>
<h2>2. Choose Your Mode of Transportation</h2>
<p>Whether you're driving, taking a train, or flying, your choice of transportation can significantly impact your adventure. If you're driving, ensure your vehicle is in good condition. If you're opting for public transport, book your tickets in advance to secure the best prices and availability.</p>
<h2>3. Plan Your Accommodations</h2>
<p>Research different types of accommodations, from hotels to campsites, based on your preferences and budget. Make reservations ahead of time, especially in popular destinations, to avoid last-minute hassles. Look for places with unique experiences, such as a cozy cabin or a charming bed and breakfast.</p>
<h2>4. Pack Wisely</h2>
<p>Packing is crucial for a successful adventure. Create a checklist of essential items, including clothing suitable for various weather conditions, snacks, first aid supplies, and entertainment for long journeys. Remember to leave some space for souvenirs you might pick up along the way!</p>
<h2>5. Stay Connected</h2>
<p>Ensure you have a reliable way to stay connected while on the road. Download essential apps for navigation, accommodation booking, and weather updates. Consider purchasing a portable charger to keep your devices powered during long stretches of travel.</p>
<h2>6. Embrace the Journey</h2>
<p>While having a plan is important, allow yourself to enjoy the journey. Be open to exploring unexpected sights and experiences that may not have been on your original itinerary. The best memories often come from the unplanned moments during your adventure.</p>
<p>With careful planning and a spirit of adventure, your cross-country trip can be an incredible experience filled with memories that last a lifetime. So grab your map, pack your bags, and get ready for the road trip of a lifetime!</p>
    `,
  }

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-gray-300 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

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
  )
}
