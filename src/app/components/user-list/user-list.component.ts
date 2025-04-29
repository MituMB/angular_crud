import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  userList:any[]= []
  
  constructor(
    private router: Router,
    private userService: UserService,
  ){}

  navigateLink(){
    this.router.navigateByUrl("/admin")
  }

  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers(){

    this.userService.getUsers().subscribe((result:any) => {
      this.userList = result ;
    });
  }

//   getUsers() {
//     this.http.get(this.baseUrl).subscribe((result:any) => {
//      this.userList = result ;
//    });
//  }

}
