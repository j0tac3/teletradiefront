import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-profile',
  templateUrl: './select-profile.component.html',
  styleUrls: ['./select-profile.component.css']
})
export class SelectProfileComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onRegister( typeProfile : number ){
    this.router.navigateByUrl(`/register/${typeProfile}`);
  }

}
