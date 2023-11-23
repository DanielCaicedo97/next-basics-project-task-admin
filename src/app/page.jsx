import TaskCard from "@/components/TaskCard";
import Link from "next/link";
import { prisma } from "@/libs/prisma";
const loadTask = async () => {
  const res = await fetch('http://localhost:3000/api/tasks')
  const data = await res.json()
  // const data = await prisma.task.findMany();
  return data;
};


// export const revalidate = 0;
export const dynamic = "force-dynamic";


async function HomePage() {
  const tasks = await loadTask();
  return (
    <div>
      {tasks.length > 0 ? (
        <section className="container mx-auto">
          <div className="grid grid-cols-3 gap-3">
            {tasks.map((task) => (
              <TaskCard task={task} key={task.id} />
            ))}
          </div>
        </section>
      ) : (
        <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
          <div className="text-center">
            <h1 className="font-bold text-2xl ">Empty tasks</h1>
            <Link className="text-slate-400" href="/new">
              Click here to create task
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

export default HomePage;
