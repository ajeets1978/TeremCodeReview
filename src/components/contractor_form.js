import { useState } from "react"
import { StyleSheet, View,  } from "react-native";
import { Avatar, TextInput, Text, Button } from "react-native-paper";

const ContractorForm = ({ onSubmit, initialValues }) => {
    const [name, setName] = useState(initialValues.name);
    const [jobTitle, setJobTitle] = useState(initialValues.jobTitle);
    const [email, setEmail] = useState(initialValues.email);
    const [image, setAvatar] = useState(initialValues.image);

    return (
        <View>
            <Text style={styles.label}>Full Name</Text>
            <TextInput 
                style={styles.input} 
                value={name} 
                onChangeText= {text => setName(name)}                     
            />
            <Text style={styles.label}>Job Title</Text>
            <TextInput 
                style={styles.input} 
                value={jobTitle} 
                onChangeText= {text => setJobTitle(jobTitle)}                     
            />
            <Text style={styles.label}>Email</Text>
            <TextInput 
                style={styles.input} 
                value={email} 
                onChangeText= {text => setEmail(email)}                    
            />
            <Text style={styles.label}>Avatar url</Text>
            <TextInput 
                style={styles.input} 
                value={image} 
                onChangeText= {text => setAvatar(image)}                     
            />
            <Button onPress = {() => onSubmit(name, jobTitle, email, image)}>Save Contractor</Button>
        </View>
    )

}

ContractorForm.defaultProps = {
    initialValues: {
      name: '',
      jobTitle: '',
      email: '',
      image: '',
    }
  };
  
  const styles = StyleSheet.create({
    input: {
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 15,
      padding: 5,
      margin: 5
    },
    label: {
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 5
    }
  });

  export default ContractorForm;