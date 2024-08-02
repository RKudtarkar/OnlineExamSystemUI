import { Component } from '@angular/core';
// import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
// import { UserType } from '../../../models/models';

export interface NavigationItem {
  value: string;
  link: string;
}

 

@Component({
  selector: 'page-side-nav',
  templateUrl: './page-side-nav.component.html',
  styleUrl: './page-side-nav.component.scss'
})
export class PageSideNavComponent {

  panelName: string = ""
  isAdmin:boolean =true;
  navItems: NavigationItem[] = [];

  constructor(//private httpService: ApiService, 
    private router: Router) {
    if (this.isAdmin) {
      this.panelName = "Admin"
      this.navItems = [
        { value: "Add Admin", link: "AddAdmin" },
        { value: "Category", link: "Category" },
        { value: "Subject", link: "Subject" },
        { value: "Exam", link: "Exam" },
        { value: "Question", link: "Question" },
        { value: "result", link: "result" },
        { value: "Student List", link: "StudentList" },
        { value: "Admin Panel", link: "AdminPanel" },
        { value: "Employee List", link: "EmployeeList" }
      ]
    }
    else {
      this.panelName = "User"
      this.navItems = [
        { value: "Exam", link: "Exam" },
        { value: "Question", link: "Question" },
        { value: "result", link: "result" },

      ]
    }
    router.navigateByUrl("/login");
    // httpService.userStatus.subscribe({
    //   next: (status) => {

    //     if (status == 'loggedIn') {
    //       router.navigateByUrl("/viewBook");
    //       console.log(status);
    //       let user = httpService.getUserInfo();
    //       if (user != null) {
    //         if (user.userType == UserType.ADMIN) {
    //           this.panelName = 'Admin Panel'
    //           this.navItems = [
    //             { value: "view books", link: "viewBook" },
    //             { value: "my orders", link: "my-orders" },
    //             { value: "User Approvals", link: "approval" },
    //             { value: "Book Master", link: "maintenance" },
    //             { value: "Return Book", link: "returnBook" },

    //           ]
    //         } else if (user.userType == UserType.STUDENT) {
    //           this.panelName = 'Student Panel'
    //           this.navItems = [
    //             { value: "view books", link: "viewBook" },
    //             { value: "my orders", link: "my-orders" },
    //             // { value: "UserMaster", link: "userMaster" },
    //             // { value: "user", link: "user" }

    //           ]
    //         }

    //       }
    //     } else if (status == 'loggedOff') {
    //       this.panelName = 'Auth Panel'
    //       router.navigateByUrl("/login");
    //       this.navItems = [];
    //     }
    //   }
    // })

  }

}

// function changeUser()
// {
//   if (isAdmin==true) {
//     this.isAdmin=false;
//   }
//   else {
//     this.isAdmin=true
//   }

// }
