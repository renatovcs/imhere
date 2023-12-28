

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/participant';

import { styles } from './styles';

import React, { useState } from 'react';

export function Home() {

    const [partipants, setPartipants] = useState<string[]>([]);
    const [participantName, setPartipantName] = useState('');

    function handleParticipantAdd(){
        if (partipants.includes(participantName) ){
            return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome.');
        }  

        setPartipants(prevState => [...prevState, participantName]);
        setPartipantName('');
    }

    function handleParticipantRemove(name: string) {
        Alert.alert('Remover', `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setPartipants(prevState => prevState.filter(partipant => partipant !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }

        ]);
    }

    return (
        <View style={styles.container}>
      
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
      
            <Text style={styles.eventDate}>
                Sexta, 29 de dezembro de 2023
            </Text>

            <View style={styles.form}>

                <TextInput 
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setPartipantName}
                    value={participantName}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            
            <FlatList
                data={partipants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant 
                        key={item}
                        name={item} 
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou ao evento ainda? Adicione participantes à sua lista de presença.
                    </Text>
                )}
            />

    </View>
  );
}