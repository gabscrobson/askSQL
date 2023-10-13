import {
  AskButton,
  FormContainer,
  HomeContainer,
  HomeContent,
  ResultContainer,
  TrashButton,
} from './styles'
import { Trash, StarFour } from 'phosphor-react'
import { CodeEditor } from '../CodeEditor'
import { useState } from 'react'

export function Home() {
  const [code, setCode] = useState('')
  const [question, setQuestion] = useState('')
  const [result, setResult] = useState('')

  function handleCodeChange(code: string) {
    setCode(code)
    setResult('')
  }

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
          <CodeEditor
            value={code}
            onChange={handleCodeChange}
            placeholder="CREATE TABLE ..."
            name="schema"
          />

          <label htmlFor="question">Ask a question to the code</label>
          <textarea
            name="question"
            id="question"
            placeholder="Select all users with more than 25 years old"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <AskButton type="submit">
            <StarFour size={26} />
            <span>Ask to artificial intelligence</span>
          </AskButton>
        </FormContainer>

        {result && (
          <ResultContainer>
            <p>Result</p>
            <CodeEditor value={result} onChange={() => {}} readonly />
          </ResultContainer>
        )}
      </HomeContent>
    </HomeContainer>
  )
}
