import { Post } from "./model";

const getPosts = (): Promise<Iterable<Post>> =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json() as Promise<any[]>)
    .then(arr => arr.map(post => new Post({ ...post })));

const postPost = (userId: number, title: string, body: string): Promise<Post> =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ userId, title, body }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(res => res.json())
    .then(post => new Post({ ...post }));
export { getPosts, postPost };
