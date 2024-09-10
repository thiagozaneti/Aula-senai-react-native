import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastro = () => {
    const mensagemCadastro = Nome Completo: ${nomeCompleto}\nData de Nascimento: ${dataNascimento}\nEmail: ${email}\nAltura: ${altura}m\nPeso: ${peso}kg;
    setMensagem(mensagemCadastro);
    Alert.alert('Cadastro Realizado', mensagemCadastro);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome Completo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome completo"
        value={nomeCompleto}
        onChangeText={setNomeCompleto}
      />
      
      <Text style={styles.label}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua data de nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Altura (m):</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (ex: 1.75)"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Peso (kg):</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (ex: 70)"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />

      <Button title="Cadastrar" onPress={handleCadastro} />

      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});
