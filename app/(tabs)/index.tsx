import { styled } from 'nativewind'
import EditScreenInfo from '../../components/EditScreenInfo'
import { Text as RNText, View as RNView } from '../../components/Themed'
import { SafeAreaView } from 'react-native'
import Login from '../../components/Login'

const SafeArea = styled(SafeAreaView)

const Text = styled(RNText)
const View = styled(RNView)

export default function TabOneScreen() {
  return (
    <SafeArea className="flex-1 items-center justify-center">
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg font-bold">Tab One</Text>
        <View
          className="my-8 h-px w-4/5"
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <Login />

        <EditScreenInfo path="app/(tabs)/index.tsx" />
      </View>
    </SafeArea>
  )
}
