export interface RemoteData<T> {
  status: RemoteStatus,
  value?: T
}

export enum RemoteStatus {
  LOADING = 'LOADING',
  LOADED = 'LOADED'
}
