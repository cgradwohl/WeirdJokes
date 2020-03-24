
import 'react-native-gesture-handler';

import React from 'react';

import {
  SafeAreaView,
  Text,
  View
} from 'react-native';

import { Button } from 'react-native-elements';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex:3, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 24 }}>Would you like to hear a weird joke?</Text>
      </View>

      <View style={{ flex: 3, alignItems: 'center', flexDirection: 'row' }}>
        <Button
          buttonStyle={{ backgroundColor: 'limegreen' }}
          containerStyle={{ width: '50%' }}
          onPress={() => navigation.navigate('Joke')}
          title='Yes'
        />
        <Button
          buttonStyle={{ backgroundColor: 'tomato' }}
          containerStyle={{ width: '50%' }}
          onPress={() => console.log('nah...')}
          title="No"
        />
      </View>
    </SafeAreaView>
  );
};


export default Home;
