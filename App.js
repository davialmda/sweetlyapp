import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Importando os componentes
import Inicio from './components/Inicio'; // A tela de escolha de doce
import Login from './components/Login';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import PessoaJuridica from './components/PessoaJuridica';

export default function App() {
  const [screen, setScreen] = useState('login'); // Começa com a tela de login

  const handleNavigation = (screen) => {
    setScreen(screen);
  };

  return (
    <View style={styles.container}>
      {screen === 'login' && <Login onNavigate={handleNavigation} />}
      {screen === 'inicio' && <Inicio onNavigate={handleNavigation} />}
      {screen === 'home' && <Home onNavigate={handleNavigation} />}
      {screen === 'cadastro' && <Cadastro onNavigate={handleNavigation} />}
      {screen === 'pj' && <PessoaJuridica onNavigate={handleNavigation} />}
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
