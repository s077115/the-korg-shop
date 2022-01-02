import * as React from 'react'
import { Link } from 'gatsby'
import {container} from './layout.module.css'
import { useStaticQuery, graphql } from 'gatsby'


const Layout = ({ pageTitle, children }) => {

const data = useStaticQuery(graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
}
`)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          
          <li><Link to="/synths/synthesizers">Synths</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout