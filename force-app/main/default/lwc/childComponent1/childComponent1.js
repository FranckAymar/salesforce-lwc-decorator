import { LightningElement, api } from 'lwc';

export default class ChildComponent1 extends LightningElement {
    @api headerLabel='This label is from Child Component';
     
    
    name='';

    handleChange(event)
    {
        this.name=event.target.value;
    }

    handleClick(event)
    {
        const searchEvent=new CustomEvent('getsearchevent',{detail:this.name});
        this.dispatchEvent(searchEvent);
    }
}
