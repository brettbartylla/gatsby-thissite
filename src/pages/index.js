import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


//data pulls in query "data" from below
const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />

    <div className="Grid--landing">
      <div>
      <ul className="u-textCenter">
          <li>
            <Link 
              to="/hello/" 
              target="_blank"
            >
              <h1>
                ENTER
              </h1>
            </Link>
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