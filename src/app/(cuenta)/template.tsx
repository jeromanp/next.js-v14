"use client";
import { useState } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");

  return (
    <>
      <h2>Perfil de usuario</h2>
      <h3>Diferencia entre layout y template</h3>
      {children}
      <br/>
      <br/>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}
