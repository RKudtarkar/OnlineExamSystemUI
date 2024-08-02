import { SharedModule } from '../../../../shared/shared.module';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ApiService } from '../../../../shared/services/api.service';

export interface CategoryModel {
  CategoryId: number;
  CategoryName: string;
}

const ELEMENT_DATA: CategoryModel[] = [
  {CategoryId: 1, CategoryName: 'Hydrogen'},
  {CategoryId: 1, CategoryName: 'Hydrogen'},
  
];
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent //implements AfterViewInit
{
  displayedColumns: string[] = ['CategoryId', 'CategoryName','action'];
  dataSource = ELEMENT_DATA;
  //dataSource=this.apiService.getCategory().subscribe();
  
  
  
}

