import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const resetarSenha = () => {
    if (!email || !novaSenha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    axios.get('http://localhost:3000/users')
      .then(response => {
        const users = response.data;
        const user = users.find(user => user.email === email);

        if (user) {
          axios.patch(`http://localhost:3000/users/${user.id}`, { senha: novaSenha })
            .then(response => {
              Alert.alert('Sucesso', 'Senha alterada com sucesso!');
              navigation.navigate('Login');
            })
            .catch(error => {
              console.error('Erro ao atualizar senha:', error);
              Alert.alert('Erro', 'Ocorreu um erro ao atualizar a senha.');
            });
        } else {
          Alert.alert('Erro', 'Email não encontrado.');
        }
      })
      .catch(error => {
        console.error('Erro ao verificar email:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao verificar o email.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="Nova Senha"
        secureTextEntry={true}
        value={novaSenha}
        onChangeText={setNovaSenha}
        placeholderTextColor="#000"
      />
      <Button
        title="Redefinir Senha"
        onPress={resetarSenha}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backToLogin}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  backToLogin: {
    marginTop: 20,
    color: '#0034ED',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
