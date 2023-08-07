import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link href="/users">Users</Link>
        <Link href="/parallel">Go to Parallel Routing World</Link>
      </p>
    </main>
  );
}
