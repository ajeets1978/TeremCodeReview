import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
  } from '@apollo/client';

import { onError } from '@apollo/client/link/error'
import { GraphQLErrorArgs } from 'graphql';
import { MockedProvider } from '@apollo/react-testing';
import React from "react";
import { withRepeat } from 'react-native-reanimated';
import renderer, { act } from 'react-test-renderer';
import { GQL_CONTRACTORS } from '../../graphql/query';
import ContractorListScreen from "../contractor_list_screen";
import { Text } from 'react-native';
import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';
import { query } from '@apollo/client';


async function waitForPromise(ms = 0) {
    await renderer.act(() => {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        })
    });
}


describe ('Contractor List', () => {
    it("Should show loading screen", async () => {
        const tree = renderer.create(<MockedProvider><ContractorListScreen /></MockedProvider>);
    
        await waitForPromise();
        
        expect(() => tree.root.findByProps({ children: 'Loading...'})).not.toThrow();
        
    });

    it("Should show the error screen", async() => {
        const mockedError = {
            request: {
                query: GQL_CONTRACTORS,
            },
            error: new Error('Some error!!!'),
        }; // Mocked error
        const tree = renderer.create(<MockedProvider mocks={[mockedError]}><ContractorListScreen /></MockedProvider>);

        await waitForPromise();

        expect(() => {
            tree.root.findByProps({
                children: 'Some error!!!',
            })
        }).not.toThrow();
    });

    it("Should show list of contractors", async() => {
        const mockedData = {
            request: {
                query: GQL_CONTRACTORS,
            },
            result: {
                data: {
                    contractors: [
                        {"id": 1, "name": "Ajeet Singh", "email": "test@gmail.com", "jobTitle": "Java Developer", "image": "http://some.png"},
                    ],
                },
            },
        }; // Mocked data

        const tree = renderer.create(<MockedProvider mocks={[mockedData]}><ContractorListScreen /></MockedProvider>);

        await waitForPromise();
        const json = tree.toJSON();
        expect(() => {
            tree.root.findByProps({
                children: 'Ajeet Singh',
            })
        }).not.toThrow();
        expect(() => {
            tree.root.findByProps({
                children: 'test@gmail.com',
            })
        })
        expect(() => {
            tree.root.findByProps({
                children: 'Java Developer',
            })
        })
        expect(() => {
            tree.root.findByProps({
                children: 'http://some.png',
            })
        })
    });
    
});

/*

it("Should show error screen", async() => {
    const contractors_mock = [
        {
            request: {
                query: GQL_CONTRACTORS,
                error: new Error('Some error'),
            }    
        }
    ];

    const useQuery = jest.fn();

    const component = renderer.create(<MockedProvider mocks = {[contractors_mock]}><ContractorListScreen /></MockedProvider>);
    await wait();
    expect(useQuery).toHaveBeenCalledWith(GQL_CONTRACTORS);
    const tree = component.toJSON();
    expect(tree.children).toContain('Some error');
    
})
*/