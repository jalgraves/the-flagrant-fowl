import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom"
import { AboutInfo } from "./content/about/index.js"
import { ContactInfo } from "./content/contact/index.js"
import { Home } from "./content/index.js"

export const locationPath = () => {
  const location = useLocation()
  console.log(location)

  return location.pathname
}

export default function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<AboutInfo/>} />
        <Route path="contact" element={<ContactInfo/>} />
      </Routes>
    </BrowserRouter>
  )
}
