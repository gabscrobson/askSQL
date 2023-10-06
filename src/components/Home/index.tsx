import {
  AskButton,
  FormContainer,
  HomeContainer,
  HomeContent,
  ResultContainer,
  TrashButton,
} from './styles'
import { Trash, StarFour } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <header>
          <img src="/logo.svg" alt="logo" />
          <TrashButton type="button">
            <Trash size={30} />
          </TrashButton>
        </header>

        <FormContainer>
          <label htmlFor="schema">Paste your SQL code here</label>
          <textarea name="schema" id="schema" placeholder="CREATE TABLE ..." />

          <label htmlFor="question">Ask a question to the code</label>
          <textarea name="question" id="question" placeholder="" />

          <AskButton type="submit">
            <StarFour size={26} />
            <span>Ask to artificial intelligence</span>
          </AskButton>
        </FormContainer>

        <ResultContainer>
          <p>Result</p>
          <textarea value={'resultadoooooo'} readOnly />
        </ResultContainer>
      </HomeContent>
    </HomeContainer>
  )
}
