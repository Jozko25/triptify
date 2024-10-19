'use client'

import { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import BackgroundGrid from '@/components/ui/grid/BackgroundGrid'

export default function AIRoutePlanner() {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [preferences, setPreferences] = useState({
    avoidTolls: false,
    preferScenic: false,
    optimizeForEV: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Handle the submission here
    console.log('Submitted:', { input, preferences })
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 p-4 flex items-center justify-center">
      <BackgroundGrid/>
      <div className="w-full max-w-4xl bg-zinc-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 space-y-6">
          {/* Title placed above the form */}
          <h1 className='text-center text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-600 gap-6 mb-6' style={{ lineHeight: '1.6' }}>
            Start planning here.
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="route-input" className="text-sm font-medium text-gray-400">
                Describe your route the best you can. The more details you provide, the more personalized the experience will be. Include every little thing you think of, and trust, the experience will be worth it.
              </Label>
              <Textarea
                id="route-input"
                placeholder="I am planning a trip to Berlin in March. I enjoy Asian food and prefer to stay in a hotel that is fairly clean, with a budget of 50 USD per night. I'll be traveling by car and will only refuel at Shell stations. My friend, who is joining me, likes to take breaks during the journey to avoid getting bored. Additionally, I'd like to use a feature that suggests things to do in Berlin after 5 PM."
                className="min-h-[150px] w-full bg-zinc-700 border-gray-600 placeholder-gray-400 focus:border-zinc-400 focus:ring-blue-400 transition-all duration-300"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="avoid-tolls"
                  checked={preferences.avoidTolls}
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, avoidTolls: checked }))}
                />
                <Label htmlFor="avoid-tolls" className="text-sm font-medium text-gray-400">Avoid Tolls</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="prefer-scenic"
                  checked={preferences.preferScenic}
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, preferScenic: checked }))}
                />
                <Label htmlFor="prefer-scenic" className="text-sm font-medium text-gray-400">Prefer Scenic Routes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="optimize-ev"
                  checked={preferences.optimizeForEV}
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, optimizeForEV: checked }))}
                />
                <Label htmlFor="optimize-ev" className="text-sm font-medium text-gray-400">Optimize for EV</Label>
              </div>
            </div>
            <div className="flex justify-center">
            <Button
              type="submit"
              className="w-72 text-lg bg-zinc-500 text-white text-xl text-white font-bold bg-green-500 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                'Plan Route'
              )}
            </Button>
          </div>


          </form>
        </div>
        <div className="bg-zinc-700 p-4">
          <p className="text-xs text-center text-gray-400">
            Powered by advanced AI algorithms for optimal route planning
          </p>
        </div>
      </div>
    </div>
  )
}
