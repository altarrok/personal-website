import React from "react"
import Card from "../components/card"
import Container from "../components/container"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <div style={{backgroundColor: "grey"}}>
    <SEO title="404: Not found" />
    <Container>
      <Card
        title={"404 Not Found"}
        subContent={<p>The page you are looking for does not exist. <a href="https://www.altaybatuhan.com"> Go back to altaybatuhan.com</a></p>}
      />
    </Container>
  </div>
)

export default NotFoundPage
