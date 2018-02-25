import { Injectable } from '@angular/core';
@Injectable()

export class Message{

    constructor(public receiver: string, public receiverPort: number, public messageContent: string){

    }
}