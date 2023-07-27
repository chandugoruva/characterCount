import {useState} from 'react'
import {v4} from 'uuid'
import {
  MainContainer,
  InnerContainer,
  LeftContainer,
  RightContainer,
  LeftHeading,
  RightHeading,
  Button,
  InputItem,
  Img,
  WordsListContainer,
} from './styledComponents'

const Home = () => {
  const [input, setInput] = useState('')
  const [isClicked, setClicked] = useState(false)
  const [inputList, setInputList] = useState([])
  const addInput = event => {
    event.preventDefault()
    const newItem = {id: v4(), inputValue: input}
    setClicked(true)
    setInputList(prevState => [...prevState, newItem])
    setInput('')
  }
  const addText = event => {
    setInput(event.target.value)
  }
  return (
    <MainContainer>
      <InnerContainer>
        <LeftContainer>
          <LeftHeading>Count the characters like a Boss...</LeftHeading>
          {inputList.length === 0 ? (
            <Img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <WordsListContainer>
              {inputList.map(each => (
                <li key={each.id}>
                  <p>
                    {each.inputValue}:{each.inputValue.length}
                  </p>
                </li>
              ))}
            </WordsListContainer>
          )}
        </LeftContainer>
        <RightContainer>
          <RightHeading>Character Counter</RightHeading>
          <form onSubmit={addInput}>
            <InputItem
              type="text"
              id="word"
              value={input}
              placeholder="Enter the Characters here"
              onChange={addText}
            />
            <Button type="submit">Add</Button>
          </form>
        </RightContainer>
      </InnerContainer>
    </MainContainer>
  )
}

export default Home
