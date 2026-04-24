import { useState } from "react";

export default function App() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]); // TODOを格納する配列

  const addTodo = () => {
    //if (text === "") return;
    setTodos([...todos, text]); // 今の配列に新しいテキストを追加
    setText(""); // 入力欄を空にする
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">TODOリスト</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2">
          追加
        </button>
      </div>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="border-b py-2">{todo}</li>
        ))}
      </ul>
    </div>
  );
}