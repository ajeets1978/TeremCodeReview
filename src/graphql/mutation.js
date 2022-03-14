import { gql } from "@apollo/client";

/*
 The file contains all the mutations, add, update and delete records using graphql.
*/
gql`query{contractors{id,name,jobTitle,email,image}}`;

export const GQL_ADD_CONTRACTOR = gql`mutation
{
  addContractor(
    name:"Sandy", jobTitle:"Instructor",email:"em",image:"image"
  ){
    id, name, jobTitle, email, image
  }
  
}`;