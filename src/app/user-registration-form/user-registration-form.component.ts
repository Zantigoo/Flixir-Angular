import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = {
    Username: '',
    Password: '',
    Email: '',
    Birthday: ''
  };
  
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router,) { }

ngOnInit(): void {
}

registerUser(): void {
  this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
   this.dialogRef.close(); // This will close the modal on success!
   console.log(result);
   this.snackBar.open(result, 'OK', {
      duration: 2000
   });
  }, (result) => {
    console.log(result);
    this.snackBar.open(result, 'OK', {
      duration: 2000
    });
  });
}

}
