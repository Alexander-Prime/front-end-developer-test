import { Map } from "immutable";

interface Entity {
  id: number;
}

type EntityTable<T> = Map<number, T>;

interface TypedAction<T> {
  type: T;
  payload: {};
}

export { Entity, EntityTable, TypedAction };
