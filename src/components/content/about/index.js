import React from "react"
import { ContentSection } from "@jalgraves/react-components-library"
import { ContentContainer } from "../index.js"
import { config } from "../../../utils/index.js"

const COLORS = config.colors

const faq = () => {
  return (
    <ContentContainer backgroundColor={COLORS.darkGray} pColor={COLORS.yellow}>
      <h3>Frequently Asked Questions</h3>
    </ContentContainer>
  )
}

export const AboutInfo = () => {
  return (
    <ContentSection display="flex" flexFlow="column wrap">
      <ContentContainer
        backgroundColor={COLORS.backgroundGray}
        h1Color={COLORS.black}
        pColor={COLORS.black}
        sectionMargin="3.25rem auto"
      >
        <section>
          <h1>About</h1>
          <article>
          <p></p>
          </article>
        </section>
      </ContentContainer>
        {faq()}
    </ContentSection>
  )
}
