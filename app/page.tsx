export default function Home() {
  return (
   <form className="w-screen h-screen flex flex-col gap-10 justify-center items-center">
      <input type="text" className="px-5 py-3 w-[400px] bg-white rounded-xl border border-[#b4b4b4] outline-none"/>
      <input type="submit" className="bg-black px-4 py-2 text-white rounded-lg cursor-pointer"/>
   </form>
  );
}
