import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function MeusPedidos({ onNavigate, pedidos }) {
  const renderPedido = ({ item }) => (
    <View style={styles.pedido}>
      <Text style={styles.texto}>Doce: {item.item}</Text>
      <Text style={styles.texto}>Endereço: {item.endereco}</Text>

      <TouchableOpacity
        style={styles.statusButton}
        onPress={() => onNavigate('statusPedidos', { pedido: item })}
      >
        <Text style={styles.statusButtonText}>Ver Status</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pedidos</Text>

      {pedidos.length === 0 ? (
        <Text style={styles.texto}>Nenhum pedido criado ainda!</Text>
      ) : (
        <FlatList
          data={pedidos}
          keyExtractor={(item) => item.id}
          renderItem={renderPedido}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('pedido')}>
        <Text style={styles.buttonText}>Criar Novo Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#f1c0d6' }]}
        onPress={() => onNavigate('opcoes')}
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
  texto: { fontSize: 16, color: '#333' },
  statusButton: {
    backgroundColor: '#f77ca9',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  statusButtonText: { color: '#fff', fontWeight: '600' },
  button: {
    marginTop: 15,
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: '#f77ca9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 18 },
});
