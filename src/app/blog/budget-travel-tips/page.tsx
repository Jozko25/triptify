import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function BlogPost() {
  // In a real application, you would fetch the blog post data based on an ID or slug
  const post = {
    title: "Traveling on a Budget: Tips for Thrifty Adventurers",
    date: "October 23, 2024",
    readTime: "10 min read",
    author: {
      name: "Sophia Czewienska",
      avatar: "/cauko.jpg", // Update this path with the correct image
    },
    content: `
    <p>Traveling doesn’t have to drain your savings. With a little creativity and planning, you can explore new destinations without breaking the bank. In this post, we’ll cover a wide range of tips for traveling on a budget, helping you to save on everything from flights to food and experiences.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">1. Plan Your Budget Carefully</h2>
    <p>The first step to budget travel is understanding how much you’re willing to spend. Break down your budget into categories: transportation, accommodation, food, activities, and souvenirs. This way, you’ll have a clear idea of how much you can allocate to each area and avoid overspending.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">2. Use Flight Comparison Tools</h2>
    <p>Flight comparison tools like Skyscanner and Google Flights allow you to track prices and find the best deals. Be flexible with your dates and destinations—sometimes, flying into a nearby city can save you hundreds of dollars.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">3. Travel During the Off-Season</h2>
    <p>If you can, try to travel during the off-season. Popular destinations often see a surge in prices during peak tourist periods. Traveling in the shoulder season or low season allows you to experience the same sights at a fraction of the cost, plus with fewer crowds!</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">4. Book Accommodations Strategically</h2>
    <p>When it comes to where you stay, you have many options beyond hotels. Hostels, guesthouses, and vacation rentals can provide a more affordable and authentic experience. Consider staying just outside the city center to save on accommodation while still being close to major attractions.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">5. Take Advantage of Public Transportation</h2>
    <p>Public transportation is often the most affordable way to get around in many cities. Instead of relying on taxis or rideshare services, take the bus, metro, or even rent a bike to explore your destination. Many cities offer tourist passes that provide unlimited transportation for a set price.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">6. Eat Like a Local</h2>
    <p>Dining out can eat into your budget quickly. Instead, eat like a local by visiting food markets or street food vendors. Not only will you save money, but you’ll also get a more authentic taste of the local cuisine. If you’re staying in an Airbnb or hostel with a kitchen, cooking your own meals can be a major money-saver.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">7. Look for Free or Low-Cost Activities</h2>
    <p>Many destinations offer free or inexpensive activities. Research local museums, parks, or events that are free to enter. Walking tours or self-guided tours can provide a rich experience without the price tag. Some cities even offer free days at major attractions, so be sure to plan accordingly.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">8. Travel Light</h2>
    <p>Pack light to avoid extra baggage fees. Most airlines charge for checked bags, so bringing just a carry-on can save you money and make traveling easier. Packing light also gives you more flexibility to move around quickly and adapt to changes in your plans.</p>
    
    <p>By following these tips, you can enjoy memorable trips without the hefty price tag. With careful planning, creativity, and resourcefulness, you can embark on your next adventure without blowing your budget. Traveling on a budget doesn't mean sacrificing quality—it means making the most of every dollar!</p>
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
