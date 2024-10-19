import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function BlogPost() {
  // In a real application, you would fetch the blog post data based on an ID or slug
  const post = {
    title: "Packing Essentials: What to Bring on Your Trip",
    date: "October 30, 2024",
    readTime: "15 min read",
    author: {
      name: "Linda Hinge",
      avatar: "/linda.jpg", // Update this path with the correct image
    },
    content: `
    <p>Packing for a trip can be one of the most stressful parts of travel. You’re trying to anticipate every possible scenario while also fitting everything into your luggage without overpacking. Whether you’re heading off for a weekend getaway, an extended vacation, or a business trip, knowing what to pack and how to pack efficiently can make your journey much smoother. In this guide, we’ll cover the essential items you should consider bringing, packing strategies to save space, and some tips for staying organized while on the go.</p>

    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">1. Choose the Right Luggage</h2>
    <p>Before you start packing, it’s important to choose the right luggage for your trip. The type of luggage you’ll need depends on several factors, including the length of your trip, your destination, and the activities you have planned. If you’re going on a short weekend trip, a carry-on bag or a small duffel should suffice. For longer trips, consider a larger suitcase or a backpack if you plan to move around frequently.</p>
    <p>Make sure your luggage is durable and easy to transport. Wheeled suitcases are great for airports and urban environments, but if you’re going to be traveling through rough terrain or cobblestone streets, a sturdy backpack might be a better option. It’s also a good idea to invest in packing cubes, which help keep your items organized and maximize space.</p>

    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">2. Clothing Essentials: Pack Smart, Not Heavy</h2>
    <p>When it comes to packing clothing, less is often more. You want to bring versatile pieces that can be mixed and matched to create multiple outfits without overloading your suitcase. Start by checking the weather forecast for your destination to ensure you pack the right types of clothing. Layering is key, especially if you’re traveling to a destination with varying temperatures.</p>
    <p>For a week-long trip, consider the following clothing essentials:</p>
    <ul>
      <li>3-5 tops that can be dressed up or down</li>
      <li>2-3 pairs of pants or skirts</li>
      <li>1-2 dresses or formal outfits (if needed)</li>
      <li>A light jacket or sweater for layering</li>
      <li>Comfortable shoes (one pair for walking, one pair for dressier occasions)</li>
      <li>Undergarments and socks for each day of the trip</li>
    </ul>
    <p>When packing, roll your clothes instead of folding them. This saves space and helps prevent wrinkles. If you’re worried about laundry on longer trips, many hotels offer laundry services, or you can bring a small laundry kit for washing items in your hotel room.</p>

    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">3. Toiletries: Keep It Simple</h2>
    <p>Toiletries are another area where travelers tend to overpack. Keep it simple by bringing travel-sized versions of your daily essentials, or consider buying toiletries once you reach your destination to save space. Most hotels and accommodations provide basic toiletries like shampoo, conditioner, and soap, so you may not need to pack these unless you have specific preferences or skin sensitivities.</p>
    <p>Here’s a basic toiletries list to get you started:</p>
    <ul>
      <li>Toothbrush and travel-sized toothpaste</li>
      <li>Deodorant</li>
      <li>Shampoo, conditioner, and body wash (if not provided by your accommodation)</li>
      <li>Hairbrush or comb</li>
      <li>Skincare essentials (cleanser, moisturizer, sunscreen)</li>
      <li>Any prescription medications or vitamins</li>
    </ul>
    <p>To avoid spills, pack your liquids in a clear, resealable bag. If you’re flying, make sure your liquids comply with airport security regulations (usually 100ml or 3.4oz containers).</p>

    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">4. Travel Tech: Gadgets and Accessories</h2>
    <p>In today’s digital age, tech gadgets have become essential travel companions. From smartphones to laptops, having the right tech can enhance your travel experience and help you stay connected while on the go. Here’s a list of essential travel tech items you might want to consider:</p>
    <ul>
      <li>Smartphone with charger</li>
      <li>Portable power bank for charging on the go</li>
      <li>Noise-canceling headphones for flights or public transport</li>
      <li>Laptop or tablet (if needed for work or entertainment)</li>
      <li>Camera or GoPro to capture your journey</li>
      <li>Universal travel adapter (especially for international trips)</li>
    </ul>
    <p>If you plan on using your devices frequently, a portable power bank is a must. It ensures that you can charge your phone, camera, or other devices, even if you’re away from a power outlet for long periods of time.</p>

    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">5. Important Documents and Essentials</h2>
    <p>When traveling, it’s crucial to have your important documents in order. Keep these items organized in a travel wallet or document organizer so that they’re easily accessible:</p>
    <ul>
      <li>Passport or ID (depending on your destination)</li>
      <li>Boarding passes or e-tickets</li>
      <li>Travel insurance documents</li>
      <li>Hotel reservations and confirmation numbers</li>
      <li>Credit cards and a small amount of local currency</li>
      <li>Emergency contact information</li>
    </ul>
    <p>If you’re traveling internationally, it’s also a good idea to make photocopies of your passport and any visas you might need. Store these copies in a separate location from the originals, in case you lose them. Having digital backups of your documents in cloud storage or emailed to yourself is also recommended.</p>

    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">6. Health and Safety Items</h2>
    <p>Your health and safety should always be a priority when traveling. Here are a few items to pack to ensure you’re prepared for minor health issues or emergencies:</p>
    <ul>
      <li>Basic first aid kit (band-aids, pain relievers, antiseptic wipes)</li>
      <li>Hand sanitizer and face masks (especially important for public transportation or crowded areas)</li>
      <li>Any prescription medications (with copies of the prescription)</li>
      <li>Insect repellent and sunscreen</li>
      <li>Reusable water bottle</li>
    </ul>
    <p>It’s also a good idea to research any vaccinations or health precautions needed for your destination. If you’re traveling to a country with different healthcare systems or languages, knowing where the nearest hospital or clinic is can provide peace of mind.</p>

    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">7. Entertainment and Comfort for the Journey</h2>
    <p>Long flights, bus rides, or train journeys can be tiring, but having some entertainment and comfort items can make the experience more enjoyable. Consider packing the following:</p>
    <ul>
      <li>A good book, e-reader, or magazine for reading</li>
      <li>Download movies or TV shows on your device for offline viewing</li>
      <li>Travel pillow and blanket for comfort during long trips</li>
      <li>A journal or sketchbook if you enjoy documenting your travels</li>
      <li>Snacks, especially for long-haul flights or remote destinations</li>
    </ul>
    <p>Don’t forget to download offline maps or apps for your destination, especially if you won’t have reliable internet access. Having entertainment ready can also help pass the time during delays or long layovers.</p>

    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">Final Tips for Packing Success</h2>
    <p>Now that you know what to pack, here are a few final tips to ensure a smooth packing process and stress-free trip:</p>
    <ul>
      <li><strong>Make a packing list:</strong> Write down everything you need to bring and check it off as you pack.</li>
      <li><strong>Weigh your luggage:</strong> Make sure your bag is within your airline’s weight limits to avoid extra fees.</li>
      <li><strong>Pack your carry-on wisely:</strong> Keep essential items (passport, tickets, medication) in your carry-on in case your checked luggage is delayed.</li>
    </ul>
    <p>Packing doesn’t have to be a stressful experience. With a bit of planning and the right essentials, you’ll be ready for whatever your trip throws your way. Happy travels!</p>
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
