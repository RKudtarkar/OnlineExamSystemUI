import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { IEmployee } from '../../../models/Employee';
import { Router } from '@angular/router';

const ELEMENT_DATA: IEmployee[] = [
  {id: 1, name: 'Hydrogen',emailId:'', phone:'', age:0, salary:0}
]

@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.scss'
})
export class AddAdminComponent {
  // displayedColumns: string[] = ['id', 'name', 'emailId', 'phone', 'age', 'salary'];
  // employeeList: IEmployee[] = [];
  
  // router = inject(Router);
  // dataSource=ELEMENT_DATA
  
  constructor() {
     
   }
}


