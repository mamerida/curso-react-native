import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button, FlatList} from 'react-native'; // FlashList permite crear listas


export default function App() {
  

  return (
    <View style={styles.container}>
      <FlatList //FLATlIST MEJOR QUE SCROLL VIEW AL MOMENTO DE RENDERIZAR ELEMENTOS 
      // datos a renderizar 
      data={[
        { key: 1 , name : "Nicolas" },
        { key: 2 , name : "Marito"},
        { key: 3 , name : "Chanchito Triste"},
        { key: 4 , name : "Chanchito feliz"},
        { key: 5 , name : "Tortita con manteca "},
        { key: 6 , name : "Nicolas" },
        { key: 7 , name : "Marito"},
        { key: 8 , name : "Chanchito Triste"},
        { key: 9 , name : "Chanchito feliz"},
        { key: 10 , name : "Tortita con manteca "},
        { key: 11 , name : "Nicolas" },
        { key: 12 , name : "Marito"},
        { key: 13 , name : "Chanchito Triste"},
        { key: 14 , name : "Chanchito feliz"},
        { key: 15 , name : "Tortita con manteca "},
      ]} 
      renderItem={({item}) => <Text style ={styles.item}>{item.name}</Text>}// como se va a renderizar el contenido mostrado 
      // renderItem recibe un objeto por ende al aplicar {} lo desestructuro quedandome con el tiem entonces imprimo mediante text
      
      />
      
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'stretch', // stretch ocupa todo el ancho de la pantalla
    justifyContent:'center',
    paddingTop:22,
  },
  item:{
    padding:10,
    fontSize:22,
    height:50,
    borderBottomColor:'#ccc',
    borderBottomWidth: 1,
    backgroundColor:'#E9E9E9',

  },


});

// import { StatusBar } from 'expo-status-bar';
// import React,{useState} from 'react';
// import { StyleSheet, Text, View, TextInput, Dimensions,Button ,TouchableHighlight , TouchableNativeFeedback, TouchableOpacity} from 'react-native'; // importo textInput desde react native utilizo Dimensions para poder tomar el ancho del dispositivo
// //TouchableNativeFeedback solo android 
// //TouchableOpacity
// const width = Dimensions.get('window').width // al get se le puede pasar window o screen se puede acceder a las propiedades width , heigth
// export default function App() {
  
//   const[text,setText] = useState(' ')
//   const[submited,setSubmit] = useState(' ')

//   return (
//     //View nos permite mostrar los componentes mediante los children del mismo cambiar estados y manejar eventos como onPress 
//     //No se pueden colocar otra cosa que no sean componentes dentro del View
//     <View style={styles.container}>
//       <ScrollView>
//       <Text>Texto : {submited}</Text>
//       <TextInput 
//       style={styles.input} 
//       placeholder='   Ingrese su texto aqui ' 
//       onChangeText={t => setText(t)}
//       defaultValue={text}
//       />
//       <Button title='Aceptar' 
//       onPress={()=>{
//         setSubmit(text)
//         alert("Boton presionado correctamente")
//         }}
//       ></Button>
//       <TouchableHighlight 
//       underlayColor={'#999'} //cambia el color al momento de presionar
//       activeOpacity={0.2} //cambia la opacidad al momento de presionar
//       onPress={()=>{
//         setSubmit(text)
//         alert("Boton presionado correctamente")
//         }}
//       > 
//       <Text>Aceptar Higtligth</Text>
//       </TouchableHighlight>

//       <TouchableOpacity 
//       style={styles.TouchableOpacity}
//       onPress={()=>{    
//         setSubmit(text)
//         alert("Boton presionado correctamente")
//         }}
//       > 
//       <View style={styles.view}><Text>Aceptar Opacity</Text></View>
//       </TouchableOpacity>


