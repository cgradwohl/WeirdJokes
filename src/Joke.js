import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  Text,
  View
} from 'react-native';

import { Button } from 'react-native-elements';

import getJoke from './JokeService';

const Joke = ({ navigation }) => {
  const [showPunchline, setShowPunchline] = useState(false);
  const [joke, setJoke] = useState({});

  useEffect(() => {
    const newJoke = getJoke();
    setJoke(newJoke);
  }, [])

  const nextJoke = () => {
    setShowPunchline(false);

    const nextJoke = getJoke();

    setJoke(nextJoke);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex:3, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 22 }}>{showPunchline ? joke.punchline : joke.setup}</Text>
        </View>
  
        <View style={{ flex: 3, alignItems: 'center', flexDirection: 'row' }}>

          <Button
            buttonStyle={{ backgroundColor: 'gainsboro' }}
            containerStyle={{ width: '50%' }}
            onPress={() => navigation.navigate('Home')}
            title='Go Back'
          />

          {
            showPunchline 
              ? (
                <Button
                  buttonStyle={{ backgroundColor: 'steelblue' }}
                  containerStyle={{ width: '50%' }}
                  onPress={() => nextJoke()}
                  title='This is weird...'
                />
              ) 
              : (
                <Button
                  buttonStyle={{ backgroundColor: 'limegreen' }}
                  containerStyle={{ width: '50%' }}
                  onPress={() => setShowPunchline(true)}
                  title='Show the punchline.'
                />
              )
          }
        </View>
      </SafeAreaView>
  )
}

export default Joke;

