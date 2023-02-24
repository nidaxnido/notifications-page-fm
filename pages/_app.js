import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors:{
    brand:{
      red: "hsl(1, 90%, 64%)",
      blue: "hsl(219, 85%, 26%)",
      paleGreyBlue : "hsl(210, 60%, 98%)",
      lightGreyBlue1 : "hsl(211, 68%, 94%)",
      lightGreyBlue2: "hsl(205, 33%, 90%)",
      greyBlue : "hsl(219, 14%, 63%)",
      darkGreyBlue : "hsl(219, 12%, 42%)",
      darkBlue : "hsl(224, 21%, 14%)"
     }
  },
  breakpoints:{
    sm:"376px"
  }
}) 
export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
    </ChakraProvider>
}
