import { useState, useEffect } from "react";

export default function App() {
  // ① 初期値：保存されているデータがあればそれを使い、なければ空配列 []
  const [todos, setTodos] = useState<string[]>(() => {
    const saved = localStorage.getItem("my-todos");
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

// ...中略...
  const deleteTodo = (index: number) => {
    // 指定したインデックス以外の項目だけを残す（＝削除）
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="p-8">
      {/* ...入力欄などはそのまま... */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            <span>{todo}</span>
            <button 
              onClick={() => deleteTodo(index)} 
              className="text-red-500 hover:bg-red-100 px-2 py-1 rounded"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
      {/* ...すべて消去ボタンなどはそのまま... */}
    </div>
  );
}