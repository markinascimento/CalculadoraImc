import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Keyboard
} from 'react-native';

export default function myApp(){
  
  const [altura , setAltura] = useState('');
  const [peso , setPeso] = useState('');
  const [result , setResult] = useState('');

  function calcular(){
    
    if(altura > 0 && peso > 0){
      const imc = Math.round(peso / (altura * altura) * 100) / 100
      let info = ''
      if( imc < 17  ){
        info = 'Seu índice IMC está extremamente BAIXO!'
      }else if( imc >= 17 && imc <= 18.4){
        info = 'Seu índice IMC está baixo'
      }else if( imc >= 18.5 && imc <= 24.9 ){
        info = 'Excelente resultado, índice IMC PERFEITO'
      }else if( imc >= 25 && imc <= 29.9 ){
        info = 'Infelizmente, você está ACIMA DO PESO'
      }else if( imc >= 30 && imc <= 34.9 ){
        info = 'Lamento informar, mas você está com OBESIDADE GRAU I'
      }else if( imc >= 35 && imc <= 39.9 ){
        info = 'Lamento informar, mas você está com OBESIDADE GRAU II'
      }else if( imc >=40 ){
        info = 'Lamento informar, mas você está com OBESIDADE GRAU III'
      }
      setResult('IMC: ' + imc + 'kg/m²' + ' '+ info)
      setAltura('');
      setPeso('');
      Keyboard.dismiss();
    }else{
      setResult('Aguardando informações...')
    }
  }

  return(
    <SafeAreaView>
      <View style={styles.viewDados}> 
        <Text style={styles.textHeader}> CALCULADORA IMC </Text>
        <TextInput 
          placeholder = {'Altura'}
          onChangeText = { (altura) => setAltura(altura) }
          style = {styles.input}
          keyboardType = {'numeric'}
          value = {altura}  
        />
        <TextInput 
          placeholder = {'Peso'}
          onChangeText = { (peso) => setPeso(peso) }
          style = {styles.input}
          keyboardType = {'numeric'}
          value = {peso}
        />
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.button} onPress={calcular}>
            <Text style={styles.textButton}> CALCULAR </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewButtonClean}>
          <TouchableOpacity style={styles.buttonClean} onPress={()=> setResult('')}>
            <Text style={styles.textButton}> LIMPAR </Text>
          </TouchableOpacity>
        </View>
      </View> 
      <View style={styles.viewResult}>
        <Text style={styles.textResult}> {result}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cotainer:{
    flex: 1,
    backgroundColor: '#fff'
  },
  viewDados:{
    height: 450,
    backgroundColor: '#7159c1',
    borderBottomLeftRadius: 100,
  },
  textHeader:{
    fontSize: 27,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginTop: 15
  },
  input:{
    margin: 22,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: '#fff',
    fontSize: 21,
    color: '#fff',
    padding: 12
  },
  viewButton:{
    alignItems: 'center',
    marginTop: 50
  },
  button:{
    width: '65%',
    height: 43,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  textButton:{
    fontSize: 22,
    fontWeight: 'bold'
  },
  viewResult:{
    marginTop: 25
  },
  textResult:{
    fontSize: 35,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  viewButtonClean:{
    alignItems: 'center',
    marginTop: 20
  },
  buttonClean:{
    width: '37%',
    height: 43,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});