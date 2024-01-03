import { redirect } from 'next/navigation';
import prisma from '@/db';

export default function SnippetCreatePage() {

  async function createSnippet(formData: FormData) {
    "use server"
    
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    
    const snippet = await prisma.snippet.create({
      data:{
        title,
        code,
      }
    });

    redirect('/');
  }













  // async function createSnippet(formData: FormData) {
  //   'use server';
  //   const title = formData.get('title') as string;
  //   const code = formData.get('code') as string;

  //   const snippet = await prisma.snippet.create({
  //     data: {
  //       title,
  //       code,
  //     },
  //   });

  //   console.log('snippet: ', snippet);

  //   redirect('/');
  // }
  return (
    <form action={createSnippet}>
      <h1 className="font-bold text-2xl my-3">Create a new snippet</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code">Code</label>
          <textarea
            className="border rounded p-2 w-full"
            id="code"
            name="code"
          />
        </div>
        <button className="rounded p-2 bg-blue-200 w-full" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
