import { useState } from "react";
import { api } from "../../utils/axios";
import { toast } from "react-toastify";

export default function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const checkLogin = (e) => {
    e.preventDefault();

    api.get(`/register`).then((res) => {
      //   console.log(res.data.some((obj) => obj.name === "22ff"));
      if (
        res.data.some((obj) => obj.username === username) &&
        res.data.some((obj) => obj.password === password)
      ) {
        toast.success("Success!");
      } else {
        toast.error("Failed! Username or password is incorrect!");
      }
    });
  };

  return (
    <>
      <form action="" onSubmit={checkLogin}>
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
