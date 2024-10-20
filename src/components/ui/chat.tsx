'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from 'lucide-react';
import BorderExample from './spinner';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

export default function ChatComponent() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm Triptify's head planner. Provide me with the slightest details of your trip. The more accurate details, the better the result.", sender: 'ai' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim() || isCooldown) return;

    setLoading(true);
    setMessages(prev => [...prev, { id: prev.length + 1, text: userInput, sender: 'user' }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: userInput }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages(prev => [
          ...prev,
          { id: prev.length + 1, text: data.response, sender: 'ai' },
        ]);
        setUserInput('');
        setIsCooldown(true);
        setTimeout(() => {
          setIsCooldown(false);
        }, 2000);
      } else {
        console.error(data.error);
        let errorMessage = 'An unknown error occurred';

        if (data.error.includes('429')) {
          errorMessage = 'You have exceeded your API usage quota. Please try again later.';
        } else if (data.error.includes('401')) {
          errorMessage = 'Unauthorized: Please check your API key.';
        } else {
          errorMessage = 'Error: ' + data.error;
        }

        setMessages(prev => [...prev, { id: prev.length + 1, text: errorMessage, sender: 'ai' }]);
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { id: prev.length + 1, text: 'An error occurred while sending your message. Please try again.', sender: 'ai' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto bg-transparent py-6 shadow-lg rounded-lg"
          style={{ maxWidth: '1400px' }}  
      > {/* Added shadow and rounded corners */}
      <CardHeader className="mb-4">
        <h2 className="text-2xl font-semibold text-white">Plan the route.</h2>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4"> {/* Increased height for chat area */}
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
              <div className={`flex items-start ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <Avatar className="w-10 h-10">
                  <AvatarFallback>{message.sender === 'user' ? 'U' : 'AI'}</AvatarFallback>
                </Avatar>
                <div className={`mx-3 px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {message.text}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center space-x-2"> {/* Reduced gap between input and button */}
          <Input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            disabled={loading || isCooldown}
            className="h-12 text-lg rounded-full bg-zinc-400" // Rounded input with focus styles
          />
          <Button onClick={handleSend} disabled={loading || isCooldown} className='bg-green-500 h-12 text-lg rounded-full hover:bg-green-600 transition-colors'> {/* Button hover effect */}
            {loading ? "Loading..." : isCooldown ? 'Cooldown...' : <ArrowRight />}
          </Button>
        </div>
      </CardFooter>
      <p className='text-white text-center text-sm'>Triptify can make mistakes. Consider checking important info.</p>
    </Card>
  );
}
