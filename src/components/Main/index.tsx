/* eslint-disable @typescript-eslint/no-empty-function */
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
import { useCompletion } from 'ai/react'
import Image from 'next/image'

export function Main() {
  const [schema, setSchema] = useState('')

  const { completion, handleSubmit, input, handleInputChange } = useCompletion({
    api: '/api/completion',
    body: {
      schema,
    },
  })

  const result = completion

  function handleSchemaChange(code: string) {
    setSchema(code)
  }

  return (
    <HomeContainer>
      <HomeContent>
        <header>
          <Image src="/logo.svg" alt="logo" />
          <TrashButton type="button">
            <Trash size={30} />
          </TrashButton>
        </header>

        <FormContainer onSubmit={handleSubmit}>
          <label htmlFor="schema">Paste your SQL code here</label>
          <CodeEditor
            value={schema}
            onChange={handleSchemaChange}
            placeholder="CREATE TABLE ..."
            name="schema"
          />

          <label htmlFor="question">Ask a question to the code</label>
          <textarea
            name="question"
            id="question"
            placeholder="Select all users with more than 25 years old"
            value={input}
            onChange={handleInputChange}
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
