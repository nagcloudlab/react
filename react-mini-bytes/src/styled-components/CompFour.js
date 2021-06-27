import styled,{css} from 'styled-components'

const Title = styled.h1`

  font-size: 1.5em;
  text-align: center;
  color: palevioletred;

`;


const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: white;
    color: black;
  `}
  
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;


export {Title,Wrapper,Button}