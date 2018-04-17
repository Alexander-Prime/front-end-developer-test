import { Address, Company, LatLon, User } from "./model";

const fetchUsers = (): Promise<Iterable<User>> =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json() as Promise<any[]>)
    .then(arr =>
      arr.map(
        user =>
          new User({
            ...user,
            address: new Address({
              ...user.address,
              geo: new LatLon(user.address.geo.lat, user.address.geo.lng),
            }),
            company: new Company({
              ...user.company,
            }),
          }),
      ),
    );

export { fetchUsers };
