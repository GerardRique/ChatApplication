import { Injectable } from '@angular/core';
import * as data from '../assets/js/clientModule.js';
import { User } from './User';
import { Packet } from './Packet';
import { Message } from './Message';
@Injectable()

export class ClientService{

    host: string;
    port: number;

    constructor(){
        this.port = 41234;
        this.host = '192.168.1.11';
    }

    public getClient(): any{
        return data;
    }

    public sendMessage(messageContent: string, receiverAddress: string, receiverPort: number){

        let myMessage = new Message(receiverAddress, receiverPort, messageContent);

        console.log(myMessage);

        let messageString = JSON.stringify(myMessage);

        let myPacket = new Packet(Packet.MESSAGE);

        myPacket.setPayload(messageString);

        let packetString = JSON.stringify(myPacket);

        let request = new Buffer(packetString);

        data.send(request, this.port, this.host, ((error, bytes) => {
            if(error)
                throw error;
            else console.log('Sent message ');
        }))
    }

    public sendSignInRequest(user: User): void{
        console.log('sending sign in request...');

        let userString = JSON.stringify(user);

        let myPacket = new Packet(Packet.SIGN_IN);

        myPacket.setPayload(userString);

        let packetString = JSON.stringify(myPacket);

        let request = new Buffer(packetString);

        data.send(request, this.port, this.host, ((error, bytes) => {
            if(error)
                throw error;
            else console.log('Sent sign in request');
        }))
    }
}