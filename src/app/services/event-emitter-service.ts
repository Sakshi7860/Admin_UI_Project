import {Injectable, EventEmitter} from '@angular/core';
import { AccountData } from '../util-classes/account-data';

@Injectable()
export class EventEmitterService {

  dataStr = new EventEmitter<AccountData>();

  constructor() { }

  sendMessage(account: AccountData) {
    console.log("Data inside service :"+account.body+ " "+account.id)
    this.dataStr.emit(account);
  }
}