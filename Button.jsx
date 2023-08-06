function Button({text, color, bg, fs}) {
  const buttonStyle = {
    color : color,
    backgroundColor : bg,
    fontSize: fs + 'px',
    borderRadius : 5,
    border : 0,
    padding : 5
  }

  return (
    <button style={buttonStyle}>{text}</button>
  )
}

Button.defaultProps = {
  text : "Click",
  color : 'white',
  bg: 'black',
  fs : 20,
}


function App() {
  return (
    <div>
      <Button text='Click Me!' color='red'/>
      <Button text='Don"t Click Me!' color='blue'/>
      <Button text='HELLO!' bg='black' color='white'/>
    </div>

  )
}
