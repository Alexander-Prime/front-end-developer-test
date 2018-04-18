import { Photo } from "./model";

const fetchPhotos = (): Promise<Iterable<Photo>> =>
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json() as Promise<any[]>)
    .then(arr => arr.map(photo => new Photo({ ...photo })));

export { fetchPhotos };
