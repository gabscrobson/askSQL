import styled from 'styled-components'

interface EditorContainerProps {
  readonly readOnly?: boolean
}

export const EditorContainer = styled.div<EditorContainerProps>`
  width: 100%;
  height: ${(props) => (props.readOnly ? 'auto' : '10rem')};
  padding: 1rem;
  border-radius: 6px;
  border: solid 1px ${(props) => props.theme.textAreaBorder};
  background: ${(props) =>
    props.readOnly ? props.theme.blueberry : props.theme.textAreaBackground};
  cursor: auto;
  transition: 0.15s;
  overflow-y: auto;

  &:focus-within {
    outline: none;
    border: ${(props) =>
      props.readOnly
        ? `1px solid ${props.theme.textAreaBorder}`
        : `1px solid ${props.theme.pistachio}`};
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

  .editor {
    width: 100%;
    min-height: 100%;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 1.15rem;
    color: ${(props) => props.theme.foam};
  }
`
