import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

export default function PessoaJuridica({ onNavigate }) {
  // Dados da Empresa
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState('');
  const [inscricaoMunicipal, setInscricaoMunicipal] = useState('');
  
  // Dados do Responsável
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [cpfResponsavel, setCpfResponsavel] = useState('');
  const [telefoneResponsavel, setTelefoneResponsavel] = useState('');
  
  // Dados de Acesso
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  
  // Endereço
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const formatCNPJ = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  };

  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const formatTelefone = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const formatCEP = (value) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{5})(\d{3})/, '$1-$2');
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Dados da Empresa
    if (!razaoSocial) newErrors.razaoSocial = 'Razão Social é obrigatória';
    if (!cnpj) {
      newErrors.cnpj = 'CNPJ é obrigatório';
    } else if (cnpj.replace(/\D/g, '').length !== 14) {
      newErrors.cnpj = 'CNPJ deve ter 14 dígitos';
    }
    
    // Dados do Responsável
    if (!nomeResponsavel) newErrors.nomeResponsavel = 'Nome do responsável é obrigatório';
    if (!cpfResponsavel) {
      newErrors.cpfResponsavel = 'CPF do responsável é obrigatório';
    } else if (cpfResponsavel.replace(/\D/g, '').length !== 11) {
      newErrors.cpfResponsavel = 'CPF deve ter 11 dígitos';
    }
    if (!telefoneResponsavel) {
      newErrors.telefoneResponsavel = 'Telefone do responsável é obrigatório';
    } else if (telefoneResponsavel.replace(/\D/g, '').length !== 11) {
      newErrors.telefoneResponsavel = 'Telefone deve ter 11 dígitos';
    }
    
    // Dados de Acesso
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
    if (senha !== confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas não coincidem';
    }
    
    // Endereço
    if (!endereco) newErrors.endereco = 'Endereço é obrigatório';
    if (!cidade) newErrors.cidade = 'Cidade é obrigatória';
    if (!estado) newErrors.estado = 'Estado é obrigatório';
    if (!cep) {
      newErrors.cep = 'CEP é obrigatório';
    } else if (cep.replace(/\D/g, '').length !== 8) {
      newErrors.cep = 'CEP deve ter 8 dígitos';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fazerCadastroPJ = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post('http://192.168.0.7:3000/api/cadastro', {
        name: razaoSocial,
        email,
        password: senha,
        role: 'company'
      });
      
      if (response.data.company || response.data.user) {
        Alert.alert('Sucesso', `Cadastro PJ realizado! Bem-vinda, ${razaoSocial}`);
        onNavigate('loginPJ');
      }
    } catch (error) {
      console.log('Erro PJ:', error.response?.data);
      if (error.code === 'NETWORK_ERROR' || !error.response) {
        Alert.alert('Erro de Conexão', 'Verifique sua internet e se o servidor está rodando');
      } else {
        const errorMsg = error.response?.data?.error || error.response?.data?.message || 'Falha no cadastro';
        Alert.alert('Erro', errorMsg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Cadastro Pessoa Jurídica</Text>

      {/* Dados da Empresa */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.razaoSocial && styles.inputError]}
          placeholder="Razão Social *"
          value={razaoSocial}
          onChangeText={(text) => {
            setRazaoSocial(text);
            if (errors.razaoSocial) setErrors({...errors, razaoSocial: null});
          }}
          placeholderTextColor="#f77ca9"
        />
        {errors.razaoSocial && <Text style={styles.errorText}>{errors.razaoSocial}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome Fantasia (opcional)"
          value={nomeFantasia}
          onChangeText={setNomeFantasia}
          placeholderTextColor="#f77ca9"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.cnpj && styles.inputError]}
          placeholder="CNPJ *"
          value={cnpj}
          onChangeText={(text) => {
            const formatted = formatCNPJ(text);
            setCnpj(formatted);
            if (errors.cnpj) setErrors({...errors, cnpj: null});
          }}
          placeholderTextColor="#f77ca9"
          keyboardType="numeric"
          maxLength={18}
        />
        {errors.cnpj && <Text style={styles.errorText}>{errors.cnpj}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Inscrição Estadual (opcional)"
          value={inscricaoEstadual}
          onChangeText={setInscricaoEstadual}
          placeholderTextColor="#f77ca9"
        />
      </View>

      {/* Dados do Responsável */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.nomeResponsavel && styles.inputError]}
          placeholder="Nome do Responsável *"
          value={nomeResponsavel}
          onChangeText={(text) => {
            setNomeResponsavel(text);
            if (errors.nomeResponsavel) setErrors({...errors, nomeResponsavel: null});
          }}
          placeholderTextColor="#f77ca9"
        />
        {errors.nomeResponsavel && <Text style={styles.errorText}>{errors.nomeResponsavel}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.cpfResponsavel && styles.inputError]}
          placeholder="CPF do Responsável *"
          value={cpfResponsavel}
          onChangeText={(text) => {
            const formatted = formatCPF(text);
            setCpfResponsavel(formatted);
            if (errors.cpfResponsavel) setErrors({...errors, cpfResponsavel: null});
          }}
          placeholderTextColor="#f77ca9"
          keyboardType="numeric"
          maxLength={14}
        />
        {errors.cpfResponsavel && <Text style={styles.errorText}>{errors.cpfResponsavel}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.telefoneResponsavel && styles.inputError]}
          placeholder="Telefone do Responsável *"
          value={telefoneResponsavel}
          onChangeText={(text) => {
            const formatted = formatTelefone(text);
            setTelefoneResponsavel(formatted);
            if (errors.telefoneResponsavel) setErrors({...errors, telefoneResponsavel: null});
          }}
          placeholderTextColor="#f77ca9"
          keyboardType="phone-pad"
          maxLength={15}
        />
        {errors.telefoneResponsavel && <Text style={styles.errorText}>{errors.telefoneResponsavel}</Text>}
      </View>

      {/* Dados de Acesso */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="E-mail *"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (errors.email) setErrors({...errors, email: null});
          }}
          placeholderTextColor="#f77ca9"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>

      {/* Endereço */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.endereco && styles.inputError]}
          placeholder="Endereço *"
          value={endereco}
          onChangeText={(text) => {
            setEndereco(text);
            if (errors.endereco) setErrors({...errors, endereco: null});
          }}
          placeholderTextColor="#f77ca9"
        />
        {errors.endereco && <Text style={styles.errorText}>{errors.endereco}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.cidade && styles.inputError]}
          placeholder="Cidade *"
          value={cidade}
          onChangeText={(text) => {
            setCidade(text);
            if (errors.cidade) setErrors({...errors, cidade: null});
          }}
          placeholderTextColor="#f77ca9"
        />
        {errors.cidade && <Text style={styles.errorText}>{errors.cidade}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.estado && styles.inputError]}
          placeholder="Estado *"
          value={estado}
          onChangeText={(text) => {
            setEstado(text);
            if (errors.estado) setErrors({...errors, estado: null});
          }}
          placeholderTextColor="#f77ca9"
        />
        {errors.estado && <Text style={styles.errorText}>{errors.estado}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.cep && styles.inputError]}
          placeholder="CEP *"
          value={cep}
          onChangeText={(text) => {
            const formatted = formatCEP(text);
            setCep(formatted);
            if (errors.cep) setErrors({...errors, cep: null});
          }}
          placeholderTextColor="#f77ca9"
          keyboardType="numeric"
          maxLength={9}
        />
        {errors.cep && <Text style={styles.errorText}>{errors.cep}</Text>}
      </View>

      {/* Senha */}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.senha && styles.inputError]}
          placeholder="Senha *"
          value={senha}
          onChangeText={(text) => {
            setSenha(text);
            if (errors.senha) setErrors({...errors, senha: null});
          }}
          placeholderTextColor="#f77ca9"
          secureTextEntry
        />
        {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.confirmarSenha && styles.inputError]}
          placeholder="Confirme a Senha *"
          value={confirmarSenha}
          onChangeText={(text) => {
            setConfirmarSenha(text);
            if (errors.confirmarSenha) setErrors({...errors, confirmarSenha: null});
          }}
          placeholderTextColor="#f77ca9"
          secureTextEntry
        />
        {errors.confirmarSenha && <Text style={styles.errorText}>{errors.confirmarSenha}</Text>}
      </View>

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={fazerCadastroPJ}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Cadastrar PJ</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#f1c0d6' }]} 
        onPress={() => onNavigate('home')}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7a8b8',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
    textAlign: 'center',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 8,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#f1c0d6',
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
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
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
