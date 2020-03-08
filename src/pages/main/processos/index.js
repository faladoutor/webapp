import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';

class ProcessosPage extends Component {
  renderItem = data => {
    return (
      <View key={data.id} style={styles.containerItem}>
        <View style={styles.nameRowContainer}>
          <Text style={styles.lblName}>{data.name}</Text>
          <Text style={styles.lblNormal}>{data.status}</Text>
        </View>
        <Text style={styles.lblNormal}>N. Processo: {data.id}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {id: 1, name: 'Charley Oliveira', status: 'APROVADO'},
            {id: 1, name: 'Charley Oliveira', status: 'APROVADO'},
          ]}
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
