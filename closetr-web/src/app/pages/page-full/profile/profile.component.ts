import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  editMode: boolean;
  currentUser: User;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService) {
    this.editMode = false;
    this.currentUser = new User();
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(
      user => {
        this.currentUser = user;
      }
    )
  }

  checkSubmit(): boolean {
    return true;
  }

  /*
  Saves updated user into database.
  */
  save(): void {
    this.userService.update(new User(this.currentUser)).subscribe(
      (data: any) => {
        let user = data.data;
        this.currentUser.userName = user.userName;
        this.currentUser.userDesc = user.userDesc;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.toggleEditMode();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /*
  Toggle edit mode
  */
  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }


}
