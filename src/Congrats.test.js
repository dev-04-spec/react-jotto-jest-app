import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestAttr} from '../test/testUtils'
import Congrats from './Congrats';
/**
 ** Factory function to create a ShallowWrapper for the Congrats Component.
 ** @function setup
 ** @param {object} props - Component props specific to this setup.
 ** @return {ShallowWrapper}
 **/
Enzyme.configure({adapter: new EnzymeAdapter()});
const setup=(props={})=>{
    props={success:true}
    return shallow(<Congrats {...props}/>)
}
test('renders without error',()=>{
    const wrapper=setup();
    const component=findByTestAttr(wrapper,'component-congrats');
    expect(component.length).toBe(1)

});

test('renders no text when `success` prop is false',()=>{
    const wrapper=setup({success: false});
    const component=findByTestAttr(wrapper,'component-congrats')
    expect(component.text()).toBe('Congratulations! You guessed the word !')
});

test('renders non-reply congrats message when success prop is true',()=>{
    const wrapper=setup({success: true});
    const message=findByTestAttr(wrapper,'congrats-message');
    expect(message.text()).not.toBe(0)
});