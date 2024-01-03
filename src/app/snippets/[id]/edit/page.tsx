import {notFound} from 'next/navigation'
import prisma from '@/db';
import EditSnippetForm from '@/components/EditSnippetForm'

interface EditSnippetPageProps {
  params: {
    id: string
  }
}

export default async function EditSnippetPage(props:EditSnippetPageProps){
  const id = Number(props.params.id)
  const snippet = await prisma.snippet.findFirst({
    where: {id}
  })

  if(!snippet) notFound();

  
  return (
    <EditSnippetForm snippet={snippet}/>
  )
}