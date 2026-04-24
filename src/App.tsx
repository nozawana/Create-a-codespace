import { useState, useEffect } from "react";

export default function App() {
  // ① 初期化：LocalStorageからデータを読み込む
  const [todos, setTodos] = useState<string[]>(() => {
    const saved = localStorage.getItem("my-todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState<string>("");

  // ② 保存：todosが変わるたびにLocalStorageへ書き込む
  useEffect(() => {
    localStorage.setItem("my-todos", JSON.stringify(todos));
  }, [todos]);

  // ③ 追加機能
  const addTodo = () => {
    if (text === "") return;
    setTodos([...todos, text]);
    setText("");
  };

  // ④ 削除機能（今回追加！）
  const deleteTodo = (index: number) => {
    // filterメソッド：条件に合うもの（クリックしたindex以外のもの）だけを残す
    const newTodos = todos.filter((_, i) => i === index);
    setTodos(newTodos);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">TODOアプリ完成版</h1>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 flex-grow mr-2"
          placeholder="新しいTODOを入力"
        />
        <button onClick={addTodo} className="bg-green-500 text-white px-4 py-2 rounded">
          追加
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2 px-1">
            <span>{todo}</span>
            <button 
              onClick={() => deleteTodo(index)} 
              className="text-red-500 hover:bg-red-50 px-2 py-1 rounded text-sm transition-colors"
            >
              削除
            </button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button 
          onClick={() => setTodos([])} 
          className="mt-8 text-xs text-gray-400 underline hover:text-red-400"
        >
          すべて消去
        </button>
      )}
    </div>
  );
}