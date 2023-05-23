import { View, Text, Button } from 'react-native'
import React from 'react'
import DefaultPage from '../components/DefaultPage'
import PropTypes from 'prop-types'

const Profile = ({navigation}) => {
  return (
    <DefaultPage>
      <Text>Profile Screen</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />

    </DefaultPage>
  )
}

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Profile