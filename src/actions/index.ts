'use server';
import prisma from '@/db';
import { redirect } from 'next/navigation';

export async function deleteSnippet(id: number) {
  await prisma.snippet.delete({
    where: { id },
  });
  redirect('/');
}

export async function editSnippet(id: number, code: string) {
  await prisma.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get('title');
    const code = formData.get('code');

    if (!title || typeof title !== 'string' || title.length < 3) {
      return { message: 'Title should be at least 3 characters long' };
    }

    if (!code || typeof code !== 'string' || code.length < 10) {
      return { message: 'Code should be at least 10 characters long' };
    }

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });

    // uncomment code to simulate db request issues
    // throw new Error(
    //   'We experience unexpected problem with Databasa. Please try again later.'
    // );
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: 'Something went wrong.' };
    }
  }
  redirect('/');
}
