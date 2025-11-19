import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function Login({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!senha) {
      newErrors.senha = 'Senha é obrigatória';
    } else if (senha.length < 6) {
      newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fazerLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post('http://192.168.0.7:3000/api/login', {
        email,
        password: senha
      });
      
      if (response.data.user) {
        onNavigate('opcoes');
      }
    } catch (error) {
      if (error.code === 'NETWORK_ERROR' || !error.response) {
        Alert.alert('Erro de Conexão', 'Verifique sua internet e se o servidor está rodando');
      } else {
        Alert.alert('Erro', error.response?.data?.error || 'Falha no login');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (errors.email) setErrors({...errors, email: null});
          }}
          keyboardType="email-address"
          placeholderTextColor="#f77ca9"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.senha && styles.inputError]}
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            if (errors.senha) setErrors({...errors, senha: null});
          }}
          secureTextEntry
          placeholderTextColor="#f77ca9"
        />
        {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}
      </View>

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={fazerLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#f1c0d6' }]}
        onPress={() => onNavigate('home')}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Voltar</Text>
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
    marginBottom: 40, 
    color: '#fff' 
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
  },
  input: { 
    width: '100%', 
    padding: 15, 
    borderWidth: 1, 
    borderColor: '#f1c0d6', 
    borderRadius: 10, 
    fontSize: 16, 
    backgroundColor: '#fff', 
    color: '#333' 
  },
  inputError: {
    borderColor: '#ff6b6b',
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
  button: { 
    marginTop: 20, 
    width: '80%', 
    paddingVertical: 15, 
    borderRadius: 25, 
    backgroundColor: '#f77ca9', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  buttonDisabled: { 
    backgroundColor: '#ccc' 
  },
  buttonText: { 
    fontSize: 18, 
    color: '#fff', 
    fontWeight: '600' 
  },
});
