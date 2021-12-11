import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// useState nos permite cambiar los estados dentro de los componentes para que puedan responder a algun evento

const Texto = ()=>{

    // En mi variable de estado se le coloca el nombre de la variable y la funcion que la actualiza junto con el valor inicial
    const [Texto, setTexto] = useState("hola mundo");
    //en este caso se ejecuta este codigo que cambia el texto mostrado mediante el useState declarado mas arriba
    const actualizarTexto = () =>{
      setTexto("Chao mundo cruel :C")
    } 
    return(
        // La propiedad en press al momento de presionar el componente realiza una accion
      <Text onPress={actualizarTexto}>{Texto}</Text>
    )
  
}
export default function App() {
  return (
    <View style={styles.container}>
        <Texto />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
