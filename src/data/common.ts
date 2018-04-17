import { Map } from "immutable";

interface Entity {
  id: string;
}

type EntityTable<T> = Map<string, T>;

interface TypedAction<T> {
  type: T;
  payload: {};
}

export { Entity, EntityTable, TypedAction };
