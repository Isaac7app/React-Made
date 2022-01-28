const Button = ({color,text}) => {
  
  const onClick = () =>{
      console.log('click');
  }  


  return ( 
  <button
  onClick={onClick} 
  style={{ backgroundColor: color }} 
   className='btn'>
   {text}
  </button>
  )
}

Button.defaultProps = {
    color: 'stealblue',
}

export default Button;
