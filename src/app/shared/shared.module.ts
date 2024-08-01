import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';
import { PageSideNavComponent } from './components/page-side-nav/page-side-nav.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [PageHeaderComponent, PageFooterComponent, PageSideNavComponent, PageNotFoundComponent],
  imports: [CommonModule, MaterialModule,RouterLink,MatTableModule,MatPaginatorModule],
  exports: [CommonModule, MaterialModule,PageHeaderComponent,PageFooterComponent,PageSideNavComponent,RouterLink,PageNotFoundComponent,ReactiveFormsModule,MatTableModule, MatPaginatorModule]
})
export class SharedModule { }
