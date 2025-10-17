import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Componentes
import Home from './components/Home';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import PessoaJuridica from './components/PessoaJuridica';
import CriarPedido from './components/CriarPedido';
import MeusPedidos from './components/MeusPedidos';
import OpcaoPedidos from './components/OpcaoPedidos';
import StatusPedidos from './components/StatusPedidos';

export default function App() {
  const [screen, setScreen] = useState('home'); 
  const [pedidos, setPedidos] = useState([]);
  const [doceSelecionado, setDoceSelecionado] = useState('');
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  const handleNavigation = (screenName, params) => {
    if (params?.doce) {
      setDoceSelecionado(params.doce);
    }
    if (params?.pedido) {
      setPedidoSelecionado(params.pedido);
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
        <MeusPedidos
          onNavigate={handleNavigation}
          pedidos={pedidos}
        />
      )}
      {screen === 'status' && pedidoSelecionado && (
        <StatusPedidos
          pedido={pedidoSelecionado}
          onNavigate={handleNavigation}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7a8b8' },
});
