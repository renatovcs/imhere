import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/home'

export default function App(){
  return(
    <>
      <StatusBar backgroundColor='#FFF' />
      <Home />

    </>
  );
}
