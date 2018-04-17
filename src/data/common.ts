import { Map } from "immutable";

interface Entity {
  id: string;
}

type EntityTable<T> = Map<string, T>;

export { Entity, EntityTable };
