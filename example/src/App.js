import React, { Component } from 'react'
import { Terminal, store } from 'visual-react-terminal'

import { cmdList } from './commands/command-list'

export default class App extends Component {
  render () {
    return (
      <div>
        <Terminal store={store} commands={cmdList}/>
      </div>
    )
  }
}
