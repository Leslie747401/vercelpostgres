'use client'

import { useState } from "react";

export default function Home() {

  const [userInput,setUserInput] = useState('');

  return (
   <form className="w-screen h-screen flex flex-col gap-10 justify-center items-center">
      <input type="text" className="px-5 py-3 w-[400px] bg-white rounded-xl border border-[#b4b4b4] outline-none" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
      <input type="submit" className="bg-black px-4 py-2 text-white rounded-lg cursor-pointer"/>
   </form>
  );
}
