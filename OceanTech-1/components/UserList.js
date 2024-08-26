import React, { useState, useEffect } from 'react';

function App() {
    const [temperature, setTemperature] = useState(null);
    const [weight, setWeight] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/paciente');
                const data = await response.json();

                if (data && data.length > 0) {
                    const patient = data[0];
                    setTemperature(patient.temperature);
                    setWeight(patient.weight);
                } else {
                    setTemperature(null);
                    setWeight(null);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                setTemperature(null);
                setWeight(null);
            }
        };

        const interval = setInterval(fetchData, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '50px',
            backgroundColor: '#2c3e50', 
            color: '#ecf0f1', 
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            border: '2px solid #3498db' 
        }}>
            <h1 style={{
                color: '#3498db', 
                fontSize: '2.5rem',
                fontFamily: "'Orbitron', sans-serif" 
            }}>
                Dados do Paciente
            </h1>
            <p style={{
                fontSize: '1.5rem',
                margin: '10px 0',
                fontFamily: "'Roboto', sans-serif" 
            }}>
                Temperatura: {temperature !== null ? `${temperature} °C` : 'Carregando...'}
            </p>
            <p style={{
                fontSize: '1.5rem',
                margin: '10px 0',
                fontFamily: "'Roboto', sans-serif", 
            }}>
                Peso: {weight !== null ? `${weight} Kg` : 'Carregando...'}
            </p>
        </div>
    );
}

export default App;
