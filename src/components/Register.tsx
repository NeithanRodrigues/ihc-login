import { useState } from "react";
import { users } from "../user";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleRegister = () => {
    if (!username || !password) {
      setFeedback("Preencha todos os campos!");
      return;
    }

    const exists = users.some((u) => u.username === username);
    if (exists) {
      setFeedback("Este usuário já existe!");
      return;
    }

    users.push({ username, password });
    setFeedback("Conta criada com sucesso! 🎉");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0d0d0d] via-[#121212] to-[#1c1c1c] p-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-[350px] flex flex-col gap-5 text-center transition-all">
        
        <h1 className="text-3xl font-semibold text-white drop-shadow">
          Criar Conta
        </h1>

        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-3 bg-white/20 text-white placeholder-gray-300 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 bg-white/20 text-white placeholder-gray-300 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={handleRegister}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/40 transition-all"
        >
          Registrar
        </button>

        {feedback && (
          <p className="text-sm text-white bg-white/20 p-2 rounded-lg border border-white/30">
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
}
