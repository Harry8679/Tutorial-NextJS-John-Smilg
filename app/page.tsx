import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href='/about' className='text-xl text-blue-500 inline-block mt-8'>About Page</Link>
    </div>
  );
}
