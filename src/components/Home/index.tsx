import {
  AskButton,
  FormContainer,
  HomeContainer,
  HomeContent,
  TrashButton,
} from './styles'
import { Trash, StarFour } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <header>
          <img src="/src/assets/logo.svg" alt="logo" />
          <TrashButton type="button">
            <Trash size={30} />
          </TrashButton>
        </header>

        <FormContainer>
          <label htmlFor="schema">Paste your SQL code here</label>
          <textarea name="schema" id="schema" placeholder="CREATE TABLE ..." />

          <label htmlFor="schema">Ask a question to the code</label>
          <textarea name="schema" id="schema" placeholder="CREATE TABLE ..." />

          <AskButton type="submit">
            <StarFour size={30} />
            <span>Ask to artificial intelligence</span>
          </AskButton>
        </FormContainer>
      </HomeContent>
    </HomeContainer>
  )
}
