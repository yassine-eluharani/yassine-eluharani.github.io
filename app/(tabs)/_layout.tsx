import React from 'react';
import { Tabs } from 'expo-router';
import { QuizProvider } from '@/context/QuizContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <QuizProvider>
        <Tabs screenOptions={{ tabBarActiveTintColor: '#3768b8' }}>
          <Tabs.Screen name="index" options={{
            headerShown: false,
            tabBarLabel: 'Home'
          }} />
          <Tabs.Screen name="quizzes" options={{
            headerShown: false,
            tabBarLabel: 'Quiz List'
          }} />

          <Tabs.Screen name="passTests" options={{
            headerShown: false,
            tabBarLabel: 'History'
          }} />
        </Tabs>
      </QuizProvider>
    </SafeAreaView>
  );
}

