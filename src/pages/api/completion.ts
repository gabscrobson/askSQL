import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export default async function handler(req: Request) {
  const { schema, prompt } = await req.json()

  const message =
    `Your job is create a SQL querie based on a question and the schema below:
    """
    ${schema}
    """
    
    The question is:
    """
    ${prompt}
    """

    Return ONLY the SQL code, nothing else.
  `.trim()

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'user',
        content: message,
      },
    ],
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}
