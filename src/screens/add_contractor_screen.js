import { useMutation } from "@apollo/client";
import { StyleSheet } from "react-native";
import ContractorForm from "../components/contractor_form";
import { GQL_ADD_CONTRACTOR } from "../graphql/mutation";

const AddContractorScreen = ({ navigation }) => {
    return (
        <ContractorForm 
            onSubmit={
                (name, jobTitle, email, image) => 
                    { alert("TBD"); }
                }
        />
    );
}

const styles = StyleSheet.create({});

export default AddContractorScreen;