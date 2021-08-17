import styled from '@emotion/native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const LoadingItem = () => {
    return (
        <Container>
            <ActivityIndicator color="#bb1414" size="large"/>
            <LoadingText>Loading...</LoadingText>
        </Container>
    )
}

const Container = styled.View`
    align-items: center;
    justify-content: center;
    height: 100%;
`
const LoadingText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    font-family: 'Courier New';
    padding: 16px;
`

export default LoadingItem
