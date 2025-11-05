import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function EntregadorPedidos({ pedidos, atualizarPedido, onNavigate }) {

  const aceitarPedido = (pedido) => {
    if (pedido.status !== 'Em produção') {
      Alert.alert('Aviso', 'Este pedido já foi aceito ou entregue!');
      return;
    }
    atualizarPedido({ ...pedido, status: 'Aceito pelo entregador' });
  };

  const concluirEntrega = (pedido) => {
    if (pedido.status !== 'Aceito pelo entregador') {
      Alert.alert('Aviso', 'Este pedido ainda não foi aceito!');
      return;
    }
    atualizarPedido({ ...pedido, status: 'Entregue' });
    Alert.alert('Sucesso', 'Pedido entregue com sucesso!');
  };

  const renderPedido = ({ item }) => (
    <View style={styles.pedido}>
      <Text style={styles.texto}>Doce: {item.item}</Text>
      <Text style={styles.texto}>Endereço: {item.endereco}</Text>
      <Text style={styles.texto}>Status: {item.status}</Text>

      {item.status === 'Em produção' && (
        <TouchableOpacity style={styles.buttonAceitar} onPress={() => aceitarPedido(item)}>
          <Text style={styles.buttonText}>Aceitar Pedido</Text>
        </TouchableOpacity>
      )}

      {item.status === 'Aceito pelo entregador' && (
        <TouchableOpacity style={styles.buttonConcluir} onPress={() => concluirEntrega(item)}>
          <Text style={styles.buttonText}>Concluir Entrega</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos para Entregador</Text>

      {pedidos.length === 0 ? (
        <Text style={styles.texto}>Nenhum pedido disponível.</Text>
      ) : (
        <FlatList
          data={pedidos}
          keyExtractor={(item) => item.id}
          renderItem={renderPedido}
        />
      )}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#f1c0d6' }]}
        onPress={() => onNavigate('home')}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7a8b8', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  pedido: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    width: '100%',
  },
  texto: { fontSize: 16, color: '#333', marginBottom: 5 },
  buttonAceitar: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  buttonConcluir: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  button: {
    marginTop: 15,
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: '#f77ca9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
