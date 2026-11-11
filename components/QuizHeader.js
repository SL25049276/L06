import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const QuizHeader = () => {
    return (
        <View style={{alignItems: 'center', marginTop: 40, marginBottom: 20}}>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome6 name="bolt" size={25} color="#FFD700" />

                <Text style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: 'white',
                    marginHorizontal: 10
                }}>
                    DIGIMON
                </Text>

                <FontAwesome6 name="star" size={25} color="#FFD700" />
            </View>

            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#D9A7FF',
                marginTop: 5
            }}>
                BEATBREAK
            </Text>

            <Text style={{
                fontSize: 18,
                color: 'white',
                marginTop: 10
            }}>
                Character Quiz
            </Text>

            <FontAwesome6
                name="lightbulb"
                size={22}
                color="#FFD700"
                style={{marginTop: 15}}
            />

            <Text style={{
                color: '#BDB8D6',
                fontSize: 13,
                marginTop: 5
            }}>
                Test your knowledge of Digimon Beatbreak!
            </Text>

        </View>
    );
};

export default QuizHeader;