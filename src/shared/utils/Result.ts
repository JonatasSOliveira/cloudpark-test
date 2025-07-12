export type Result<T, E = Error> = Success<T> | Failure<E>;

export class Success<T> {
  readonly success = true;
  constructor(public readonly data: T) {}
}

export class Failure<E = Error> {
  readonly success = false;
  constructor(public readonly error: E) {}
}