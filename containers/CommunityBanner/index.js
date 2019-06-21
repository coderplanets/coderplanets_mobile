import React from 'react'
import styled from 'styled-components/native'

import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { WebBrowser } from 'expo'

import { MonoText } from '../../components/StyledText'
import {
  Wrapper,
  StyledText2,
  ScrollViewWrapper,
  StartedWrapper,
} from './styles'

class CommunityBannerContainer extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Wrapper>
        <ScrollViewWrapper>
          <StartedWrapper>
            <StyledText2>CPS - RN 客户端</StyledText2>
            <Text>hello coderplanets</Text>
          </StartedWrapper>
        </ScrollViewWrapper>
      </Wrapper>
    )
  }
}

export default CommunityBannerContainer
