import { useEffect, useState } from "react";
import { api } from "../../utils/axios";

export default function NewsPage() {
  let [title, setTitle] = useState("");
  let [body, setBody] = useState("");
  let [image, setImage] = useState("");
  let [date, setDate] = useState("");

  let [news, setNews] = useState([]);

  useEffect(() => {
    setDate(new Date().toString());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/news", { title, body, image, date })
      .then((res) => console.log(res.data));
  };

  const showNews = () => {
    api.get("/news").then((res) => {
      setNews(res.data);
    });
  };

  const deleteNews = (id) => {
    api.delete(`/news/${id}`);
  };

  const updateNews = (id) => {
    api.patch(`/news/${id}`, {
      title,
      body,
      image,
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <input
          type="text"
          placeholder="author"
          onChange={(e) => setImage(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <div>
        <button onClick={() => showNews()}>Show</button>
        {news.map((news) => (
          <div>
            <h1>{news.title}</h1>
            <p>{news.body}</p>
            <p>{date}</p>
            <p>{news.image}</p>
            <button
              onClick={() => {
                deleteNews(news._id);
              }}
            >
              delete
            </button>
            <button onClick={() => updateNews(news._id)}>Update</button>
          </div>
        ))}
      </div>
    </>
  );
}
