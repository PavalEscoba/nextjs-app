import Link from 'next/link'
import prisma from '@/db/';

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  const renderedSnippets = snippets.map((s) => {
    return (
    <div key={s.id}>
      <Link className="flex justify-between items-center p-2 border rounded" href={`/snippets/${s.id}`} >
        <p className="font-italic">{s.title}</p>
        <div>View</div>
      </Link>
    </div>
  )
  });
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold mb-4 ">Snippets List</h1>
        <Link href="/snippets/new" className="border rounded p-2 italic">New</Link>
      </div>
      {renderedSnippets}
    </div>
  );
}
