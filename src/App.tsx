import { useState, useEffect } from "react";

export default function App() {
  // ① 初期値：保存されているデータがあればそれを使い、なければ空配列 []
  const [todos, setTodos] = useState<string[]>(() => {
    const saved = localStorage.getItem("wrong-key");
    //const saved = localStorage.getItem("my-todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState<string>("");

  // ② 保存：todosの中身が変わるたびに実行される
  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (text === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">保存機能付きTODO</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addTodo} className="bg-green-500 text-white px-4 py-2">
          追加
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="border-b py-2">{todo}</li>
        ))}
      </ul>
      {/* 削除ボタン */}
      <button 
        onClick={() => setTodos([])} 
        className="mt-10 text-xs text-gray-400 underline"
      >
        すべて消去
      </button>
    </div>
  );
}