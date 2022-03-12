import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContractorDetailScreen from '../screens/contractor_detail_screen';
import ContractorListScreen from '../screens/contractor_list_screen';

const ContractorStack = createStackNavigator();

const ContractorDetailNavigation = () => {
    return <ContractorStack.Navigator initialRouteName='ContractorListScreen'>
        <ContractorStack.Screen 
        name = "ContractorListScreen" 
        component={ContractorListScreen}
        options={
            {headerTitle: "Contractor Lists"}
        }
        />
        <ContractorStack.Screen 
        name = "ContractorDetailScreen" 
        component={ContractorDetailScreen}
        options={
            {headerTitle: "Contractor Details"}
        }

        />

    </ContractorStack.Navigator>
}

export default ContractorDetailNavigation;