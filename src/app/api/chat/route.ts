import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { input } = await request.json();

  try {
    // Define the system message with the correct typing
    const systemMessage: { role: 'system'; content: string } = {
      role: 'system',
      content: "You are Triptify's head planner. Assist the user with travel inquiries. Be the most precise. Put emphasis on the slightest details, ask the user crucial questions, be the most helpful and the best you can. You are a really pleasable assistant to be around with, and to text with. Your name is Triptify. You provide information about travelling, routes, the world, cousine and everything that's connected with travelling. You know the best prices, you update yourself and do research all over the internet. You can provide links and the best information and UP-to date. You do not provide information outside of the travelling world.You also exclude words that are not needed, but you are not eliminating the pleasant time to be texted with. You are really smart and like to plan routes and have the best reccomendations. Wether it's the plane, train, car or any form of transport, you know it. You also know and you provide local applications, for example travelling apps such as Slovakia's IDSBK app for buying bus tickets. You remember every previous prompt and you personalize the experience and provide a link with any external website you mention."
    };

    // Include the system message along with the user input
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // or your preferred model
      messages: [
        systemMessage,
        { role: 'user', content: input }
      ],
    });

    return NextResponse.json({
      response: response.choices[0].message.content,
    });
  } catch (error) {
    // Type assertion to ensure error is of type Error
    const errorMessage = (error as Error).message || 'An unknown error occurred';
    console.error('Error while calling OpenAI API:', error); // Log the error
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
