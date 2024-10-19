import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function BlogPost() {
  // In a real application, you would fetch the blog post data based on an ID or slug
  const post = {
    title: "5 Hidden Gems in Slovakia for Your Next Trip",
    date: "October 15, 2024",
    readTime: "5 min read",
    author: {
      name: "Roman Hulik",
      avatar: "/simon.jpg",
    },
    content: `
    <p>Embarking on a road trip through thes Tatra Mountains is more than just getting from point A to point B; it&apos;s about the journey and the unexpected discoveries along the way. In this post, we&apos;ll explore five hidden gems in Slovakia&apos;s breathtaking Tatras that will make your next winter road trip truly unforgettable.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">1. The Ice Cave of Demänovská ľadová jaskyňa</h2>
    <p>Located near the town of Demänovská Dolina, this stunning ice cave is one of the most beautiful in Slovakia. Its frozen waterfalls and ice formations create a magical atmosphere during the winter months.</p>
    <p>A guided tour will take you through its mesmerizing passages, revealing the cave&apos;s breathtaking natural beauty.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">2. Treetop Walk in Bachledka</h2>
    <p>This unique treetop walk offers a stunning view of the Tatra Mountains and surrounding forests. Open year-round, it&apos;s especially beautiful in winter when the trees are draped in snow.</p>
    <p>The walkway winds its way through the treetops and features a lookout tower for panoramic views of the breathtaking landscape.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">3. Štrbské Pleso</h2>
    <p>Štrbské Pleso is a picturesque glacial lake surrounded by snow-capped peaks. In winter, the area transforms into a winter wonderland, perfect for ice skating or a leisurely stroll along the lake&apos;s shores.</p>
    <p>The nearby ski resort also offers excellent skiing opportunities for winter sports enthusiasts.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">4. The Wooden Churches of the Slovak Paradise</h2>
    <p>Hidden within the beautiful Slovak Paradise National Park, these wooden churches are architectural gems that reflect the region&apos;s rich history and culture.</p>
    <p>Visiting in winter adds a unique charm, as the snow-covered landscape creates a serene backdrop for these historic structures.</p>
    
    <h2 style="margin-top: 2rem; margin-bottom: 1rem;">5. The Village of Ždiar</h2>
    <p>This charming village in the Belianske Tatras is known for its traditional wooden houses and stunning mountain views. In winter, Ždiar offers a range of activities, including skiing at the nearby ski resorts and enjoying local cuisine in cozy mountain huts.</p>
    <p>It&apos;s an excellent place to experience authentic Slovak culture and hospitality.</p>
    
    <p>These are just a few of the many hidden gems waiting to be discovered in the Tatra Mountains during winter. Remember, the joy of travel often lies in the unexpected discoveries along the way.</p>
    <p>So, fire up your Triptify app, plot your course, but don&apos;t be afraid to take a detour or two. You never know what wonders you might find just off the beaten path.</p>
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