import React from 'react';
import {View} from 'react-native';
import Question from './Question';

const questions = [
    {
        question: 'Which Digimon is shown in the image?',
        image: {
            uri: 'https://www.toei-anim.co.jp/tv/digimon_beatbreak/assets/img/chara/char_main_mon_01.png'
        },
        hint: 'It is a reptile Digimon with a very big appetite.',
        options: ['Koemon', 'Gekkomon', 'Pristimon'],
        answer: 'Gekkomon'
    },
    {
        question: 'Which Digimon is shown in the image?',
        image: {
            uri: 'https://www.toei-anim.co.jp/tv/digimon_beatbreak/assets/img/chara/char_main_mon_02.png'
        },
        hint: 'It looks like a raccoon and has a big-sister personality.',
        options: ['Murasamemon', 'Pristimon', 'Chiropmon'],
        answer: 'Pristimon'
    },
    {
        question: 'Which Digimon is shown in the image?',
        image: {
            uri: 'https://www.toei-anim.co.jp/tv/digimon_beatbreak/assets/img/chara/char_main_mon_03.png'
        },
        hint: 'Its name is connected to the word for bats.',
        options: ['Chiropmon', 'Gekkomon', 'Koemon'],
        answer: 'Chiropmon'
    },
    {
        question: 'Which Digimon is shown in the image?',
        image: {
            uri: 'https://www.toei-anim.co.jp/tv/digimon_beatbreak/assets/img/chara/char_main_mon_04.png'
        },
        hint: 'This Digimon is Kyo’s partner and is powerful in battle.',
        options: ['Volbmon', 'Murasamemon', 'Pristimon'],
        answer: 'Murasamemon'
    },
    {
        question: 'Who is shown in the image?',
        image: {
            uri: 'https://www.toei-anim.co.jp/tv/digimon_beatbreak/assets/img/chara/char_main_01.png'
        },
        hint: 'He often taps rhythms with his drumsticks.',
        options: ['Makoto Kuonji', 'Tomoro Tenma', 'Kyo Sawashiro'],
        answer: 'Tomoro Tenma'
    },
    {
        question: 'Who is shown in the image?',
        image: {
            uri: 'https://www.toei-anim.co.jp/tv/digimon_beatbreak/assets/img/chara/char_main_02.png'
        },
        hint: 'She is Glowing Dawn’s loose cannon.',
        options: ['Kyo Sawashiro', 'Reina Sakuya', 'Tomoro Tenma'],
        answer: 'Reina Sakuya'
    },
    {
        question: 'Who is shown in the image?',
        image: {
            uri: 'https://www.toei-anim.co.jp/tv/digimon_beatbreak/assets/img/chara/char_main_03.png'
        },
        hint: 'He is 10 years old and handles the team’s analysis.',
        options: ['Reina Sakuya', 'Makoto Kuonji', 'Tomoro Tenma'],
        answer: 'Makoto Kuonji'
    },
    {
        question: 'Who is shown in the image?',
        image: {
            uri: 'https://www.toei-anim.co.jp/tv/digimon_beatbreak/assets/img/chara/char_main_04.png'
        },
        hint: 'He is the leader of Glowing Dawn.',
        options: ['Makoto Kuonji', 'Kyo Sawashiro', 'Reina Sakuya'],
        answer: 'Kyo Sawashiro'
    }
];

const QuizQuestions = ({answers, setAnswers}) => {
    return (
        <View>
            {questions.map((question, index) => (
                <Question
                    key={index}
                    question={question}
                    number={index + 1}
                    answer={answers[index]}
                    setAnswer={(value) => {
                        const updatedAnswers = [...answers];
                        updatedAnswers[index] = value;
                        setAnswers(updatedAnswers);
                    }}
                />
            ))}
        </View>
    );
};

export {questions};
export default QuizQuestions;