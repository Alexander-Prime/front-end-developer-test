import { Comment } from "./model";

const getComments = (): Promise<Iterable<Comment>> =>
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json() as Promise<any[]>)
    .then(arr => arr.map(comment => new Comment({ ...comment })));

const postComment = (
  postId: number,
  name: string,
  email: string,
  body: string,
): Promise<Comment> =>
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    body: JSON.stringify({ postId, name, email, body }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(res => res.json())
    .then(comment => new Comment({ ...comment }));

export { getComments, postComment };
