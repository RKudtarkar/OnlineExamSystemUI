import { SharedModule } from '../../../../shared/shared.module';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../../../shared/services/api.service';
import { ICategory } from '../../../models/CategoryModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface CategoryModel {
  CategoryId: number;
  CategoryName: string;
}


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent //implements AfterViewInit
{
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





// addNewCategory()
// {
//   let category: CategoryModel = {
//         CategoryId: 0,
//         CategoryName: this.newCategory.get("category")?.value,
//       }

//   this.apiService.addNewBook(category).subscribe({
//     next: (res) => {
//       debugger;
//       console.log(res);
//       // if (res === 'inserted') {
//       //   this.snakbar.open("book added", "OK");
//       // }
//     }
//   })
      

      
// }



// addNewCategory() {
//   let category: ICategory = {
//     categoryId: 0,
//     categoryName: newCategory.get("category")?.value,
//   }

//   apiService.InsertCategory().subscribe({
//     next: (res: ICategory[]) => {
//       this.lstcategory = [];
//       //res.forEach((b) => this.lstcategory.push(b));
//       this.lstcategory = res;
//       console.log(res)
//     }
//   });
// }





