import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id: number;
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.id = this.user.getTest();
  }

}
