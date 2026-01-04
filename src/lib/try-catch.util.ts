type SuccessResult<T> = [T, null];

type ErrorResult<E> = [null, E];

type Result<T, E> = SuccessResult<T> | ErrorResult<E>;

export async function tryCatch<T, E = Error>(
  promise: Promise<T>,
): Promise<Result<T, E>> {
  try {
    const res = await promise;
    return [res, null];
  } catch (err: unknown) {
    return [null, err as E];
  }
}

export function tryCatchSync<T, E = Error>(fn: T): Result<T, E> {
  try {
    const res = fn;
    return [res, null];
  } catch (err: unknown) {
    return [null, err as E];
  }
}
