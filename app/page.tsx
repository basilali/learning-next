import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Link href="/users" className="btn btn-primary">
        Users
      </Link>
    </div>
  );
}
