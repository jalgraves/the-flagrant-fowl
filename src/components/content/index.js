import React from "react"
import { config } from "../../utils/index.js"
import { ContentSection } from "@jalgraves/react-components-library"
import { HeroHeader } from "./heroHeader/index.js"
const COLORS = config.colors
const FONTS = config.fonts

export const ContentContainer = (props) => {
  return (
    <ContentSection
      aColor={props.aColor}
      aFontFamily={FONTS.headline}
      aFontSize="1.75rem"
      aFontWeight="600"
      backgroundColor={props.backgroundColor}
      borderTop={props.borderTop}
      display="flex"
      flexFlow="column wrap"
      fontColor={COLORS.white}
      fontFamily={FONTS.content}
      h1Color={props.h1Color || COLORS.white}
      h1FontFamily={FONTS.title}
      h1FontSize="2.75rem"
      h1FontWeight="bold"
      h1LineHeight="150%"
      h2FontFamily={FONTS.content}
      h2FontSize="2rem"
      h2LineHeight="150%"
      h3Color={COLORS.hubPubBlue}
      h3FontFamily={FONTS.headline}
      h3FontSize="1.75rem"
      h3FontWeight="bold"
      h3LetterSpacing=".3rem"
      h3LineHeight="150%"
      h3TextTransform="uppercase"
      h4FontFamily={FONTS.content}
      h4FontSize="1.75rem"
      h4LineHeight="175%"
      h4Padding=".5rem 0"
      h5Color={COLORS.hubPubBlue}
      h5FontFamily={FONTS.headline}
      h5FontSize="2rem"
      h5FontWeight="bold"
      h5LetterSpacing=".5rem"
      h5LineHeight="150%"
      h5Padding=".5rem 0"
      h5TextTransform="uppercase"
      lineHeight="150%"
      padding="5%"
      pColor={props.pColor || COLORS.white}
      pFontSize="150%"
      pLineHeight="150%"
      pMaxWidth="900px"
      sectionMargin={props.sectionMargin || "auto"}
      width="100%"
    >
      {props.children}
    </ContentSection>
  )
}

export const Home = () => {
  return (
    <ContentSection display="flex" flexFlow="column wrap">
      <HeroHeader background={COLORS.dodgerBlue} />
    </ContentSection>
  )
}
