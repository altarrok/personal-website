import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Entrance from "../views/entrance"
import Bio from "../views/bio"
import MyJourney from "../views/myJourney"
import Projects from "../views/projects"
import AltarokEntrance from "../views/altarokEntranceFromIndex"
import Greveyard from "../views/greveyard"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
    </Helmet>
    <SEO title="Home" />
    <Entrance />
    <Bio />
    <MyJourney />
    <Projects />
    <AltarokEntrance />
    <Greveyard />
  </Layout>
)

export default IndexPage
