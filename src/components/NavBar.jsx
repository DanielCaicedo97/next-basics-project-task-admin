import Link from "next/link";
function NavBar() {
  return (
    <nav className="bg-slate-700">
      <div className="container flex mx-auto justify-between items-center py-3">
        <Link href="/">
          <h3 className="font-bold text-2xl mx-5">NextCRUD</h3>
        </Link>
        <ul className="flex gap-x-2 mx-5 font-bold">
          <li>
            <Link className="text-slate-300 hover:text-slate-200" href="/">
              Tasks
            </Link>
          </li>
          <li>
            <Link className="text-slate-300 hover:text-slate-200" href="/new">
              New task
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
