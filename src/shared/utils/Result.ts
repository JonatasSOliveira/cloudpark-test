export type Result<T, E> = Ok<T, E> | Err<T, E>;

export class Ok<T, E> {
  readonly success = true;
  readonly failure = false;

  constructor(readonly value: T) {}

  isSuccess(): this is Ok<T, E> {
    return true;
  }

  isFailure(): this is Err<T, E> {
    return false;
  }
}

export class Err<T, E> {
  readonly success = false;
  readonly failure = true;

  constructor(readonly error: E) {}

  isSuccess(): this is Ok<T, E> {
    return false;
  }

  isFailure(): this is Err<T, E> {
    return true;
  }

  map<U>(_fn: (value: T) => U): Err<U, E> {
    return new Err(this.error);
  }

  mapError<F>(fn: (error: E) => F): Err<T, F> {
    return new Err(fn(this.error));
  }

  match<R>(_onSuccess: (value: T) => R, onError: (error: E) => R): R {
    return onError(this.error);
  }
}

export const Result = {
  ok: <T, E = never>(value: T): Result<T, E> => new Ok(value),
  err: <T = never, E = Error>(error: E): Result<T, E> => new Err(error),
};
