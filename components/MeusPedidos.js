import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function MeusPedidos({ onNavigate, pedidos }) {
  const renderPedido = ({ item }) => (
    <View style={styles.pedido}>
      <Text style={styles.texto}>Doce: {item.item}</Text>
      <Text style={styles.texto}>Endereço: {item.endereco}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f7a8b8', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  pedido: { backgroundColor: '#fff', padding: 15, borderRadius: 15, marginVertical: 10, width: '100%' },
  texto: { fontSize: 16, color: '#333' },
  button: { marginTop: 20, width: '80%', paddingVertical: 15, borderRadius: 25, backgroundColor: '#f77ca9', alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 18 },
});
