import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import QuizHeader from './components/QuizHeader';
import QuizQuestions from './components/QuizQuestions';
import SubmitButton from './components/SubmitButton';

const App = () => {
  const [answers, setAnswers] = useState([
    '', '', '', '', '', '', '', ''
  ]);

  return (
      <View style={{flex: 1, backgroundColor: '#17152B'}}>
        <ScrollView>
          <QuizHeader />

          <QuizQuestions
              answers={answers}
              setAnswers={setAnswers}
          />

          <SubmitButton answers={answers} />
        </ScrollView>
      </View>
  );
};

export default App;
