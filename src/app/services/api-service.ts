import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { AccountData } from '../util-classes/account-data';
import { ThrowStmt } from '@angular/compiler';
import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';

@Injectable()
export class ApiService
{
    @ViewChild(MatTable) table: MatTable<AccountData>;
    accountList: AccountData[]=[
        {userId: 1, id: 11, title: 'abc', body: 'H'},
        {userId: 2, id: 12, title: 'abc', body: 'He'},
        {userId: 3, id: 12, title: 'abc', body: 'Li'},
        {userId: 4, id: 12, title: 'abc', body: 'Be'},
        {userId: 5, id: 12, title: 'abc', body: 'B'},
        {userId: 6,id: 12, title: 'abc', body: 'C'},
    ];
    constructor(private httpClient: HttpClient){

    }
    // getData(): Observable<any>{
    //     return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
    // }
    getData()
    {
        return this.accountList;
    }
    addData(accountData: AccountData)
    {
        this.accountList.push(accountData);
        console.log("added data is : "+this.accountList[0].body+ this.accountList[0].title);
        this.table.renderRows();
    }
    editData(data:AccountData)
    {
        const index= this.accountList.findIndex(c=> c.id ==data.id)
        this.accountList[index]=data;
        console.log("edit data is: "+ data.body)
        this.table.renderRows();
    }
    deleteData(id:number)
    {
        const account= this.accountList.findIndex(c=> c.userId=== id)
        this.accountList.splice(account);
        console.log("account list is:"+ this.accountList.length)
        this.table.renderRows();
    }
}