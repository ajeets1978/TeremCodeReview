import React from "react";
import renderer from 'react-test-renderer';
import ContractorDetailScreen from "../contractor_detail_screen";


it("renders the contractor detail screen", () => {
  
    const navigation = { navigate: jest.fn() };
    const image = "http://hello.png";
    const item = {
        image: image,
        name: "ajeet",
        id: 1,
        email: "test@email"
    };
    const route = { params: { item : { item } } };
    const tree = renderer.create(<ContractorDetailScreen route={route} navigation={navigation}/>).toJSON();
    expect(tree.children.length).toBe(2);
});