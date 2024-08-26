import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';

const Home = ({ navigation }) => {
  const logout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Captura de tela de 2024-05-29 13-44-55.png')} style={styles.backgroundImage}>
        <View style={styles.header}>
          <Text style={styles.title}>Triagem</Text>
        </View>
        <View style={styles.buttonGrid}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Image source={require('../assets/7247540.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Registro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil')}>
            <Image source={require('../assets/perfil.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Help')}>
            <Image source={require('../assets/7247540.png')} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>IA</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 RobóticaMedica. Todos os direitos reservados.</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    margin: 10,
    padding: 20,
    width: '40%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0034ED',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 60,
    right: 20,
  },
  logoutIcon: {
    width: 50,
    height: 50,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  footerText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default Home;
