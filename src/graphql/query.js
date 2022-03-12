import { gql } from "@apollo/client";

/*
    This file contains all the qet queries
*/

export const GQL_CONTRACTORS = gql`query{contractors{id,name,jobTitle,email,image}}`;

