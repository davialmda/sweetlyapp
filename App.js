import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Importando os componentes
import Inicio from './components/Inicio'; 
import Login from './components/Login';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import PessoaJuridica from './components/PessoaJuridica';
import CriarPedido from './components/CriarPedido'; // US03

export default function App() {
  const [screen, setScreen] = useState('login'); // Começa com a tela de login
  const [doceSelecionado, setDoceSelecionado] = useState(''); // Para passar o doce escolhido

  // Função de navegação
  const handleNavigation = (screenName, params) => {
    if (params && params.doce) {
      setDoceSelecionado(params.doce); // salva o doce selecionado
    }
    setScreen(screenName);
  };

  return (
    <View style={styles.container}>
      {screen === 'login' && <Login onNavigate={handleNavigation} />}
      {screen === 'inicio' && <Inicio onNavigate={handleNavigation} />}
      {screen === 'home' && <Home onNavigate={handleNavigation} />}
      {screen === 'cadastro' && <Cadastro onNavigate={handleNavigation} />}
      {screen === 'pj' && <PessoaJuridica onNavigate={handleNavigation} />}
      {screen === 'pedido' && <CriarPedido onNavigate={handleNavigation} doceSelecionado={doceSelecionado} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7a8b8', // Rosa pastel
  },
});
