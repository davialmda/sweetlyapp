import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OpcaoPedidos({ onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma opção</Text>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('pedido')}>
        <Text style={styles.buttonText}>Criar Novo Pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#f1c0d6' }]} onPress={() => onNavigate('meusPedidos')}>
        <Text style={styles.buttonText}>Ver Meus Pedidos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f7a8b8' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 40 },
  button: { width: '80%', paddingVertical: 20, borderRadius: 25, backgroundColor: '#f77ca9', alignItems: 'center', justifyContent: 'center', marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
