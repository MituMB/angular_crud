import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  firstName:string = 'mitu';
  rollNo:number = 121;
  isActive:boolean = true;
  currentDate:Date = new Date();
  customPlaceholder:string = 'Enter Full Name';
  btnClassTheme:string = 'btn btn-primary';
  selectedValue: string = '';

  constructor(){
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
    // this.saveHandler()

  }

  saveHandler(){
    alert('Are u sure to save?')
  }
   
  changeProgramming(){
    console.log('this.selectedValue');
    
  }
  isHide:boolean = true;

  toggleDiv(){
this.isHide = !this.isHide
  }
  hideDiv(){
    this.isHide = false;
  }

  num1:string="";
  num2:string="";

  cityList: string[] = ['dhaka','rangpur','ctg','khulna']

  userList:any[]=[
    {userId:23, name:'setu', city:'dhaka',phone:'083776'},
    {userId:245, name:'ritu', city:'khulna',phone:'083776'},
    {userId:977, name:'mitu', city:'rangpur',phone:'083776'},
  ]
}
