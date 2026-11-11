import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Question = ({question, number, answer, setAnswer}) => {

    const showHint = () => {
        Alert.alert('Hint', question.hint);
    };

    return (
        <View style={{
            backgroundColor: '#292642',
            marginHorizontal: 20,
            marginVertical: 10,
            padding: 15,
            borderRadius: 12
        }}>

            <Text style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10
            }}>
                Question {number}
            </Text>

            <Image
                source={question.image}
                style={{
                    width: '100%',
                    height: 180,
                    resizeMode: 'contain',
                    marginBottom: 10
                }}
            />

            <Text style={{
                color: 'white',
                fontSize: 16,
                marginBottom: 10
            }}>
                {question.question}
            </Text>

            <TouchableOpacity
                onPress={showHint}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 10
                }}
            >
                <FontAwesome6 name="lightbulb" size={16} color="#FFD700" />

                <Text style={{
                    color: '#FFD700',
                    marginLeft: 8
                }}>
                    Show Hint
                </Text>
            </TouchableOpacity>

            <View style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 8
            }}>
                <Picker
                    selectedValue={answer}
                    onValueChange={(itemValue) => setAnswer(itemValue)}
                    style={{color: '#17152B'}}
                >
                    <Picker.Item label="Select an answer..." value="" />

                    {question.options.map((option, index) => (
                        <Picker.Item
                            key={index}
                            label={option}
                            value={option}
                        />
                    ))}
                </Picker>
            </View>

        </View>
    );
};

export default Question;