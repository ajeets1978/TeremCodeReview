import { StyleSheet } from "react-native";
import ContractorForm from "../components/contractor_form";

const EditContractorScreen = ({ navigation }) => {
    return (
        <ContractorForm 
            onSubmit={(name, jobTitle, email, image) => { alert ("TBD") }}
        />
    );
}

const styles = StyleSheet.create({});

export default EditContractorScreen;