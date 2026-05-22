import { LightningElement } from 'lwc';

export default class ParentComponent1 extends LightningElement {

    name = '';

    handleSearchEvent(event){
        this.name = event.detail;
    }
}
