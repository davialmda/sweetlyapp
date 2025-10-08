import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Componentes
import Home from './components/Home';
import Login from './components/Login';//US02
import Cadastro from './components/Cadastro';//US01
import PessoaJuridica from './components/PessoaJuridica';
import CriarPedido from './components/CriarPedido';//US03
import MeusPedidos from './components/MeusPedidos';//US04
import OpcaoPedidos from './components/OpcaoPedidos';//US03

export default function App() {
  const [screen, setScreen] = useState('home'); // Tela inicial agora é Home
  const [pedidos, setPedidos] = useState([]);
  const [doceSelecionado, setDoceSelecionado] = useState('');

  const handleNavigation = (screenName, params) => {
    if (params && params.doce) {
      setDoceSelecionado(params.doce);
    }
    setScreen(screenName);
  };

  const adicionarPedido = (pedido) => {
    setPedidos((prev) => [...prev, pedido]);
    setScreen('meusPedidos');
  };

  return (
    <View style={styles.container}>
      {screen === 'home' && <Home onNavigate={handleNavigation} />}
      {screen === 'login' && <Login onNavigate={handleNavigation} />}
      {screen === 'cadastro' && <Cadastro onNavigate={handleNavigation} />}
      {screen === 'pj' && <PessoaJuridica onNavigate={handleNavigation} />}
      {screen === 'opcoes' && <OpcaoPedidos onNavigate={handleNavigation} />}
      {screen === 'pedido' && (
        <CriarPedido
          onNavigate={handleNavigation}
          adicionarPedido={adicionarPedido}
          doceSelecionado={doceSelecionado}
        />
      )}
      {screen === 'meusPedidos' && (
        <MeusPedidos onNavigate={handleNavigation} pedidos={pedidos} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7a8b8' },
});
