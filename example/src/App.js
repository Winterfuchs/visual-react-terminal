import React, { Component } from 'react'
import { Terminal, store } from 'visual-react-terminal'

export default class App extends Component {
  render () {
    return (
      <div>
        <Terminal store={store}/>
      </div>
    )
  }
}
