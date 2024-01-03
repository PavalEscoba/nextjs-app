"use client"
import PropagateLoader from "react-spinners/PropagateLoader";

export default function LoadingPage(){
  return <div className="flex justify-center">
    <PropagateLoader color="tomato" />
  </div>
}