"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params.id) {
        const res = await fetch(`/api/tasks/${params.id}`, {
          method: "PUT",
          body: JSON.stringify({ title, description }),
          headers: {
            "content-type": "aplication/json",
          },
        });
        const data = await res.json();
        console.log(data);
      } else {
        const res = await fetch("api/tasks", {
          method: "POST",
          body: JSON.stringify({ title, description }),
          headers: {
            "content-type": "aplication/json",
          },
        });
        const data = await res.json();
        console.log(data);
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-500 p-10 lg:w1/4 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <label className="font-bold text-sm" htmlFor="title">
          Title task
        </label>
        <input
          id="title"
          className=" border border-gray-100 p-2 mb-4 w-full text-black"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label className="font-bold text-sm" htmlFor="description">
          Task Description
        </label>
        <textarea
          id="description"
          className=" border border-gray-100 p-2 mb-4 w-full text-black"
          rows="3"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 py-2 px-4 rounded-md text-white font-bold"
          >
            {params.id ? <span>Edit</span> : <span>Create</span>}
          </button>

          {params.id && (
            <button
              type="button"
              className="bg-red-500 py-2 px-4 rounded-md text-white font-bold"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NewPage;
