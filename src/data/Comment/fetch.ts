import { Comment } from "./model";

const fetchComments = (): Promise<Iterable<Comment>> =>
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json() as Promise<any[]>)
    .then(arr => arr.map(comment => new Comment({ ...comment })));

export { fetchComments };
