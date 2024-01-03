"use client"
import {useState} from 'react';
import type {Snippet} from '@prisma/client';
import Editor from '@monaco-editor/react';
import * as actions from '@/actions';


interface EditSnippetFormProps {
  snippet: Snippet
}

export default function EditSnippetForm ({snippet}: EditSnippetFormProps){
  const [code, setCode] = useState(snippet.code);
  
  const handleCodeChange = (value: string = "") => {
    setCode(value);
  }

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <p className="mb-3">Editing snippet: {(snippet.title).toUpperCase()}</p>
      <Editor 
        height="40vh"
        theme="vs-dark"
        language="typescript"
        options={{minimap: {enabled: false}}}
        defaultValue={snippet.code}
        onChange={handleCodeChange}
      />
      <form action={editSnippetAction}>
        <button className="p-2 mt-4 border rounded border-slate-300 bg-gray-200 hover:bg-slate-300" type="submit">Update</button>
      </form>
    </div>
  )
}