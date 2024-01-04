'use client';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';

export default function SnippetCreatePage() {
  const formStateInitial = { message: '' };
  const [formState, action] = useFormState(
    actions.createSnippet,
    formStateInitial
  );

  // code shows how that was made initially
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
    <form action={action}>
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
        {formState.message ? (
          <p className="self-start my-2 p-2 border rounded bg-red-200 border-red-600 ">
            {formState.message}
          </p>
        ) : null}
        <button className="rounded p-2 bg-blue-200 w-full" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
