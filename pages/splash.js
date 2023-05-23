import { View, Text } from 'react-native'
import React,  { useEffect } from 'react'
import PropTypes from 'prop-types'

import DefaultPage from '../components/DefaultPage'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('login')
        },100)
    }, [])
    return (
        <DefaultPage>
            <Text>
                Ecom Empire !! !!!!!!!
            </Text>
        </DefaultPage>
    )
}

Splash.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default Splash