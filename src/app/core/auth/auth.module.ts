import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [RegisterComponent,LoginComponent],
  imports: [CommonModule,SharedModule]
})
export class AuthModule { }
