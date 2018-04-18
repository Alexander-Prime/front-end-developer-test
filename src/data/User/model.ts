import { Record, ValueObject } from "immutable";

import { hashAll } from "common/utils";

import { Entity } from "data/common";

class LatLon implements ValueObject {
  constructor(readonly lat: string, readonly lon: string) {}

  hashCode() {
    return hashAll(this.lat, this.lon);
  }

  equals(other: any) {
    return other.lat === this.lat && other.lon === this.lon;
  }
}

interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: LatLon;
}

class Address extends Record<AddressProps>({
  street: "⋯",
  suite: "⋯",
  city: "⋯",
  zipcode: "⋯",
  geo: new LatLon("0", "0"),
}) {}

interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

class Company extends Record<CompanyProps>({
  name: "⋯",
  catchPhrase: "⋯",
  bs: "⋯",
}) {}

interface UserProps extends Entity {
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

class User extends Record<UserProps>({
  id: 0,
  name: "⋯",
  username: "⋯",
  email: "⋯",
  address: new Address(),
  phone: "⋯",
  website: "⋯",
  company: new Company(),
}) {}

export { LatLon, Address, Company };
export { User };
