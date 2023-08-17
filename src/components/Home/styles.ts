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

  height: 100%;
  width: 90%;
  max-width: 1100px;
  padding: 2rem 0;

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
  transition: 0.1s;

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
  font-size: 1.6rem;
  line-height: 1.75rem;

  label {
    margin: 3rem 0 1.5rem 0;
  }

  textarea {
    width: 100%;
    height: 10rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: solid 1px ${(props) => props.theme.textAreaBorder};
    background: ${(props) => props.theme.textAreaBackground};
    color: ${(props) => props.theme.white};
    resize: none;
    overflow-y: auto;
  }
`

// pistache button with transparent background
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

  &:hover {
    background: ${(props) => props.theme.pistachio};
    color: ${(props) => props.theme.blueberry};
  }
`
