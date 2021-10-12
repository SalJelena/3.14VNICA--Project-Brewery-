import { createGlobalStyle } from "styled-components";


import fontNew from './Anton-Regular.woff'

export default createGlobalStyle`
    @font-face {
        font-family: 'Anton';
        font-style: sans-serif;
        src: url(${fontNew}) format('woff')
    }
`
