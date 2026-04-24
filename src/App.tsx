import { useState } from "react";

export default function App() {
  const [text, setText] = useState<string>("");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">TODOアプリを作ろう</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 mr-2"
      />
      <p className="mt-4">入力中の文字: {text}</p>
    </div>
  );
}