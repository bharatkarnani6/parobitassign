import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../users/usermodels';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: any;
  profileData: any;
  constructor(private route: ActivatedRoute, private user: UserService) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id){
      this.user.getData().subscribe((d: any) => {
        // tslint:disable-next-line:semicolon
        this.profileData = d.users[this.id]
      });
    }

   }

  ngOnInit(): void {
  }

}
