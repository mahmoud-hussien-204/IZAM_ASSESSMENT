interface IApiResponse<T> {
  status: number;
  message: IApiMessage;
  data: T;
  meta: IApiMeta;
}

type IApiMessage = string;

interface IApiMeta {
  count: number;
  next: string | null;
  previous: string | null;
}

interface IApiError {
  message: IApiMessage;
  status: number;
}

interface IApiSearchParams {
  page?: number;
  size?: number;
  order?: 'asc' | 'desc';
  orderBy?: string;
  search?: string;
  [key: string]: string | number | boolean;
}
