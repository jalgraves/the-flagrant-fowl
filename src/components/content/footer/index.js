import React from 'react'
import { ContentSection } from "@jalgraves/react-components-library"
// import { SocialNav } from './social.js'
import { config } from "../../../utils/index.js"
const COLORS = config.colors
const FONTS = config.fonts

export const Footer = () => {
  const year = new Date().getFullYear()
  const gitHash = process.env.GIT_HASH
  const version = process.env.VERSION
  return (
    <ContentSection
      ariaDetails="Footer"
      backgroundColor="transparent"
      borderRadius="4px"
      display="flex"
      flexFlow="column wrap"
      fontFamily={FONTS.footer}
      h2Color={COLORS.black}
      h2FontFamily={FONTS.content}
      h2FontSize="1.5rem"
      h2FontWeight="600"
      h2LetterSpacing=".3rem"
      h2LineHeight="150%"
      h2TextTransform="uppercase"
      h2Margin="auto"
      h2Padding=".5rem"
      h3Padding="1rem"
      h3Margin="auto"
      h3Color={COLORS.white}
      margin="3rem auto 1rem auto"
      maxWidth="80vw"
      outline={`.2rem solid ${COLORS.darkGray}`}
      padding="2rem"
      textAlign="center"
      width="100vw"
    >
      <footer>
        <img src="/images/logos/1x/logo-black-red.png" alt="The Flagrant Fowl" />
        <h2>172 Portland Street</h2>
        <h2>Boston Mass</h2>
        {/*
        <h2>Stay Connected</h2>
        <SocialNav/>
        */}
        <h2>{'© ' + year} The Flagrant Fowl</h2>
        <h3>Commit: {gitHash} Version: {version}</h3>
      </footer>
    </ContentSection>
  )
}
