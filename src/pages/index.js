import React from "react"
import {Link} from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"



import { Carousel, Button } from "react-bootstrap"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />


    <Carousel>
      <Carousel.Item>
       
      </Carousel.Item>

      <Carousel.Item>
     
      </Carousel.Item>

      <Carousel.Item>
      
      </Carousel.Item>

<br></br>
<br></br>
<br></br>
<br></br>
<Button variant="outline-dark" href="https://www.google.com/?&bih=452&biw=320&prmd=niv&hl=pt-BR"> teste </Button>
      
<Button variant="outline-success"></Button>

<Link to="/page-2/" style={{color:"red"}}>Go to page 2</Link>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Carousel>
  </Layout>
)

export default IndexPage
