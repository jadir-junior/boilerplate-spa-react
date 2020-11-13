import theme from '../src/styles/theme'
import {} from 'styled-components'

// inferência de tipos
type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
