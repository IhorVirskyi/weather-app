import { Pipe, PipeTransform } from '@angular/core';
import { catchError, isObservable, map, Observable, of, startWith } from "rxjs";
import { RemoteData, RemoteStatus } from "../interfaces/remote-data";

@Pipe({
  name: 'loadingIndicator'
})
export class LoadingIndicatorPipe implements PipeTransform {

  transform(value: Observable<RemoteData<any>>): Observable<{ value?: any, loading: boolean, error?: any }> {
    return isObservable(value)
      ? value.pipe(
        map((value: RemoteData<any>) => ({
          loading: value.status === RemoteStatus.LOADING,
          value: value.status ? value.value : value
        })),
        startWith({loading: true}),
        catchError(error => of({loading: false, error}))
      )
      : of({loading: false, error: 'Invalid data type!'});
  }

}
