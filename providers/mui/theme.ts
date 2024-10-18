"use client"
import {Urbanist} from "next/font/google"
import {createTheme} from "@mui/material";
const urbanist = Urbanist({
    weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
})

const theme = createTheme({
    palette: {},
    typography: {
        fontFamily: urbanist.style.fontFamily
    }
})

export default theme