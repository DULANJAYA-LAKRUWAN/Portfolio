import { NextResponse } from 'next/server';
import { FEATURED_PROJECTS, SKILL_CATEGORIES, PROFILE } from '@/lib/constants';

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    const qLower = prompt.toLowerCase();
    let reply = "";

    if (qLower.includes("who is") || qLower.includes("dulanjaya") || qLower.includes("about")) {
      reply = `${PROFILE.name} is a ${PROFILE.title}. ${PROFILE.bio}`;
    } else if (qLower.includes("starchance")) {
      const p = FEATURED_PROJECTS.find(x => x.slug === "starchance-platform");
      reply = `StarChance details: ${p?.description} Metrics: ${JSON.stringify(p?.metrics)}. Solution: ${p?.solution}`;
    } else if (qLower.includes("projects")) {
      reply = `Dulanjaya has built signature production projects including: ${FEATURED_PROJECTS.map(p => p.title).join(", ")}.`;
    } else {
      reply = `Dulanjaya Lakruwan is an expert Senior Staff Engineer & System Architect specializing in distributed cloud backends, AI RAG vector integration, and sub-100ms web applications. Email: ${PROFILE.email}`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ error: 'AI RAG engine processing failed' }, { status: 500 });
  }
}
