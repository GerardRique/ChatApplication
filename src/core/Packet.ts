import { Injectable } from '@angular/core';

@Injectable()

export class Packet{
    public static SIGN_IN: string = 'signIn';
    public static MESSAGE: string = 'message';
    public static SIGN_OUT: string = 'signOut';
    public static ONLINE_USER_LIST: string = 'online_user_list';

    public payload: string

    constructor(public type: string){

    }

    public setPayload(payload: string): void{
        this.payload = payload;
    }
}