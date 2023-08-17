import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Home } from './components/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}
