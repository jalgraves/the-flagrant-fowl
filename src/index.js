import React from "react"
import { createRoot } from "react-dom/client"
import { MainMenuBar } from "@jalgraves/react-components-library"
import ReactRoutes from "./components/reactRoutes.js"
import { Footer } from "./components/content/footer/index.js"
import { config } from "./utils/main.js"
const PAGES = config.pages
const COLORS = config.colors
const FONTS = config.fonts
const IMG_STYLES = {
  margin: ".5em auto",
  padding: "1em 0",
  maxWidth: "60vw",
  maxHeight: "4rem",
  position: "absolute",
  left: "4rem",
  top: "1rem"
}

const container = document.getElementById("app")
const footerContainer = document.getElementById("footer")
const topBarContainer = document.getElementById("topBar")
const app = createRoot(container)
const footer = createRoot(footerContainer)
const topBar = createRoot(topBarContainer)

const year = new Date().getFullYear()
const slideMenu = {
  backgroundColor: COLORS.backgroundGray,
  border: `.1rem solid ${COLORS.borderGray}`,
  fontColor: COLORS.black,
  fontFamily: FONTS.content,
  footer: {
    text: `${year} Boston Mass`,
    fontFamily: FONTS.content,
    fontColor: COLORS.black,
    fontSize: "1.5rem",
    fontWeight: "900",
    textTransform: "uppercase"
  },

  linkList: {
    borderRadius: "4px",
    fontFamily: FONTS.content,
    fontColor: COLORS.black,
    fontSize: "1.5rem",
    fontWeight: "900",
    outline: `1px solid ${COLORS.black}`,
    margin: "2rem auto",
    pages: PAGES,
    position: "relative",
    hoverColor: COLORS.dodgerBlue,
    width: "100%",
    iconStyle: {
      color: COLORS.dodgerBlue,
      fontSize: "1em"
    }
  },
  header: {
    fontFamily: FONTS.content,
    imgSource: `${config.urls.static}/img/logos/1x/logo-white-yellow.png`
  }
}

topBar.render(
  <MainMenuBar
    pages={PAGES}
    fontColor={COLORS.black}
    fontFamily={FONTS.content}
    barColor={COLORS.white}
    hamburgerBackground={COLORS.dodgerBlue}
    hoverColor={COLORS.dodgerBlue}
    navBarLogoImgStyles={IMG_STYLES}
    mainMenuBarBorderBottom="1px solid black"
    slideMenu={slideMenu}
    mainMenuBarImgSource={`${config.urls.static}/img/logos/1x/logo-white-yellow.png`}
    mainMenuBarBoxShadow={`2px 2px 6px ${COLORS.darkGray}`}
  />
)

if (app) {
  app.render(
    <ReactRoutes/>
  )
}

footer.render(
  <Footer/>
)
