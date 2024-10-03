const getCSS = (variavel) => {
    return getComputedStyle(document.body).
    getPropertyValue(variavel)
    }

    import { getCSS } from "./common.js"