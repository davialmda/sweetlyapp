import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OpcoesPessoaJuridica({ onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel Empresa</Text>
      <Text style={styles.subtitle}>Gerencie seu negócio</Text>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('gerenciarProdutos')}>
        <Text style={styles.buttonText}>Gerenciar Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('pedidosRecebidos')}>
        <Text style={styles.buttonText}>Pedidos Recebidos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('relatoriosVendas')}>
        <Text style={styles.buttonText}>Relatórios de Vendas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('perfilEmpresa')}>
        <Text style={styles.buttonText}>Perfil da Empresa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onNavigate('configuracoes')}>
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#f1c0d6' }]} 
        onPress={() => onNavigate('home')}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f7a8b8', 
    padding: 20 
  },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#fff',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
    opacity: 0.9
  },
  button: { 
    marginVertical: 8, 
    width: '80%', 
    paddingVertical: 15, 
    borderRadius: 25, 
    backgroundColor: '#f77ca9', 
    alignItems: 'center', 
    justifyContent: 'center',
    elevation: 3
  },
  buttonText: { 
    fontSize: 18, 
    color: '#fff', 
    fontWeight: '600' 
  },
});