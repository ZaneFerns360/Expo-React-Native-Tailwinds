import React from 'react'
import { Text as RNText, View as RNView } from '../../components/Themed'
import { styled } from 'nativewind'
import EditScreenInfo from '../../components/EditScreenInfo'

const Text = styled(RNText)
const View = styled(RNView)

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-lg font-bold">Tab Two</Text>
      <Text className="text-3xl text-red-400">Hello world.</Text>
      <View
        className="my-8 h-px w-4/5"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  )
}
