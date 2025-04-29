import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss'
})

@Injectable({
  providedIn: 'root'
})
export class GetApiComponent {

  private apiUrl = 'https://json-placeholder.mock.beeceptor.com/users';

  userList:any[]= []
  constructor(private http : HttpClient){

  }

   // Get all users
    getUsers() {
       this.http.get(this.apiUrl).subscribe((result:any) => {
        this.userList = result ;
      });
    }
  
}
