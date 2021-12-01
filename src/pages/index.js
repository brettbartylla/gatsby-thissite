import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import resume from '../downloads/Brett_Bartylla_Resume.pdf' 


//data pulls in query "data" from below
const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />

    <div className="Grid--landing">
      <div>
      <ul className="u-textCenter">
          <li>
            <Link 
              to="https://github.com/brettbartylla" 
              target="_blank"
            >
              <h1>
                Github
              </h1>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/brett-bartylla/" 
              target="_blank"
            >
              <h1>
                LinkedIn
              </h1>
            </Link>
          </li>
          <li>
            <a 
              href={resume}
              target="_blank"
            >
              <h1>
                Resume
              </h1>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage


//image queries
// export const query = graphql`
//   query {
//     cardGatsbyImage: file(relativePath: {eq: "cards.png"}) {
//       childImageSharp {
//         fluid(maxWidth: 2000) {
//         ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   },
// `