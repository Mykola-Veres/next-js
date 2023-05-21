import { useRouter } from "next/router";
import React from "react";
import { FormEvent, useState } from "react";

export function TodoList() {
  const Router = useRouter();
  const [title, setTitle] = useState("");

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      body: JSON.stringify({ title: title }),
    })
      .then((res) => res.json())
      .then(() => {
        Router.reload();
        // refresh();
      });
    setTitle("");
  };

  return (
    <form onSubmit={handlerSubmit} className="flex">
      <div>add</div>
      <input
        value={title}
        onChange={(e) => setTimeout(e.target.value)}
        className="h-10"
      />
      <button className="h-10">ADDD</button>
    </form>
  );
}
