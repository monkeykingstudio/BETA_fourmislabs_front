import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      const roles = this.tokenStorage.getUser().roles;

      console.log(roles);
    }
    this.userService.getAdminBoard()
    .subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
