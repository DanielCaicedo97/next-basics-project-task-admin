"use client";
import { useRouter } from "next/navigation";

function TaskCard({ task }) {
  const router = useRouter();
  return (
    <div className="bg-slate-900 rounded-lg text-white p-4 m-4 hover:bg-slate-700 hover:cursor-pointer" onClick={()=>{
      router.push('/task/edit/' + task.id)
    }}>
      <h3 className="text-2xl font-bold mb-2">{task.title}</h3>
      <p className="text-yellow-100">{task.description}</p>
      <p>{new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default TaskCard;
