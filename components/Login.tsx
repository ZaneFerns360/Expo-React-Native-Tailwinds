import React, { useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session'
import { Button, StyleSheet } from 'react-native'

WebBrowser.maybeCompleteAuthSession()

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint:
    'https://github.com/settings/connections/applications/<CLIENT_ID>',
}

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const clientId = process.env.EXPO_PUBLIC_GITHUB_CLIENT || ''

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId,
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'expo102',
      }),
    },
    discovery
  )

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params
      setIsLoggedIn(true)
    }
  }, [response])

  return isLoggedIn ? (
    <Button
      title="Logout"
      onPress={() => {
        setIsLoggedIn(false)
      }}
      color="#841584" // Change this to your preferred color
    />
  ) : (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync()
      }}
      color="#841584" // Change this to your preferred color
    />
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
})
