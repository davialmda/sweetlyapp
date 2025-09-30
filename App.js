import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Importando os componentes
<<<<<<< HEAD
import Inicio from './components/Inicio'; 
=======
import Inicio from './components/Inicio'; // A tela de escolha de doce
>>>>>>> 6c681d2d254d7ba9617edcfed392fe72e8276b35
import Login from './components/Login';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import PessoaJuridica from './components/PessoaJuridica';
<<<<<<< HEAD
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
=======

export default function App() {
  const [screen, setScreen] = useState('login'); // Começa com a tela de login

  const handleNavigation = (screen) => {
    setScreen(screen);
>>>>>>> 6c681d2d254d7ba9617edcfed392fe72e8276b35
  };

  return (
    <View style={styles.container}>
      {screen === 'login' && <Login onNavigate={handleNavigation} />}
      {screen === 'inicio' && <Inicio onNavigate={handleNavigation} />}
      {screen === 'home' && <Home onNavigate={handleNavigation} />}
      {screen === 'cadastro' && <Cadastro onNavigate={handleNavigation} />}
      {screen === 'pj' && <PessoaJuridica onNavigate={handleNavigation} />}
<<<<<<< HEAD
      {screen === 'pedido' && <CriarPedido onNavigate={handleNavigation} doceSelecionado={doceSelecionado} />}
=======
>>>>>>> 6c681d2d254d7ba9617edcfed392fe72e8276b35
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
