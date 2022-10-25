import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { RadioButton } from 'react-native-paper';


export default class App extends Component{

  constructor(props) {
    super(props)
    this.state = { altura: 0, massa: 0, resultado: 0, resultadoText: "" }
    this.calcular = this.calcular.bind(this)
  }
  

  calcular() {
    let imc = this.state.massa / (this.state.altura * this.state.altura)

    let s = this.state
    s.resultado = imc

    if (s.resultado < 16) {
      s.resultadoText = "Magreza Grave"
    } else if (s.resultado < 17) {
      s.resultadoText = "Magreza Moderada"
    } else if (s.resultado < 18.5) {
      s.resultadoText = "Abaixo do Peso"
    } else if (s.resultado < 25) {
      s.resultadoText = "Saudável"
    } else if (s.resultado < 30) {
      s.resultadoText = "Acima do Peso"
    } else if (s.resultado < 35) {
      s.resultadoText = "Obesidade Grau I"
    } else if (s.resultado < 40) {
      s.resultadoText = "Obesidade Grau II"
    } else {
      s.resultadoText = "Obesidade Grau III"
    }

    this.setState(s)
  }
  
  render() {
    return (
      
      <View style={styles.container}>
        <Image style={styles.imagem} source={require('./imagens/imc.jpg')}/>

        <View style={styles.entradas}>
          <TextInput placeholder="Peso" keyboardType='numeric' style={styles.input} placeholderTextColor="#787878" onChangeText={(massa) => { this.setState({ massa }) }} />
          <TextInput placeholder="Altura" keyboardType='numeric' style={styles.input} placeholderTextColor="#787878" onChangeText={(altura) => { this.setState({ altura }) }} />
          <TextInput placeholder="Idade" keyboardType='numeric' style={styles.input} placeholderTextColor="#787878" onChangeText={(idade) => { this.setState({ idade }) }} />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>

        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, { fontSize: 40 }]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  entradas: {
    flexDirection: 'row',
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "33%",
    fontSize: 30,
    marginTop: 24,
    color: '#787878'
  },
  button: {
    backgroundColor: "#37cdde"
  },
  buttonText: {
    alignSelf: 'center',
    padding: 30,
    fontSize: 25,
    color: "#787878",
    fontWeight: 'bold',
  },
  resultado: {
    alignSelf: "center",
    color: "Lightgray",
    fontSize: 50,
    padding: 15,
    color: "#787878",
  },
  imagem: {
    alignSelf: "center",
    width: 410,
    height: 280
  }

});

