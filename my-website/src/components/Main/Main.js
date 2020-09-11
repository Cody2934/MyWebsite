import React, { Component } from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Project from '../Project/Project'
import Footer from '../Footer/Footer'

export default class Main extends Component {
  render() {
    return (
      <>
        <p>UI Component Library: material ui  </p>
        <p>single UI Components: custom scrollbars, dropdown, awesome button, responsive carosel, grid gallery, </p>
        <Header />
        <About />
        <Project />
        <Footer />
      </>
    )
  }
}