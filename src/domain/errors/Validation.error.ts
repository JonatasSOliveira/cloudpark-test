import { FieldErrors } from './Field.error';

export class ValidationError<T> extends Error {
  public readonly fieldErrors: FieldErrors<T>;

  constructor(fieldErrors: FieldErrors<T>) {
    super('Erro de validação nos campos');
    this.name = 'ValidationError';
    this.fieldErrors = fieldErrors;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
