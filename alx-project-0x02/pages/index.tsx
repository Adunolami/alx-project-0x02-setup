import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Scaffolded Next.js Project with TypeScript and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-4">
        <p className="text-lg text-gray-700">
          Welcome to your scaffolded Next.js project with TypeScript and Tailwind CSS!
        </p>
      </main>
    </div>
  );
}