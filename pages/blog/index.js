import React from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import Contributors from '../../components/Contributors'
import Caption from '../../components/Caption'
import BlogLayout from '../../components/BlogLayout'

const Blog = ({ posts }) => (
  <BlogLayout>
    <Head>
      <title>Hyper Blog</title>
    </Head>
    {posts.map(({ title, permalink, date, contributors, lede }) => (
      <Link
        key={permalink}
        href={permalink}
        style={{
          borderBottom: '1px solid #333',
          textDecoration: 'none',
          color: 'white'
        }}
      >
        <div className="post">
          <h2>{title}</h2>
          <Caption left>
            {new Date(date).toLocaleString('en-US', {
              timeZone: 'Europe/Berlin',
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            })}
          </Caption>
          <Contributors compact people={contributors} />
          <p>{lede}</p>
        </div>
      </Link>
    ))}
    <style jsx>
      {`
        .post {
          cursor: pointer;
        }
        .post + .post {
          margin-top: 32px;
          border-top: 1px solid #333;
          padding-top: 16px;
        }
        h2 {
          font-size: 2em;
          margin: 16px 0;
        }
      `}
    </style>
  </BlogLayout>
)

Blog.getInitialProps = async ({ req }) => {
  const postResponse = await fetch(
    'https://onecamp-hyper.now.sh/api/blog-posts'
  )
  const posts = await postResponse.json()

  return { posts }
}

export default withRouter(Blog)
