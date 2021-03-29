import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initialValue: 0,
      subtotalValue: 0
    };

    this.atualizarSubtotal = this.atualizarSubtotal.bind(this)
  };

  atualizarSubtotal(id)
  {
    let valor = this.state.initialValue;
    
    if(id == 1)
    {
      valor = valor + 5.00;
    }
    else if(id == 2)
    {
      valor = valor + 5.50;
    }
    else if(id == 3)
    {
      valor = valor + 7.00;
    }
    
    let atualizar = this.state;

    atualizar.subtotalValue = valor;
    
    this.setState(atualizar);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>
            LanchoNET
          </Text>

          <View style={styles.product}>
            <Text style={styles.productName}>X-Egg (R$ 5,00)</Text>
            <Text style={styles.productComponents}>Hamburger, Ovo, Queijo e Maionese</Text>
            <Button title="Adicionar ao pedido" color="orange" onPress={this.atualizarSubtotal(1)}/>
          </View>

          <View style={styles.product}>
            <Text style={styles.productName}>X-Salada (R$ 5,50)</Text>
            <Text style={styles.productComponents}>Hamburguer, Queijo, Tomate, Alface e Maionese</Text>
            <Button title="Adicionar ao pedido" color="orange" onPress={this.atualizarSubtotal(2)}/>
          </View>

          <View style={styles.product}>
            <Text style={styles.productName}>X-Bacon (R$ 7,00)</Text>
            <Text style={styles.productComponents}>Hamburger, Bacon, Queijo e Maionese</Text>
            <Button title="Adicionar ao pedido" color="orange" onPress={this.atualizarSubtotal(3)}/>
          </View>

          <Button 
            title="Finalizar pedido"
            color="orange" 
          />

          <View style={styles.subtotal}>
            <Text>Subtotal: {this.state.subtotalValue}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  innerContainer: {
    backgroundColor: 'lightgray',
    width: '85%',
    height: '85%',
    padding: '7%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  heading: {
    color: 'orange',
    fontSize: 24,
    fontWeight: '800',
  },

  product: {
    width: '90%',
    height: '20%',
    padding: '5%',
    backgroundColor: 'white',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  productName: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14
  },

  productComponents: {
    textAlign: 'center',
    color: 'darkgray',
    fontSize: 12
  },

  subtotal: {
    width: '90%',
    height: '10%',
    padding: '5%',
    backgroundColor: 'white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})