import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { IEmployee } from '../../../models/Employee';
import { Router } from '@angular/router';
import { ICategory } from '../../../models/CategoryModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  newCategory: FormGroup;
  
  constructor(fb: FormBuilder, private apiService: ApiService, private snakbar: MatSnackBar) {
    this.newCategory = fb.group({
      categoryId: fb.control(''),
      categoryName: fb.control(''),
    });
   }

   addNewCategory() {
    let category: ICategory = {
      categoryId: 0,
      categoryName: this.newCategory.get("categoryName")?.value,
    }
  
    this.apiService.InsertCategory(category).subscribe({
      next: (res) => {
        if (res === "cannot insert") {
          this.snakbar.open("already exist!", "OK");
        } else {
          this.snakbar.open("INSERTED", "OK");
        }
      }
    })
  }



}




