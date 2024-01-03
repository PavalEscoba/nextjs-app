import prisma from '@/db/';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import * as actions from '@/actions';

interface SnippetProps {
  params: {
    id: string;
  }
} 

export default async function  SnippetPage(props:SnippetProps){
  const snippet = await prisma.snippet.findFirst({
    where: {id: Number(props.params.id)},
  })

  await new Promise<void>((resolve)=>{
    setTimeout(()=>{resolve()}, 2000)
  });

  if(!snippet) notFound();
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link className="border rounded p-2 border-gray-700" href={`/snippets/${snippet.id}/edit`}>Edit</Link>
          <form action={deleteSnippetAction}>
            <button className="border rounded p-2 border-gray-700" type="submit">Delete</button>
          </form>
        </div>
      </div>
      <br />
      <pre className="flex p-3 border rounded bg-gray-300 border-gray-700">
        <code>{snippet.code}</code>
      </pre>
    </div>
    )
}