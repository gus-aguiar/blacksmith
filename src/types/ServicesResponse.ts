type ServiceResponseSuccess<T> = {
  type: 'OK' | 'CREATED'
  data: T
};
  
  type ServiceResponseError = {
    type: 'UNAUTHORIZED' | 'NOT_FOUND' | 'INVALID_DATA'
    data: {
      message: string
    }
  };
  
export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseError;