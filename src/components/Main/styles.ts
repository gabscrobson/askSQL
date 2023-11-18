import { Spinner } from 'phosphor-react'
import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  max-width: 1100px;
  padding: 2rem 0 4rem 0;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const TrashButton = styled.button`
  border: 0;
  color: ${(props) => props.theme.white};
  background: none;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    color: ${(props) => props.theme.red};
  }
`

export const FormContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: ${(props) => props.theme.foam};
  font-size: 1.5rem;
  line-height: 1.75rem;

  label {
    margin: 3rem 0 1.5rem 0;
  }

  textarea {
    width: 100%;
    height: 6rem;
    padding: 1rem;
    border-radius: 6px;
    border: solid 1px ${(props) => props.theme.textAreaBorder};
    background: ${(props) => props.theme.textAreaBackground};
    color: ${(props) => props.theme.foam};
    resize: none;
    overflow-y: auto;
    cursor: auto;
    transition: 0.15s;

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.pistachio};
    }

    &::-webkit-scrollbar {
      width: 15px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.4);
      border-top: 10px ${(props) => props.theme.textAreaBackground} solid;
      border-bottom: 10px ${(props) => props.theme.textAreaBackground} solid;
      border-right: 10px ${(props) => props.theme.textAreaBackground} solid;
      background-clip: padding-box;
      border-radius: 0 5px 5px 0;

      &:hover {
        background: rgba(255, 255, 255, 0.6);
      }
    }
  }
`

export const AskButton = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: solid 1px ${(props) => props.theme.pistachio};
  background: none;
  color: ${(props) => props.theme.pistachio};
  font-weight: 600;
  transition: 0.15s;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${(props) => props.theme.pistachio};
    color: ${(props) => props.theme.blueberry};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const LoadingSpinner = styled(Spinner)`
  animation: spin 4s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`

export const ResultContainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  color: ${(props) => props.theme.foam};
  font-size: 1.5rem;
  line-height: 1.75rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`
