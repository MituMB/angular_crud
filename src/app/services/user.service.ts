import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://json-placeholder.mock.beeceptor.com/users';

  // userList:any[]= []
  constructor(private http : HttpClient){

  }

   // Get all users
      // Get all users
      getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
      }
    // getUsers() {
    //    this.http.get(this.baseUrl).subscribe((result:any) => {
    //     this.userList = result ;
    //   });
    // }

  createUser(user: any) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(id: number, user: any) {
    return this.http.put(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private apiUrl = 'http://localhost:3000/users'; // <-- Update this to your real API URL

//   constructor(private http: HttpClient) {}

//   // Get all users
//   getUsers(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   // Get single user by ID
//   getUserById(id: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${id}`);
//   }

//   // Add new user
//   addUser(user: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, user);
//   }

//   // Update existing user
//   updateUser(id: number, user: any): Observable<any> {
//     return this.http.put<any>(`${this.apiUrl}/${id}`, user);
//   }

//   // Delete user
//   deleteUser(id: number): Observable<any> {
//     return this.http.delete<any>(`${this.apiUrl}/${id}`);
//   }

// }
