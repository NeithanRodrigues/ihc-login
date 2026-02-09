import { useState } from "react";
import { users } from "../user";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setFeedback("Login realizado com sucesso! 🎉");
    } else {
      setFeedback("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#121212]">
      <div className="bg-white p-10 rounded-xl shadow w-[350px] flex flex-col gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Entrar</h1>

        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />

        <button
          onClick={handleLogin}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded transition"
        >
          Entrar
        </button>

        {feedback && (
          <p className="text-sm text-gray-700 bg-gray-100 p-2 rounded">
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
}
