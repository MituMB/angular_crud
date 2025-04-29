import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

 
  supplierObj:any = {
      supplierNameEng: '',
      supplierNameBang: '',
      addressEnglish: '',
      addressBangla: '',
      contactPerson1Name: '',
      contactPerson1Num: '',
      contactPerson2Name: '',
      contactPerson2Num: '',
      websiteAddress: '',
      emailAddress: '',
      telephone: '',
      tradeLicenseNo: '',
      binNo: '',
      tinNo: '',
      status: ''
    }

    onSaveSupplier() {
      // console.log(this.supplierObj);
      // console.table(this.supplierObj);

      debugger;
      const formValue = this.supplierObj
    }
    
}
