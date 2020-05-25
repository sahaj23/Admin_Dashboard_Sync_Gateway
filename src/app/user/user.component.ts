import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User={name:'sahaj',password:"root"}
  sessionId:string=""
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.database.sync("http://localhost:4985/user");
  }
  onSubmit(form: NgForm) {
    this.user.name = form.value.name;
    this.user.password = form.value.password;
    // this.user.adminChannels=form.value.adminChannels;
    // this.user.adminRoles=form.value.adminRoles;
    // this.user.disabled=false;
    // this.user.email=form.value.email;
    
    this.userService.addUser(this.user).subscribe(resp=> {
      console.log(resp.session_id);
      this.sessionId=resp.session_id;
    })
   
  }
  onFetch(){
    this.userService.fetch(this.sessionId).subscribe(resp=>{console.log(resp)});
  }
}
