import { Post } from "./model";

const fetchPosts = (): Promise<Iterable<Post>> =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json() as Promise<any[]>)
    .then(arr => arr.map(post => new Post({ ...post })));

export { fetchPosts };
