

type InputProps = {
    label: string,
    placeholder: string,
    className: string,
    inputType: 'text' | 'email' | 'password' | 'button' | 'submit'

}

const Input = ({label, placeholder, className, inputType, ...rest} : InputProps) => {
  return (
      <>
          <label className=" mt-4 text-xs font-medium">{label }</label>
          <input type={inputType} className={className} placeholder={placeholder} {...rest} autoFocus={true} />
          
          
      </>
  )
}

export default Input