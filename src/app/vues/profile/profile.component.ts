import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any; //TODO : User model ?
  constructor(private token: TokenStorageService) { }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser)
  }
}
