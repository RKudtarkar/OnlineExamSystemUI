import { Component } from '@angular/core';
import { InsertSubject, ISubject } from '../../../models/SubjectModel';
import { ApiService } from '../../../../shared/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedModule } from '../../../../shared/shared.module';
import { ICategory } from '../../../models/CategoryModel';
import { Router } from '@angular/router';


export interface categoryOption {
  displayValue: string;
  value: number;
}

@Component({
  selector: 'app-add-subject',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.scss'
})
export class AddSubjectComponent {
  newCategory: FormGroup;
  categoryOptions: categoryOption[] = [];
  constructor(router: Router,fb: FormBuilder, private apiService: ApiService, private snakbar: MatSnackBar) {
    this.newCategory = fb.group({
      category: fb.control(''),
      subjectName: fb.control(''),
    });

    apiService.getCategory().subscribe({
      next: (res: ICategory[]) => {
        res.forEach((c) => {
          this.categoryOptions.push({
            value: c.categoryId,
            displayValue: `${c.categoryName}`,
          });
        });
      },
    });



   }

   addNewSubject() {
    let sub: InsertSubject = {
      subject_id: 0,
      category_fid: this.newCategory.get("category")?.value,
      subject_name: this.newCategory.get("subjectName")?.value,
      
    }
  
    this.apiService.InsertSubject(sub).subscribe({
      next: (res) => {
        if (res === "cannot insert") {
          this.snakbar.open("already exist!", "OK");
        } else {
           if(this.snakbar.open("INSERTED", "OK"))
           {
            //router.navigateByUrl("/login");
           }

        }
      }
    })
  }

}