//       <TouchableNativeFeedback 
//       backgroundColor={TouchableNativeFeedback.Ripple('#00f',true)} // esto lo que hace es de la colores con una animacion al presionar el boton
//       onPress={()=>{
//         setSubmit(text)
//         alert("Boton presionado correctamente")
//         }}
//       > 
//       <View style={styles.view}><Text>Aceptar Feedback</Text></View>
//       </TouchableNativeFeedback>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   TouchableOpacity:{
//     backgroundColor : '#EEE'
//   },
//   view:{
//     flex : 0.2
//   },
//   //campo siempre con estilo
//   input:{
//     height:40,
//     width:'100%',
//     // backgroundColor:'#eee',
//     borderBottomColor:'#adc', // color de la linea inferior 
//     borderBottomWidth: 1, //tamaño


//   },
//   container:{
//     flex:1,
//     backgroundColor:'#fff',
//     alignItems:'center',
//     justifyContent:'center',
//   },
// scrollView:{
//   width:Dimensions.get('window').width,  // para poder usar el 100% del ancho de la pantalla paso este estilo 
// }

// });
// -----------------------------------------------------------------------------------------------------------------------------------------------------
 //width:100, // para que utilice un ancho del 100% ancho disponible lo indico como texto. O tomar la dimension del dispositivo para pasarsela como ancho
// {<View style={styles.container}>
// <Texto style={styles.red}/>
// <Texto style={styles.blue}/>
// <Texto style={styles.green}/>
// <StatusBar style="auto" />
// </View> }

// useState nos permite cambiar los estados dentro de los componentes para que puedan responder a algun evento

// const Texto = ({style})=>{

//     // En mi variable de estado se le coloca el nombre de la variable y la funcion que la actualiza junto con el valor inicial
//     const [Texto, setTexto] = useState("Hola mundo");
//     //en este caso se ejecuta este codigo que cambia el texto mostrado mediante el useState declarado mas arriba
//     //amplie la funcionalidad de la funcion actualizar texto ahora lee el valor de Texto y dependiendo de eso cambia de una forma a otra
//     const actualizarTexto = () =>{
//       if(Texto== "Hola mundo"){
//         setTexto("Chao mundo cruel :C");
//       }else{
//         setTexto("Hola mundo");
//       }
      
//     } 
//     return(
//         // La propiedad en press al momento de presionar el componente realiza una accion 
//         //utilizo siempre componente Text para poder mostrar texto en pantalla 
//         // style={{fontSize : 24}} una forma de definir estilos pero es mejor declararlo al final con el style
//         // se usa {} y no {{}} por tratarse de una propiedad y no de un objeto
//         // se le pueden pasar estilos o un array de estilos los cuales van a ser tomados de izquierda a derecha 
//       <Text style={[styles.text,style]} onPress={actualizarTexto}>{Texto}</Text>
//     )
  
// }

  // container: {
  //   flex: 1,
  //   //indica la direccion en la cual se muestra el contenido row row-reverse column colum-reverse
  //   flexDirection:'column',
  //   backgroundColor: '#fff',
  //   //esta propiedad alinea el contenido en el eje opuesto al declarado  flex-start flex-end center stretch 
  //   //baseline  (alto y ancho variable usa todo el contenido disponible)
  //   alignItems: 'flex-start',
  //   //justifyContent alinea contenido del elemento con el contenido flex-start flex-end center space-between space-around space-evenly
  //   justifyContent: 'space-evenly',
  // },
  // // creo el style text para poder llamarlo en mis componentes es como css dentro del componente
  // text:{
  //   // los numero colocados son unidades relativas y dependera a de la densidad de pixeles del telfono
  //   color:'white',
  //   fontSize:24,
  //   height:100,
  //   width:100,
  //   // la propiedad css seria font-size pero en reactNative se cambio el - por camel case 
  //   // 'font-size':24,
  // },
  // red:{
  //   // flex:1,
  //   backgroundColor:'red',
  // },
  // green:{
  //   // flex:1,
  //   backgroundColor:'green',
  // },
  // blue:{
  //   // flex:1,
  //   backgroundColor:'blue',
  // },