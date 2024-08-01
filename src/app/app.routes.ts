import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { CategoryComponent } from './core/components/admin/category/category.component';
import { SubjectComponent } from './core/components/admin/subject/subject.component';
import { ExamComponent } from './core/components/admin/exam/exam.component';
import { QuestionComponent } from './core/components/admin/question/question.component';
import { ResultComponent } from './core/components/admin/result/result.component';
import { StudentListComponent } from './core/components/admin/student-list/student-list.component';
import { CategoryListComponent } from './core/components/admin/category-list/category-list.component';
import { AddAdminComponent } from './core/components/admin/add-admin/add-admin.component';
import { EmployeeListComponent } from './core/components/admin/employee-list/employee-list.component';

export const routes: Routes = [

    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "Category", component: CategoryComponent },
    { path: "CategoryList", component: CategoryListComponent },
    { path: "Subject", component: SubjectComponent },
    { path: "Exam", component: ExamComponent },
    { path: "Question", component: QuestionComponent },
    { path: "result", component: ResultComponent },
    { path: "Student List", component: StudentListComponent },
    { path: "AddAdmin", component: AddAdminComponent },
    { path: "EmployeeList", component: EmployeeListComponent },

    { path: "**", component: PageNotFoundComponent }
];
