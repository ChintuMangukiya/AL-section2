import { Component } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {
  
  constructor(private loggingService: LoggingService, private accountService: AccountsService){
    this.accountService.stattusUpdated.subscribe(
      (status:string) => alert('New Status : ' + status)
    );
  }

    onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);

    // this.loggingService.logStatusChange(accountStatus);
  }
}