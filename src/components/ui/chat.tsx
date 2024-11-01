'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from 'lucide-react';
import Loader from './loader';
import DotLoader from './DotLoader';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

export default function ChatComponent() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm Triptify! Ask me anything.", sender: 'ai' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const [messageCount, setMessageCount] = useState(0); // Track the number of messages sent

  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!userInput.trim() || isCooldown) return;

    setLoading(true);
    setMessages(prev => [...prev, { id: prev.length + 1, text: userInput, sender: 'user' }]);
    setMessageCount(prev => prev + 1); // Increment the message count

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

        // Check if the message count reaches 3
        if (messageCount >= 5) {
          setIsCooldown(true); // Set cooldown
          setMessageCount(0); // Reset message count
          setTimeout(() => {
            setIsCooldown(false); // Clear cooldown after 2 minutes (120000 ms)
          }, 120000); // Adjust the duration as needed (2 minutes here)
        }
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

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="p-6">
      <Card className="w-full max-w-4xl mx-auto bg-zinc-300 border-blue-800 rounded-3xl shadow-md">
        <CardHeader className="mb-4">
          {/* Optionally, add a title or close button here */}
        </CardHeader>
        <CardContent>
        <ScrollArea ref={scrollAreaRef} className="h-[500px] md:h-[600px] p-4 text-base md:text-xl font-bold overflow-y-auto chat-background">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
                <div className={`flex items-start ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <Avatar className="w-8 h-8 md:w-10 md:h-10">
                    <AvatarFallback>{message.sender === 'user' ? 'U' : 'AI'}</AvatarFallback>
                  </Avatar>
                  <div className={`mx-1 text-base px-2 py-1 rounded-lg ${message.sender === 'user' ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
                    {message.text}
                  </div>
                </div>
              </div>
            ))}
            {isCooldown && (
              <div className="text-sm text-center text-red-500 mt-4">
                We use cooldowns to regulate traffic on the web. Please try again later.
              </div>
            )}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              disabled={loading || isCooldown}
              className="h-12 text-lg rounded-2xl bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-800 transition flex-grow"
            />
            <Button onClick={handleSend} disabled={loading || isCooldown} className='bg-[#0c0c12] hover:bg-[#4e4e7a] h-12 text-lg rounded-full transition-colors'>
              {loading ? <Loader /> : isCooldown ? <DotLoader/> : <ArrowRight />}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
