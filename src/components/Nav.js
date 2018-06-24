import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import {
  minimalTheme,
  mintTheme,
  oreoTheme,
} from '../themes';

const NavContainer = styled.div`
  min-width: 100%;
  margin-top: 45px;
  position: sticky;
  align-self: flex-start;
  top: 45px;
`

const NavBorder = styled.div`
  min-width: 100%;
  border: solid ${props => props.theme.borderColor};
  border-width: 10px 5px;
`

const NavInner = styled.div`
  background-color: ${props => props.theme.secondary};
`

const Heading = styled.h1`
  background-color: ${props => props.theme.borderColor};
  color: ${props => props.theme.secondary};
  padding: 0;
  margin: 0;
`

const HeaderLink = styled(Link)`
  display: block;
  padding: 0;
  padding-left: .5rem;
  margin: 0;
  margin-top: -.5rem;
  color: inherit;
  text-decoration: none;
  :hover {
    color: ${props => props.theme.titleHover};
  }
`

const InfoText = styled.p`
  padding-left: .5rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
`

const NavList = styled.ul`
  line-height: 1.7025rem;
  list-style: none;
  border: solid ${props => props.theme.borderColor};
  border-width: 0;
  border-top-width: 10px;
  margin: 0;
  padding: 0;
  font-size: 1.25em;
  ${'' /* text-align: center; */}
`

const ListLink = styled(Link)`
  display: block;
  padding-left: .5rem;
  padding-bottom: .375em;
  padding-top: .375em;
  text-decoration: none;
  color: inherit;
  :hover {
    background-color: ${props => props.theme.navHover};
    color: ${props => props.theme.navHoverText};
  }
`

const ListItem = props => <li><ListLink to={props.to}>{props.name}</ListLink></li>

const ColorSwitcherWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`

const HoverIcon = styled(FontAwesomeIcon)`
  :hover {
    color: ${props => props.theme.titleHover};
  }
`

class ColorSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spin: false,
    }
    this.handle = this.handle.bind(this);
  }

  handle(icon) {
    if (icon === 'moon') {
      this.props.changeTheme(mintTheme);
    }
    if (icon === 'adjust') {
      this.props.changeTheme(oreoTheme);
    }
    if (icon === 'sun') {
      this.props.changeTheme(minimalTheme);
    }
  }

  render() {
    return (
      <ColorSwitcherWrapper>
        <HoverIcon icon={faSun} size='lg' onClick={() => this.handle('sun')} />
        <HoverIcon icon={faAdjust} size='lg' rotation={180} onClick={() => this.handle('adjust')} />
        <HoverIcon icon={faMoon} size='lg' onClick={() => this.handle('moon')} />
      </ColorSwitcherWrapper>
    )
  }
}

const Nav = (props) => {
  return (
    <NavContainer>
    <NavBorder>
      <NavInner>
        <Heading>
          <HeaderLink to='/'>94_ARG</HeaderLink>
        </Heading>
        <InfoText>
          Digital Culture magazine. Writing about the internet, cryptocurrency, philosophy, economics and everything in between.
        </InfoText>
        <NavList>
          <ListItem to='/content' name='CONTENT' />
          <ListItem to='/preview' name='PREVIEW' />
          <ListItem to='/about' name='ABOUT' />
        </NavList>
      </NavInner>
    </NavBorder>
    <ColorSwitcher changeTheme={props.changeTheme}/>
    </NavContainer>
  )
}

export default Nav;