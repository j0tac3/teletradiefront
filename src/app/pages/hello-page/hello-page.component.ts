import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/user.model';
import { StorageService } from 'src/app/Service/storage.service';

@Component({
  selector: 'app-hello-page',
  templateUrl: './hello-page.component.html',
  styleUrls: ['./hello-page.component.css']
})
export class HelloPageComponent implements OnInit {
  public user! : UserModel;

  constructor( private storageService : StorageService ) { }

  ngOnInit(): void {
    this.user = this.storageService.loadLocalStorage();
    console.log(this.user);
  }

}
