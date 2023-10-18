import Head from 'next/head'
import { Main } from '@/components/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>askSQL</title>
        <meta
          name="description"
          content="SQL translation web app, able to receive a schema and tranlate natural language questions to SQL queries"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Main />
    </>
  )
}
