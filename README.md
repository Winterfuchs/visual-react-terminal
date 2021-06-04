# visual-react-terminal
> First of all: This project was created for experimental and learning purposes, don't expect everything to work, I'll try to fix and improve this project in my free time and whenever I feel like it. So with that said ...

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)

## General Information
A simple terminal emulator which you can implement in your own react-app. It allows you to customize things, like themes and commands.

## Technologies Used
- React - version 16.4.1
- Redux - version 4.0.4

## Features
- Write custom commands with JavaScript
- Customizeable theme

## Setup
Since this project is not published on npm you need to install it directly from this repository.

`npm install git://github.com/"Winterfuchs/visual-react-terminal#master"`

## Usage

```JavaScript
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
```

> Hint: The component won't work without adding a list of commands, the next section will explain how to do that.

### Creating Commands

Create a file which is called 'echo.js', open the editor and write the following example code:

```JavaScript
import { output } from 'visual-react-terminal'

export default class Echo {
  constructor(options) {
    this.name = 'echo';
  };

  run(params) {
    const str = params.join(' ');
    return output.doTextOutput(str);
  };
}
```
Import a list of output types. We're looking at that in a moment.
In the constructor you have to set the name of the command which you will need to call the command later in your terminal with.
The ```run(params)``` method is where you add your code for the command it self.
If you want to return something to the terminal you have to use one of the output methods (this will be customizable in the feature):

```JavaScript
output.doTextOutput(str)      // color: white
output.doErrorOutput(str)     // color: red
output.doPromptOutput(str)    // color: grey and uses the prompt prefix infront of the output
output.doWarningOutput(str)   // color: yellow
output.doInfoOutput(str)      // color green
```

If you're done writing your command you have to register it in a command list which is later used by the Terminal component.

For this you have to create another file which you can name whatever you want but for this example we just call it 'command-list.js':

Import the command and add it to the list just like below.

```JavaScript
import Echo from './echo';

export const cmdList = {
    echo: Echo,
}
```

Add it to the Terminal:

```JavaScript
 import { cmdList } from './commands/command-list'
 
 ...
 
 <Terminal store={store} commands={cmdList}/>
 ```
 
 Done! Try running the application!

### Customizable Themes

If you want to change the theme you can do that by adding an optional parameter ```theme={yourTheme}``` like this:

```JavaScript
<Terminal store={store} commands={cmdList} theme={basic}/>
```

Add the theme just the same way as the commands -> create a JS file with your theme name -> export -> import -> done!

You can look at the basic theme [here](https://github.com/Winterfuchs/visual-react-terminal/blob/master/src/themes/basic.js) on how to create one yourself.
