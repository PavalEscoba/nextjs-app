"use client";

interface ErrorPageProps {
  error: Error,
  reset: ()=>void
}


export default function ErrorPage({error}: ErrorPageProps) {
  return <p>{error.message}</p>
}
