
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Observable } from 'rxjs';
import { User } from './user.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable()
export class UserService {
 
    
 
    public constructor(private http:HttpClient) {
     }

     addUser (user: User): Observable<any> {
        return this.http.post<User>("http://localhost:4984/locations/_session", user,{ withCredentials: true})
          .pipe(
          );
      }
     

      fetch(id:string): Observable<any>{
        
       
        // const headerDict = {
        //   'Content-Type': 'application/json',
        //   'Accept': 'application/json',
        //   'Cookie':'SyncGatewaySession='+id
        // }
        
        // const requestOptions = {                                                                                                                                                                                 
        //   headers: new HttpHeaders(headerDict), 
        // };

        // const  headers = new  HttpHeaders().set("Cookie","SyncGatewaySession="+ id);
        return this.http.get<string>("http://localhost:4984/locations/_all_docs",{ withCredentials: true}).pipe(catchError(error => { 
          return this.handleError(error);
        }));
      }

      handleError(error: Response) {
        if (error.status == 500) {      
        } else {
          return throwError(error);
        }
    }
    
 
}