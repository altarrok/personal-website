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
