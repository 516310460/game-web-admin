export interface BasicPageParams {
  page: number;
  pageSize: number;
  status: number;
}

export interface BasicFetchResult<T extends any> {
  items: T;
  total: number;
}
