import { fetchNews } from "./data/news";

export const revalidate = 180;

function formatDate(d: Date): string {
  return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
}

export default async function Home() {
  const news = await fetchNews();
  return <div className="z-10 max-w-3xl w-full items-start justify-between font-mono text-sm lg:flex">
    <div>
      <img src="/lamp.jpeg" alt="lamp" />
    </div>
    <div className="flex flex-col justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static w-auto max-w-96 ml-2 rounded-xl border bg-gray-200 p-4">
      {news.map(n => <div key={n.title}>
        <div className="mb-2">{formatDate(n.date)} - <span className="font-bold">{ n.title }</span></div>
        <div>{ n.text }</div>
      </div>)}
    </div>
  </div>
}
