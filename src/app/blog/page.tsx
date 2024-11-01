import Link from 'next/link'
import { Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from '@/components/ui/footer'
import MaxWidthWrapper from '@/components/ui/MaxWidthWrapper'

const blogPosts = [
  {
    id: 1,
    title: "5 Other Hidden Gems in Slovakia for Your Next Trip",
    excerpt: "Discover off-the-beaten-path in Paris that will make your trip unforgettable.",
    date: "2025-02-15",
    readTime: "5 min read",
    slug: "/blog/gems-slovakia",
    image: <img className='rounded-xl float-right w-[200px] h-auto mr-4' src="slovak_nature.jpg" alt="slovensko" />
  },
  {
    id: 2,
    title: "How to Plan the Perfect Cross-Country Adventure",
    excerpt: "Tips and tricks for planning a seamless cross-country trip using Triptify.",
    date: "2025-02-10",
    readTime: "8 min read",
    slug: "/blog/perfect-cross-country-adventure",
    image: <img className='rounded-xl float-right w-[200px] h-auto mr-4' src="cross.jpg" alt="cross" />
  },
  {
    id: 3,
    title: "Eco-Friendly Travel: Sustainable Route Planning",
    excerpt: "Learn how to minimize your carbon footprint while exploring the world.",
    date: "2025-02-05",
    readTime: "6 min read",
    slug: "/blog/sustainable-route-planning",
    image: <img className='rounded-xl float-right w-[200px] h-auto mr-4' src="kokoti.jpg" alt="tesla" />
  },
  {
    id: 4,
    title: "The Art of Spontaneous Travel: Flexible Route Planning",
    excerpt: "Embrace the unexpected and learn how to plan routes that allow for spontaneity.",
    date: "2025-01-30",
    readTime: "7 min read",
    slug: "/blog/spontaneous-travel",
    image: <img className='rounded-xl float-right w-[200px] h-auto mr-4' src="plane.jpg" alt="plane" />
  },
  {
    id: 5,
    title: "Traveling on a Budget: Tips for Thrifty Adventurers",
    excerpt: "Explore the best tips for traveling without breaking the bank.",
    date: "2025-01-25",
    readTime: "5 min read",
    slug: "/blog/budget-travel-tips",
    image: <img className='rounded-xl float-right w-[200px] h-auto mr-4' src="budget2.jpg" alt="budget" />
  },
  {
    id: 6,
    title: "Cultural Etiquette: What to Know Before You Go",
    excerpt: "Understand the cultural norms of your travel destinations to enhance your experience.",
    date: "2025-01-20",
    readTime: "4 min read",
    slug: "/blog/cultural-etiquette",
    image: <img className='rounded-xl float-right w-[200px] h-auto mr-4' src="culture.jpg" alt="culture" />
  },
  {
    id: 7,
    title: "Packing Essentials: What to Bring on Your Trip",
    excerpt: "A comprehensive guide to packing efficiently for any journey.",
    date: "2025-01-15",
    readTime: "6 min read",
    slug: "/blog/packing-essentials",
    image: <img className='rounded-xl float-right w-[200px] h-auto mr-4' src="packing.jpg" alt="packing" />
  },
]

export default function BlogPage() {
  return (
    <MaxWidthWrapper>
      <div className='bg-[#02021a] rounded-3xl mt-7 mb-7'>
        
      <div className="min-h-screen bg-transparent text-gray-300 py-12">

        <div className="container mx-auto px-4">
          <h1 className="text-6xl text-center font-thin text-white mb-8 leading-[1.4]">
            Triptify Blog
          </h1>
          <p className="text-2xl text-center font-thin text-white mb-12 leading-[1.2]">
            Discover travel tips, route planning advice, and inspiring stories for your next adventure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-zinc-800 border-gray-700 flex flex-col justify-between">
                <div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-thin text-white leading-[1.2]">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-white font-thin mb-4 leading-[1.2]">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm font-thin text-white leading-[1.2]">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </div>
                <CardFooter className="pt-4 mt-auto">
                  <Link href={post.slug}>
                    <Button variant="ghost" className="font-thin text-blue-400 hover:bg-zinc-900 hover:text-blue-500 flex items-center pr-3 gap-1">
                      Read More <ChevronRight className="ml-1 h-4 w-4 mr-3" />
                    </Button>
                  </Link>
                  {post.image}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className='mt-5 text-center transition text-white text-2xl hover:text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600'>
                  <Link href='/'>Back to Home</Link>
                </div>
        <div className='mx-5 mt-8 mb-6'>
        <Footer />
        </div>
      </div>
      </div>
</MaxWidthWrapper>
    
  )
}
