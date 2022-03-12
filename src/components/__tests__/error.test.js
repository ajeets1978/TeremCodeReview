import React from "react";
import renderer from 'react-test-renderer';
import { Error } from '../error';

describe ('error component', () => {
    it("Show render correctly", () => {

        const error = {
            message: "Display error message",
        }
        const tree = renderer.create(<Error error = {error}/>);
    
        expect(() => tree.root.findByProps({ children: 'Display error message'})).not.toThrow();
        
    });
});