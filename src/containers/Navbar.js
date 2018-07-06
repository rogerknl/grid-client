import React, { Component } from 'react';
import styled from 'styled-components';
import Trending from '../components/Trending';
import Favourites from '../components/Favourites';
import Share from '../components/Share';
import FBLoginButton from './FBLoginButton';

export default class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <p style={{color: 'white', paddingLeft: '20px'}}>GRID.TV</p>
        {/* <Trending />
        <Favourites />
        <Share /> */}
        <FBLoginButton />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  position: sticky;
  background-color: #000;
  box-shadow: 0 2px 2px #efefef;
  z-index: 999;
  // margin-bottom: 20px;
  justify-content: space-between;
`;
