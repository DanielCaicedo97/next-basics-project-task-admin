import Link from "next/link";

function NotFound() {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center ">
        <h1 className="font-bold text-3xl">Not Found 404 error</h1>
        <Link className="text-slate-400 text-2xl" href="/"> Back to Home</Link>
      </div>
    </section>
  );
}

export default NotFound;
