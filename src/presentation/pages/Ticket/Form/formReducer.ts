import { FieldErrors } from '@/domain/errors/Field.error';
import { TicketCreateRequestDTO } from '@/domain/dtos/ticket/TicketCreateRequest.dto';
import { TicketCategoryListResponseDTO } from '@/domain/dtos/ticket-category/TicketCategoryListResponse.dto';

export type FormState = {
  title: string;
  description: string;
  categoryId: string;
  fieldErrors: FieldErrors<TicketCreateRequestDTO>;
  loadingCategories: boolean;
  isSubmitting: boolean;
  categories: TicketCategoryListResponseDTO[];
};

export type FormAction =
  | {
      type: 'setField';
      field: keyof Omit<FormState, 'fieldErrors' | 'loadingCategories' | 'isSubmitting'>;
      value: string;
    }
  | { type: 'setErrors'; errors: FormState['fieldErrors'] }
  | { type: 'setLoadingCategories'; value: boolean }
  | { type: 'setSubmitting'; value: boolean }
  | { type: 'setCategories'; categories: TicketCategoryListResponseDTO[] };

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'setField':
      return {
        ...state,
        [action.field]: action.value,
        fieldErrors: { ...state.fieldErrors, [action.field]: undefined },
      };
    case 'setErrors':
      return { ...state, fieldErrors: action.errors };
    case 'setLoadingCategories':
      return { ...state, loadingCategories: action.value };
    case 'setSubmitting':
      return { ...state, isSubmitting: action.value };
    case 'setCategories':
      return { ...state, categories: action.categories };
    default:
      return state;
  }
}

export const initialFormState: FormState = {
  title: '',
  description: '',
  categoryId: '',
  fieldErrors: {},
  loadingCategories: false,
  isSubmitting: false,
  categories: [],
};
