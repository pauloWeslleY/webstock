import { extendTheme } from "@chakra-ui/react"

export const themes = extendTheme({
   colors: {
      gray: {
         50: '#E5E5E5',
         100: '#364150',
         200: '#2B3643'
      },
      green: {
         100: '#8BCBC5',
         200: '#26A69A',
         300: '#19857B',
      },
      red: {
         100: '#D50000'
      },
      purple: {
         100: '#6A64D9'
      }
   },
   fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Open Sans', sans-serif`,
   }
});
