import { View, Text, Button } from 'react-native'
import React from 'react'
import DefaultPage from '../components/DefaultPage'
import PropTypes from 'prop-types'

const Shop = ({navigation}) => {
  return (
    <DefaultPage>
      <Text>Shop Screen</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />

    </DefaultPage>
  )
}


Shop.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Shop