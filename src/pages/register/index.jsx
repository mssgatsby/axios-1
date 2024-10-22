import { useEffect, useState } from "react";
import { api } from "../../utils/axios";

export default function Register() {
  let [name, setName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    api
      .post("/register", { name, username, password })
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
