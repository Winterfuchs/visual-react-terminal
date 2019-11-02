const basic = {
  terminal: {
    flex: 1,
    margin: '20px',
  },
  console: {
    minHeight: '300px',
    maxHeight: '100%',
    maxWidth: '100%',
    cursor: 'text',
    overflow: 'auto',
    background: '0% 0% / cover rgb(33,33,33)',
    borderRadius: '5px',
  },
  content: {
    fontFamily: 'Inconsolata, monospace',
    padding: '20px',
    height: '100%',
    fontSize: '15px',
    color: 'rgb(255, 255, 255)',
  },
  inputArea: {
    width: '100%',
    display: 'inline-flex'
  },
  prompt: {
    marginTop: '4px',
    color: 'rgb(255, 170, 60)',
  },
  input: {
    fontFamily: 'Inconsolata, monospace',
    border: '0px',
    padding: '0px 0px 0px 7px',
    margin: '0px',
    flexGrow: '100',
    width: '100%',
    height: '22px',
    background: 'transparent',
    fontSize: '15px',
    color: 'rgb(255, 200, 60)',
    outline: 'none',
  }
}

export default basic
