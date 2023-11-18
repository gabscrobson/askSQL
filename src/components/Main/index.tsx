/* eslint-disable @typescript-eslint/no-empty-function */
import {
  AskButton,
  FormContainer,
  HomeContainer,
  HomeContent,
  LoadingSpinner,
  ResultContainer,
  TrashButton,
} from './styles'
import { Trash, StarFour } from 'phosphor-react'
import { CodeEditor } from '../CodeEditor'
import { useState } from 'react'
import { useCompletion } from 'ai/react'

export function Main() {
  const [schema, setSchema] = useState('')

  const {
    completion,
    setCompletion,
    handleSubmit,
    input,
    handleInputChange,
    setInput,
    isLoading,
  } = useCompletion({
    api: '/api/completion',
    body: {
      schema,
    },
  })

  function handleSchemaChange(code: string) {
    setSchema(code)
  }

  function handleTrashClick() {
    setSchema('')
    setInput('')
    setCompletion('')
  }

  return (
    <HomeContainer>
      <HomeContent>
        <header>
          <img src="/logo.svg" alt="logo" />
          <TrashButton type="button" onClick={handleTrashClick}>
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

          <AskButton type="submit" disabled={isLoading}>
            {isLoading ? <LoadingSpinner size={26} /> : <StarFour size={26} />}
            <span>Ask to artificial intelligence</span>
          </AskButton>
        </FormContainer>

        {completion && (
          <ResultContainer>
            <p>Result</p>
            <CodeEditor value={completion} onChange={() => {}} readonly />
          </ResultContainer>
        )}
      </HomeContent>
    </HomeContainer>
  )
}
