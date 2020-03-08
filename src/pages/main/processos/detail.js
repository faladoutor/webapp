import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class DetalhesDoProcessoPage extends Component {
  renderLoopMovimentacao(data) {
    return data.map((elemento, index) => {
      return (
        <View key={index.toString()} style={styles.movimentacoesStyle}>
          <Text style={styles.boldStyle}>
            {elemento.data} - {elemento.status}
          </Text>
          <Text>{elemento.traducao}</Text>
          <Image
            source={require('../../../assets/audio.png')}
            style={styles.audioImage}
          />
        </View>
      );
    });
  }
  render() {
    const {processo} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.processNumber}>{processo.numero}</Text>
        <Text style={styles.reuStyle}>{processo.autor[0].nome}</Text>
        <Text style={styles.boldStyle}>{processo.status.toUpperCase()}</Text>
        {this.renderLoopMovimentacao(processo.movimentacoes)}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  processNumber: {
    color: '#003929',
    fontSize: 18,
    padding: 10,
  },
  boldStyle: {
    fontWeight: 'bold',
  },
  reuStyle: {
    color: '#003929',
    fontSize: 14,
    marginTop: 10,
  },
  movimentacoesStyle: {
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  audioImage: {
    width: 300,
    height: 60,
    alignSelf: 'center',
    marginTop: 10,
  },
};

export default DetalhesDoProcessoPage;
