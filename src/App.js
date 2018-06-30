import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

// Pages
import ContentPage from './components/ContentPage';

import Nav from './components/Nav';

import { minimalTheme } from './themes';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${props => props.theme.primary};
  background: ${props => props.theme.secondary};
  min-height: 100vh;
`

const GridX = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: 30px;
  margin-right: 30px;
  max-width: 100%;
`

const Left = styled.div`
  width: calc(25%);
  margin-left: -10px;
`

const Middle = styled.div`
  width: calc(75%);
  margin-left: 20px;
  margin-right: -10px;
`

const ArticleWrapper = styled.div`
  margin-left: 10px;
`

const PreviewPage = props => {
  return (
    <ArticleWrapper>
      <h1>HOW TO SAVE THE WORLD, THREE EASY STEPS</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </ArticleWrapper>
  )
}

// const AboutPage = props => {
//   return (
//     <div>
//       <p>Bitcoin: 194ARGaVhPY3THBR8deR6S5tQdmiQ8ewr7</p>
//     </div>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: minimalTheme,
    }
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(theme) {
    this.setState({
      theme,
    })
  }

  render() {
    return (
      <ThemeProvider theme ={this.state.theme}>
        <Wrapper>
          <GridX>
            <Left>
              <Nav changeTheme={this.changeTheme}/>
            </Left>
            <Middle>
              <Route exact path='/' />
              <Route path='/content' component={ContentPage}/>
              <Route path='/preview' component={PreviewPage}/>
              <Route path='/about' />
            </Middle>
          </GridX>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
