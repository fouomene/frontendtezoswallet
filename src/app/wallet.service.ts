import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ReponseApi } from './domaine/model.reponseapi';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private apiUrl = 'http://localhost:3000/wallet/api';  // URL to web api

  constructor(private http: HttpClient) { }


  /** POST: login info to the server */
  authentification(loginData: any): Observable<ReponseApi> {
    return this.http.post<any>(this.apiUrl+'/authentification', loginData, httpOptions).pipe(
      tap((newReponse: ReponseApi) => console.log(`endPoint login susses w/ message=${newReponse.message}`)),
      catchError(this.handleError<ReponseApi>('login'))
    );
 }

   /** POST: transfer info to the server */
   sendtezos(transferData: any): Observable<ReponseApi> {
    return this.http.post<any>(this.apiUrl+'/transferetezos', transferData, httpOptions).pipe(
      tap((newReponse: ReponseApi) => console.log(`endPoint sendtezo susses w/ message=${newReponse.message}`)),
      catchError(this.handleError<ReponseApi>('send'))
    );
 }

    /** POST: info create accound to the server */
    createAccound(formData: any): Observable<ReponseApi> {
      return this.http.post<any>(this.apiUrl+'/creer', formData, httpOptions).pipe(
        tap((newReponse: ReponseApi) => console.log(`endPoint creer susses w/ message=${newReponse.message}`)),
        catchError(this.handleError<ReponseApi>('send'))
      );
   }

    /** POST: info alphabet account to the server */
    saveAlphabetAccound(formData: any): Observable<ReponseApi> {
        return this.http.post<any>(this.apiUrl+'/savealphanetaccount', formData, httpOptions).pipe(
          tap((newReponse: ReponseApi) => console.log(`endPoint save susses w/ message=${newReponse.message}`)),
          catchError(this.handleError<ReponseApi>('save'))
        );
     }

    /* GET public key */
    genarateKeystone(email: string): Observable<any> {
      if (!email.trim()) {
        // if not search term, return empty .
        return of(new ReponseApi());
      }
      return this.http.get<any>(`${this.apiUrl}/getmykeystone/${email}`).pipe(
        tap(_ => console.log(`EndPoint generate public private key succes "${email}"`)),
        catchError(this.handleError<any>('genaratekeystone'))
      );
    }

    
    /* GET active account */
    activeAccount(email: string): Observable<any> {
      if (!email.trim()) {
        // if not search term, return empty .
        return of(new ReponseApi());
      }
      return this.http.get<any>(`${this.apiUrl}/activeaccount/${email}`).pipe(
        tap(_ => console.log(`EndPoint activeaccount succes "${email}"`)),
        catchError(this.handleError<any>('activeaccount'))
      );
    }

        /* GET balance account */
        balanceAccount(email: string): Observable<any> {
          if (!email.trim()) {
            // if not search term, return empty .
            return of(new ReponseApi());
          }
          return this.http.get<any>(`${this.apiUrl}/balanceaccount/${email}`).pipe(
            tap(_ => console.log(`EndPoint balanceaccount succes "${email}"`)),
            catchError(this.handleError<any>('balanceaccount'))
          );
        }


/* GET list transactions */
transactionsAccount(email: string): Observable<any> {
  if (!email.trim()) {
    // if not search term, return empty .
    return of(new ReponseApi());
  }
  return this.http.get<any>(`${this.apiUrl}/transactions/${email}`).pipe(
    tap(_ => console.log(`EndPoint transactions succes "${email}"`)),
    catchError(this.handleError<any>('transactions'))
  );
}


/* GET profile */
profilAccount(email: string): Observable<any> {
  if (!email.trim()) {
    // if not search term, return empty .
    return of(new ReponseApi());
  }
  return this.http.get<any>(`${this.apiUrl}/find/${email}`).pipe(
    tap(_ => console.log(`EndPoint find succes "${email}"`)),
    catchError(this.handleError<any>('find'))
  );
}

    


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


}
