import Editor from 'react-simple-code-editor'

import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-sql'
import 'prismjs/themes/prism-okaidia.min.css'
import { EditorContainer } from './styles'

interface CodeEditorProps {
  value: string
  onChange: (code: string) => void
  placeholder?: string
  readonly?: boolean
  name?: string
}

export function CodeEditor({
  value,
  onChange,
  placeholder = '',
  readonly = false,
  name = '',
}: CodeEditorProps) {
  const editorClassName = 'editor' + (readonly ? ' result' : '')

  return (
    <EditorContainer readOnly={readonly}>
      <Editor
        value={value}
        onValueChange={(value) => onChange(value)}
        highlight={(value) => highlight(value, languages.sql, 'sql')}
        placeholder={placeholder}
        textareaId={name}
        name={name}
        className={editorClassName}
        readOnly={readonly}
      />
    </EditorContainer>
  )
}
