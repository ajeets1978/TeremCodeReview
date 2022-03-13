import { StyleSheet } from "react-native";
import ContractorForm from "../components/contractor_form";

const AddContractorScreen = ({ navigation }) => {
    return (
        <ContractorForm 
            onSubmit={(name, jobTitle, email, image) => { console.log("Will implement add Contractor logic") }}
        />
    );
}

const styles = StyleSheet.create({});

export default AddContractorScreen;