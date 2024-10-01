import { Component, OnInit } from '@angular/core';
import { AccountsService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})
export class AppComponent implements OnInit{
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService : AccountsService){}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  // onAccountAdded(event:{name: string,status:string}){
  //   this.accountsService.addAccount(event.name,event.status);
  // }

  // onStatusChanged(event:{id: string, status:string}){
  //   this.accountsService.updateStatus(event.id,event.status);
  // }
}