import * as React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import Head from 'next/head'

export const Layout: React.FunctionComponent = props => (
  <div id="layout">
    <Header />
    <main>
      <div>{props.children}</div>
    </main>
    <Footer />
  </div>
)
