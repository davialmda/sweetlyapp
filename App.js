import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Usuário
import Home from './components/Home';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import PessoaJuridica from './components/PessoaJuridica';
import LoginPessoaJuridica from './components/LoginPessoaJuridica';
import OpcoesPessoaJuridica from './components/OpcoesPessoaJuridica';
import CriarPedido from './components/CriarPedido';
import MeusPedidos from './components/MeusPedidos';
import OpcaoPedidos from './components/OpcaoPedidos';
import StatusPedidos from './components/StatusPedidos';

// Entregador
import LoginEntregador from './components/LoginEntregador';
import CadastroEntregador from './components/CadastroEntregador';
import EntregadorPedidos from './components/EntregadorPedidos';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [pedidos, setPedidos] = useState([]);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  const handleNavigation = (screenName, params = null) => {
    if (params?.pedido) setPedidoSelecionado(params.pedido);
    setScreen(screenName);
  };

  const adicionarPedido = (pedido) => {
    setPedidos(prev => [...prev, { ...pedido, status: 'Em produção', id: Date.now().toString() }]);
    setScreen('meusPedidos');
  };

  const atualizarPedido = (pedidoAtualizado) => {
    setPedidos(prev => prev.map(p => p.id === pedidoAtualizado.id ? pedidoAtualizado : p));
  };

  return (
    <View style={styles.container}>
      {/* Home */}
      {screen === 'home' && <Home onNavigate={handleNavigation} />}

      {/* Usuário */}
      {screen === 'login' && <Login onNavigate={handleNavigation} />}
      {screen === 'cadastro' && <Cadastro onNavigate={handleNavigation} />}
      {screen === 'pj' && <PessoaJuridica onNavigate={handleNavigation} />}
      {screen === 'loginPJ' && <LoginPessoaJuridica onNavigate={handleNavigation} />}
      {screen === 'opcoesPJ' && <OpcoesPessoaJuridica onNavigate={handleNavigation} />}
      {screen === 'opcoes' && <OpcaoPedidos onNavigate={handleNavigation} />}
      {screen === 'pedido' && <CriarPedido onNavigate={handleNavigation} adicionarPedido={adicionarPedido} />}
      {screen === 'meusPedidos' && <MeusPedidos onNavigate={handleNavigation} pedidos={pedidos} />}
      {screen === 'statusPedidos' && <StatusPedidos pedido={pedidoSelecionado} onNavigate={handleNavigation} />}

      {/* Entregador */}
      {screen === 'loginEntregador' && <LoginEntregador onNavigate={handleNavigation} />}
      {screen === 'cadastroEntregador' && <CadastroEntregador onNavigate={handleNavigation} />}
      {screen === 'entregadorPedidos' && <EntregadorPedidos pedidos={pedidos} atualizarPedido={atualizarPedido} onNavigate={handleNavigation} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7a8b8' },
});
