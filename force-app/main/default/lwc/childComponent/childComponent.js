import { LightningElement, api } from 'lwc';
export default class ChildComponent extends LightningElement {
    @api headerLabel='This label is from Child Component';

    name = '';

    handleClick(event){
        this.name = event.target.value;
    }

    handleChange(event){
        const searchEvent = new CustomEvent('getSearchEvent', {detail: this.name});
        this.dispatchEvent(searchEvent);
    }
}
