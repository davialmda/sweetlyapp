import React, { useState } from 'react';
<<<<<<< HEAD
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
=======
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const navigate = (screen) => {
    setCurrentScreen(screen);
>>>>>>> main
  };

  // Tela Home
  if (currentScreen === 'home') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo ao Sweetly</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigate('cadastro')}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('pj')}>
          <Text style={styles.buttonText}>Pessoa Jurídica</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tela Login
  if (currentScreen === 'login') {
    const fazerLogin = () => {
      if (!email.trim() || !senha.trim()) {
        Alert.alert('Erro', 'Preencha todos os campos');
        return;
      }
      
      // Verifica usuário de teste
      if (email === 'usuario@example.com' && senha === '123456') {
        navigate('inicio');
        return;
      }
      
      // Verifica usuários cadastrados
      const usuarioEncontrado = usuarios.find(u => u.email === email.trim() && u.senha === senha);
      if (usuarioEncontrado) {
        Alert.alert('Sucesso', `Bem-vindo, ${usuarioEncontrado.nome}!`);
        setEmail('');
        setSenha('');
        navigate('inicio');
      } else {
        Alert.alert('Erro', 'Credenciais inválidas');
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#f77ca9"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor="#f77ca9"
        />
        <TouchableOpacity style={styles.button} onPress={fazerLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('home')}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tela Cadastro
  if (currentScreen === 'cadastro') {
    const fazerCadastro = async () => {
      if (!nome.trim() || !email.trim() || !senha.trim()) {
        Alert.alert('Erro', 'Preencha todos os campos');
        return;
      }
      
      // Salva localmente
      const novoUsuario = { nome: nome.trim(), email: email.trim(), senha };
      setUsuarios([...usuarios, novoUsuario]);
      
      // Tenta salvar no backend
      try {
        const response = await fetch('http://localhost:3000/user/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: nome.trim(), email: email.trim(), password: senha }),
        });
        
        if (response.ok) {
          Alert.alert('Sucesso', 'Cadastro realizado no servidor!');
        } else {
          Alert.alert('Sucesso', 'Cadastro salvo localmente (servidor offline)');
        }
      } catch (error) {
        Alert.alert('Sucesso', 'Cadastro salvo localmente (servidor offline)');
      }
      
      // Limpa campos e vai para login
      setNome('');
      setEmail('');
      setSenha('');
      navigate('login');
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#f77ca9"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#f77ca9"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor="#f77ca9"
        />
        <TouchableOpacity style={styles.button} onPress={fazerCadastro}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('home')}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tela Escolher Doces
  if (currentScreen === 'inicio') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Escolha seu Doce!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigate('pedido')}>
          <Text style={styles.buttonText}>Cookies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('pedido')}>
          <Text style={styles.buttonText}>Açaí</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('pedido')}>
          <Text style={styles.buttonText}>Sorvetes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('pedido')}>
          <Text style={styles.buttonText}>Bolos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigate('home')}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tela Pessoa Jurídica
  if (currentScreen === 'pj') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pessoa Jurídica</Text>
        <Text style={styles.subtitle}>Em desenvolvimento...</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigate('home')}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Tela Criar Pedido
  return (
    <View style={styles.container}>
<<<<<<< HEAD
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
=======
      <Text style={styles.title}>Criar Pedido</Text>
      <Text style={styles.subtitle}>Pedido em desenvolvimento...</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate('inicio')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
>>>>>>> main
    </View>
  );
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: { flex: 1, backgroundColor: '#f7a8b8' },
});
=======
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7a8b8',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#f1c0d6',
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    marginVertical: 10,
    width: '80%',
    paddingVertical: 20,
    borderRadius: 25,
    backgroundColor: '#f77ca9',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
});
>>>>>>> main
