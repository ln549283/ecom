import { View, Text, Button } from 'react-native'
import React from 'react'
import DefaultPage from '../components/DefaultPage'
import PropTypes from 'prop-types'

const Settings = ({navigation}) => {
  return (
    <DefaultPage>
      <Text>Settings</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </DefaultPage>
  )
}


Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Settings