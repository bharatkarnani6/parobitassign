import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from './usermodels';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData: any[];


  constructor(private user: UserService, private route: ActivatedRoute, private router: Router) {
    this.user.getData().subscribe((d: any) => {
      this.userData = d.users;
    });
   }

  ngOnInit(): void {
  }

  id(id: number){
    this.user.getId(id);
    this.router.navigateByUrl('/profile/' + id);
  }
}
