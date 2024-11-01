"use server"

import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { promises as fs } from 'fs';
import path from 'path'; // For safe file path handling

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Store conversation history
const conversationHistory: { role: 'user' | 'assistant'; content: string }[] = [];

// Object to hold trip details
let tripDetails: {
  destination?: string;
  startPoint?: string;
  travelDate?: string;
  transportation?: string;
  budget?: number;
  accommodation?: string;
} = {};

// Function to simulate fetching flights (replace this with actual API calls if needed)
async function fetchFlights(destination: string, date: string, budget: number) {
  return [
    { airline: 'Airline A', price: 1800, link: 'http://example.com/flightA' },
    { airline: 'Airline B', price: 1900, link: 'http://example.com/flightB' },
  ];
}

// Function to simulate fetching accommodations (replace with actual API calls)
async function fetchAccommodations(destination: string, preferences: string) {
  return [
    { name: 'Cozy Airbnb', price: 150, link: 'http://example.com/airbnb1' },
    { name: 'Luxury Airbnb', price: 300, link: 'http://example.com/airbnb2' },
  ];
}

// POST method to handle user input and interact with OpenAI
export async function POST(request: Request) {
  const { input } = await request.json();

  // Ensure input is valid and handle potential null/undefined
  if (typeof input !== 'string' || input.trim() === '') {
    return NextResponse.json({ error: 'Invalid input. Expected a non-empty string.' }, { status: 400 });
  }

  // Append user input to the conversation history, ensure input is a non-null string
  conversationHistory.push({ role: 'user', content: input ?? '' });

  try {
    // System message describing the assistant's role
    const systemMessage = {
      role: 'system' as const,
      content: `
        You are representing the app Triptify. It lets you plan routes to the slightest details. You provide information about anything in the world, but when you are not sure, you say it.
        Triptify is partially free, partially paid, if a client asks, send him to triptify.lol/pricing.
      `
    };

    // Prepare the conversation for the API request
    const messages = [systemMessage, ...conversationHistory];

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages as { role: 'system' | 'user' | 'assistant'; content: string }[],
    });

    // Get the assistant's response, ensuring it's a non-null string
    const assistantResponse = response.choices[0].message.content ?? '';

    // Process user input to extract trip details
    const lowerCaseResponse = input.toLowerCase();
    if (lowerCaseResponse.includes('la')) {
      tripDetails.destination = 'LA';
    }
    if (lowerCaseResponse.includes('two days')) {
      tripDetails.travelDate = 'in two days';
    }
    if (lowerCaseResponse.includes('plane')) {
      tripDetails.transportation = 'Plane';
    }
    if (lowerCaseResponse.includes('2000')) {
      tripDetails.budget = 2000;
    }
    if (lowerCaseResponse.includes('airbnb')) {
      tripDetails.accommodation = 'Airbnb';
    }

    // Fetch trip options if all required details are present
    if (tripDetails.destination && tripDetails.travelDate && tripDetails.transportation && tripDetails.budget && tripDetails.accommodation) {
      const flights = await fetchFlights(tripDetails.destination, tripDetails.travelDate, tripDetails.budget);
      const accommodations = await fetchAccommodations(tripDetails.destination, tripDetails.accommodation);

      // Format trip details and options
      const tripSummary = `
        Destination: ${tripDetails.destination}
        Starting Point: ${tripDetails.startPoint || 'Not provided'}
        Travel Date: ${tripDetails.travelDate}
        Mode of Transportation: ${tripDetails.transportation}
        Budget: $${tripDetails.budget}
        Accommodation Preferences: ${tripDetails.accommodation}

        Flight Options:
        ${flights.map(flight => `${flight.airline} - $${flight.price} - [Book Here](${flight.link})`).join('\n')}

        Accommodation Options:
        ${accommodations.map(accom => `${accom.name} - $${accom.price} - [View Here](${accom.link})`).join('\n')}
      `;

      // Write trip details to a file
      const filePath = path.join(process.cwd(), 'tripDetails.txt');
      await fs.writeFile(filePath, tripSummary);

      // Return response with formatted trip details
      return NextResponse.json({
        response: assistantResponse,
        tripSummary: tripSummary, // For debugging purposes if needed
        fileUrl: `/tripDetails.txt`, // Make sure this file is accessible
      });
    }

    // Append assistant's response to the conversation history
    conversationHistory.push({ role: 'assistant', content: assistantResponse });

    // Return assistant's response
    return NextResponse.json({
      response: assistantResponse,
    });
  } catch (error) {
    const errorMessage = (error as Error).message || 'An unknown error occurred';
    console.error('Error while calling OpenAI API:', error); // Log the error for debugging
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
