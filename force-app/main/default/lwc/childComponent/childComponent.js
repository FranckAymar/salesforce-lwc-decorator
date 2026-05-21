import { LightningElement, api } from 'lwc';
export default class ChildComponent extends LightningElement {
    @api headerLabel='This label is from Child Component';
}
