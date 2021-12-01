import * as React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/layout"
import Helmet from "react-helmet"
import Seo from "../components/seo"

import resume from '../downloads/Brett_Bartylla_Resume.pdf' 
import track from '../media/Believe.mp3' 


//data pulls in query "data" from below
const IndexPage = ({data}) => (
  <Layout>
    <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
    </Helmet>
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
      <audio controls id="player">
        <source src={track} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </Layout>
)

export default IndexPage