import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './App';
import { Provider } from './src/context/contractor_context';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };
  
export default function Main() {
  return (
    <PaperProvider theme={theme}>
        <App />
    </PaperProvider>
  );
}