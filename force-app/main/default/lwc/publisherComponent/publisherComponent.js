import { LightningElement, wire } from 'lwc';
import { MessageContext, publish } from 'lightning/messageService';
import FirstChannel  from '@salesforce/messageChannel/FirstChannel__c';

export default class PublisherComponent extends LightningElement {

    @wire(MessageContext)
    messageContext;

    name = '';

    handleChange(event){
        this.name = event.target.value;
    }

    handleClick(){

        let payload = {name: this.name};
        publish(this.messageContext, FirstChannel, payload);
    }
}