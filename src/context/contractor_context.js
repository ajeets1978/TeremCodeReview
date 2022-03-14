import { useQuery } from "@apollo/client";
import { GQL_CONTRACTORS } from "../graphql/query";
import createDataContext from "./createDataContext";

const contractorReducer = (state, action) => {
    switch (action.type)
    {
        case 'get_contractors':
            console.log("=============== " + action.payload);
            return action.payload;   
        default:
            return state;
    }
};
const getContractors = dispatch => {
    return async () => {
        const { loading, error, data } = useQuery(GQL_CONTRACTORS);
        dispatch({ type: 'get_contractors', payload: { loading, error, data }});
    }
        
};

export const { Context, Provider } = createDataContext (
    contractorReducer,
    { getContractors },
    []
);