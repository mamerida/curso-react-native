import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// useState nos permite cambiar los estados dentro de los componentes para que puedan responder a algun evento

const Texto = ()=>{

    // En mi variable de estado se le coloca el nombre de la variable y la funcion que la actualiza junto con el valor inicial
    const [Texto, setTexto] = useState("hola mundo");
    //en este caso se ejecuta este codigo que cambia el texto mostrado mediante el useState declarado mas arriba
    //amplie la funcionalidad de la funcion actualizar texto ahora lee el valor de Texto y dependiendo de eso cambia de una forma a otra
    const actualizarTexto = () =>{
      if(Texto== "Hola mundo"){
        setTexto("Chao mundo cruel :C");
      }else{
        setTexto("Hola mundo");
      }
      
    } 
    return(
        // La propiedad en press al momento de presionar el componente realiza una accion 
        //utilizo siempre componente Text para poder mostrar texto en pantalla 
        // style={{fontSize : 24}} una forma de definir estilos pero es mejor declararlo al final con el style
        // se usa {} y no {{}} por tratarse de una propiedad y no de un objeto
      <Text style={styles.text} onPress={actualizarTexto}>{Texto}</Text>
    )
  
}
export default function App() {
  return (
    //View nos permite mostrar los componentes mediante los children del mismo cambiar estados y manejar eventos como onPress 
    //No se pueden colocar otra cosa que no sean componentes dentro del View
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
  // creo el style text para poder llamarlo en mis componentes es como css dentro del componente
  text:{
    color:'red',
    fontSize:24,
    // la propiedad css seria font-size pero en reactNative se cambio el - por camel case 
    // 'font-size':24,
  },
});
