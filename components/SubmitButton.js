import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import {questions} from './QuizQuestions';

const SubmitButton = ({answers}) => {
    const [score, setScore] = useState(null);
    const [imageError, setImageError] = useState(false);

    const checkAnswers = () => {
        let total = 0;

        for (let i = 0; i < questions.length; i++) {
            if (answers[i] === questions[i].answer) {
                total++;
            }
        }

        setImageError(false);
        setScore(total);
    };

    const resultImage = score >= 4
        ? 'https://preview.redd.it/1gmgi8vyzcwf1.jpg?width=640&crop=smart&auto=webp&s=ed78f6b572ba27a69bb38a81cbb9e5ea4210da4f'
        : 'https://i.redd.it/y74zom1hwjsh1.jpeg';

    return (
        <View style={{
            marginHorizontal: 20,
            marginTop: 15,
            marginBottom: 40
        }}>

            <TouchableOpacity
                onPress={checkAnswers}
                style={{
                    backgroundColor: '#9B59B6',
                    padding: 16,
                    borderRadius: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <FontAwesome6 name="trophy" size={20} color="white" />

                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginLeft: 10
                }}>
                    Submit Answers
                </Text>
            </TouchableOpacity>

            <Modal
                visible={score !== null}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setScore(null)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20
                }}>

                    <View style={{
                        backgroundColor: '#292642',
                        width: '100%',
                        padding: 20,
                        borderRadius: 15,
                        alignItems: 'center'
                    }}>

                        <Text style={{
                            color: '#FFD700',
                            fontSize: 26,
                            fontWeight: 'bold',
                            marginBottom: 10
                        }}>
                            Your Score: {score}/{questions.length}
                        </Text>

                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            marginBottom: 15,
                            textAlign: 'center'
                        }}>
                            {score >= 4
                                ? 'Great job! Gekkomon is happy!'
                                : 'Better luck next time!'}
                        </Text>

                        {!imageError ? (
                            <Image
                                source={{uri: resultImage}}
                                onError={() => setImageError(true)}
                                style={{
                                    width: '100%',
                                    height: 250,
                                    resizeMode: 'contain'
                                }}
                            />
                        ) : (
                            <Text style={{
                                color: '#BDB8D6',
                                textAlign: 'center',
                                marginVertical: 20
                            }}>
                                Image could not be loaded. Please check your internet connection.
                            </Text>
                        )}

                        <TouchableOpacity
                            onPress={() => setScore(null)}
                            style={{
                                backgroundColor: '#9B59B6',
                                paddingVertical: 12,
                                paddingHorizontal: 35,
                                borderRadius: 8,
                                marginTop: 15
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontSize: 16,
                                fontWeight: 'bold'
                            }}>
                                Close
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

        </View>
    );
};

export default SubmitButton;
