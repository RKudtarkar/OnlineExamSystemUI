import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from '../../../models/Employee';
import { SharedModule } from '../../../../shared/shared.module';

const ELEMENT_DATA: IEmployee[] = [
  {id: 1, name: 'Hydrogen',emailId:'', phone:'', age:0, salary:0}
]
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['id', 'name', 'emailId', 'phone', 'age', 'salary'];
  employeeList: IEmployee[] = [];
  // dataSource = new MatTableDataSource<IEmployee>(ELEMENT_DATA);
  //  @ViewChild(MatPaginator) paginator: MatPaginator;
  //router = inject(Router);
  dataSource=ELEMENT_DATA
  // httpService=inject(HttpService)
  constructor() {
     
   }
  //  ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnInit() {
    //this.getAllEmployee()
  }

  

  edit(id: number) {
    //this.router.navigateByUrl("employee/" + id)
  }
  delete(id: number) {
   
  }

  showSuccess() {
    //this.toastr.success('Success!');
  }

  showError() {
    // this.toastr.success('Error');
  }
}
