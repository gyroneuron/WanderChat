import { Tabs } from 'expo-router'
import updates from './updates'
import communities from './communities'
import calls from './calls'
import chats from './chats'
import settings from './settings'

export default function Tablayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen name='updates'/>
      <Tabs.Screen name='calls'/>
      <Tabs.Screen name='communities'/>
      <Tabs.Screen name='chats'/>
      <Tabs.Screen name='settings'/>
    </Tabs>

  )
}