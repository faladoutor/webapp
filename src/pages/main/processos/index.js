import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';

const processosData = [
  {
    numero: '0022148-94.2019.8.19.0208',
    juizado: '12 JUIZADO ESPECIAL CIVEL - REGIONAL DO MEIER',
    autor: [
      {
        nome: 'CENTRO EDUCACIONAL DA INFANCIA UNIDUNITE',
        advogado: 'ALZIR PANTALEAO DE MELLO ALVES',
        oab: '075856',
      },
    ],
    reu: [
      {
        nome: 'MARIANA AMORIM SILVA',
      },
    ],
    movimentacoes: [
      {
        data: '06/03/2020',
        status: 'JUNTADA',
        traducao: 'Documento eletrônico juntado de forma automática.',
      },
      {
        data: '02/03/2020',
        status: 'ENVIO DE DOCUMENTO ELETRONICO.',
        traducao: '',
      },
      {
        data: '28/02/2020',
        status: 'RECEBIMENTO',
        traducao: '',
      },
      {
        data: '28/02/2020',
        status: 'DESPACHO',
        traducao:
          '1 - Intime-se a parte autora para, no prazo de 15 (quinze) dias, manifestar-se sobre proposta de parcelamento indicada pelo réu às fls. 100/101. 2 - Intime-se a parte ré para, no prazo de 15 (quinze) dias, comprovar nos autos a realização de depósito judicial á disposição deste juízo. Após, certificados, voltem cls.',
      },
    ],
  },
];

class ProcessosPage extends Component {
  renderItem = data => {
    return (
      <View key={data.id} style={styles.containerItem}>
        <View style={styles.nameRowContainer}>
          <Text style={styles.lblName}>{data.reu[0].nome}</Text>
          <Text style={styles.lblNormal}>{data.status}</Text>
        </View>
        <Text style={styles.lblNormal}>N. Processo: {data.numero}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={processosData}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  nameRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerItem: {
    backgroundColor: '#003929',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  lblName: {
    color: '#FFF',
    fontSize: 14,
  },
  lblNormal: {
    color: '#FFF',
    fontSize: 10,
  },
};

export default ProcessosPage;
