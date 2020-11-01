import React from "react"

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
    <SEO title="Welcome" />
    <Entrance />
    <Bio />
    <MyJourney />
    <Projects />
    <AltarokEntrance />
    <Greveyard />
  </Layout>
)

export default IndexPage
