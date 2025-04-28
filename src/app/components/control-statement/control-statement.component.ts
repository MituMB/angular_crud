import { Component } from '@angular/core';

@Component({
  selector: 'app-control-statement',
  imports: [],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.scss'
})
export class ControlStatementComponent {
isVisible:boolean= true;

visibleHandler(isShow:boolean){
  this.isVisible = isShow
}
}
