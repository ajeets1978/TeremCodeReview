import React from "react";
import renderer from 'react-test-renderer';
import { Loading } from "../loading";

describe ('loading component', () => {
    it("Render correctly", () => {

        const error = {
            message: "Loading data",
        }
        const tree = renderer.create(<Loading/>);
    
        expect(() => tree.root.findByProps({ children: 'Loading...'})).not.toThrow();
        
    });
});