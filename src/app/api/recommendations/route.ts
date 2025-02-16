// app/api/recommendations/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { track, artist } = await request.json();
    const API_KEY = process.env.GEMINI_API_KEY;

    const prompt = `Based on the song "${track}" by ${artist}, recommend 3 similar songs with brief reasons. 
      Format as JSON array with track, artist, and reason. THERE SHOULD BE NO MARKDOWN OR ANY OTHER FORMAT RETURNED. ONLY RETURN JSON. NO MARKDOWN BOI. Example:
      [{
        "track": "Song Name",
        "artist": "Artist Name",
        "reason": "Brief reason related to musical style, genre, or mood"
      }]`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    const data = await response.json();
    const responseText = data.candidates[0].content.parts[0].text;
    
    // Clean up the response text by removing markdown code blocks
    const cleanJSON = responseText
      .replace(/```json\n/g, '')  // Remove opening code block
      .replace(/```\n?/g, '')     // Remove closing code block
      .trim();                    // Remove any extra whitespace
    
    const recommendations = JSON.parse(cleanJSON);
    
    return NextResponse.json({ recommendations });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate recommendations' },
      { status: 500 }
    );
  }
}