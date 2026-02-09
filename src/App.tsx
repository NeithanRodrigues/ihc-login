import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  const [screen, setScreen] = useState<"login" | "register">("login");

  return (
    <>
      {screen === "login" ? <Login /> : <Register />}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        {screen === "login" ? (
          <button
            onClick={() => setScreen("register")}
            className="text-white underline"
          >
            Criar conta
          </button>
        ) : (
          <button
            onClick={() => setScreen("login")}
            className="text-white underline"
          >
            Já tenho conta
          </button>
        )}
      </div>
    </>
  );
}
