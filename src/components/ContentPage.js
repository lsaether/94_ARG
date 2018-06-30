import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContentBorder = styled.div`
  width: calc(100% - 20px);
  margin-top: 20px;
  margin-left: 10px;
  background-color: ${props => props.theme.secondary};
  border: solid ${props => props.theme.borderColor};
  border-width: 10px 5px;
`

const ArticleTitle = styled.h2`
  text-align: center;
`

// const DateAndAuthor = styled.p`
//   text-align: center;
//   color: grey;
//   font-size: .8em;
// `

const ReadLink = styled(Link)`
  display: block;
  color: inherit;
  border: solid ${props => props.theme.borderColor};
  border-top-width: 5px;
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  text-decoration: none;
  :hover {
    background-color: ${props => props.theme.readHover};
    color: ${props => props.theme.readHoverText};
  }
  text-align: center;
`

const Read = props => <ReadLink to={props.to}>READ</ReadLink>
const Look = props => <ReadLink to={props.to}>LOOK</ReadLink>

const WrittenContent = props => {
  return (
    <ContentBorder>
      <ArticleTitle>{props.title}</ArticleTitle>
      <Read to={props.to} />
    </ContentBorder>
  )
}

const VisualContent = props => {
  return (
    <ContentBorder>
      <ArticleTitle>{props.title}</ArticleTitle>
      <Look to={props.to} />
    </ContentBorder>
  )
}

const PageWrapper = styled.div`
  ${'' /* width: 100%; */}
  margin-bottom: 20px;
`

const ContentPage = props => {
  return (
    <PageWrapper>
      <WrittenContent title='HOW TO SAVE THE WORLD, THREE EASY STEPS' to='#' />
      <VisualContent title='A DAY IN THE LIFE OF A FAMOUS STAR' to='#' />
      <WrittenContent title='HOW TO SAVE THE WORLD, THREE EASY STEPS' to='#' />
      <WrittenContent title='HOW TO SAVE THE WORLD, THREE EASY STEPS' to='#' />
      <WrittenContent title='HOW TO SAVE THE WORLD, THREE EASY STEPS' to='#' />
    </PageWrapper>
  )
}

export default ContentPage;