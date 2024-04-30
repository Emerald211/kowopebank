type ButtonProps = {
    type: 'submit' | 'reset',
    className: string,
    children: string
   
}

const Button = ({ type, className, children, ...rest
}: ButtonProps) => {
  return (
      <button type={type} className={className} {...rest}>{ children}</button>
  )
}

export default Button;