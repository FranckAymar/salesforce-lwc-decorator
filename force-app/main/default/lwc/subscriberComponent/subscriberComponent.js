import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import FirstChannel from '@salesforce/messageChannel/FirstChannel__c';

export default class SubscriberComponent extends LightningElement {
    name =  '';
    subscription= null;

    @wire(MessageContext)
    messageContext;


    connectedCallback(){
        this.handleSubscribe();
    }

    disconnectCallback(){
        this.handleUnSubscribe();
    }

    handleSubscribe(){

        if(!this.subscription){
            this.subscription =  subscribe(this.messageContext, FirstChannel, 

                (parameter)=> {
                    this.name = parameter.name;
                } 
            );
        }
    }

    handleUnSubscribe(){
        if(this.subscription){
            unsubscribe(this.subscription);
            this.subscription = null;
        }
    }
}