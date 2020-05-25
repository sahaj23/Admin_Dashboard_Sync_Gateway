import { Component, OnInit, NgZone } from '@angular/core';
import { PouchDBService } from '../pouchdb.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public people: Array<any>;
    public form: any;
 
    public constructor(private database: PouchDBService, private zone: NgZone) {
        this.people = [];
        this.form = {
            "username": "",
            "name": "",
            "location": ""
        }
    }
 
    
public ngOnInit() {
    this.database.sync("http://localhost:4984/locations");
    this.database.getChangeListener().subscribe(data => {
        for(let i = 0; i < data.change.docs.length; i++) {
            this.zone.run(() => {
                this.people.push(data.change.docs[i]);
            });
        }
    });
    this.database.fetch().then(result => {
        this.people = [];
        for(let i = 0; i < result.rows.length; i++) {
            if(result.rows[i].doc.location=="bhopal")
            this.people.push(result.rows[i].doc);
        }
    }, error => {
        console.error(error);
    });
}
 

public insert() {
    if(this.form.username && this.form.name && this.form.location) {
        this.database.put(this.form.username, this.form);
        this.form = {
            "username": "",
            "name": "",
            "location": ""
        }
    }
}

}
