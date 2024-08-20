import { Component } from '@angular/core';
import { ApiService } from '../../../../shared/services/api.service';
import { ISubject } from '../../../models/SubjectModel';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {

  displayedColumns: string[] = ['category_name', 'subject_name'];//,'action'];

  lstSubject: ISubject[] = [];
  constructor(private apiService: ApiService) {
    this.lstSubject = [];
    apiService.getSubjects().subscribe({
      next: (res: ISubject[]) => {
        this.lstSubject = res;
        console.log(res)
      }
    });
  }
}
