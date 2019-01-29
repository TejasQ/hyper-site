import React from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import Hyper3 from '../components/posts/hyper-3.mdx'

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <Head>
          <title>Hyper Blog</title>
        </Head>
        <div className="container">
          <div className="blog-content">
            <Hyper3 />
          </div>
        </div>
        <style jsx>
          {`
            .container {
              display: flex;
              justify-content: center;
              width: 100%;
              position: relative;
              max-width: 650px;
            }
            .blog-content {
              max-width: 650px;
              width: 100%;
            }
            .blog-content :global(h1) {
              text-align: center;
              margin: 64px auto 32px;
              font-size: 3em;
              line-height: 1;
            }
            .blog-content :global(h3) {
              margin: 32px 0 16px;
            }
            .blog-content :global(.date) {
              text-align: center;
              color: #737373;
              font-size: 0.9em;
            }
            .blog-content :global(img) {
              max-width: 100%;
            }
            .blog-content :global(p) {
              font-size: 14px;
              line-height: 24px;
              margin: 0 0 20px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                'Droid Sans', 'Helvetica Neue', sans-serif;
            }
          `}
        </style>
      </Layout>
    )
  }
}

export default withRouter(Blog)
