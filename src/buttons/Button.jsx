import Style from "./Button.module.css"

function Button({text}) {
  return (
   <>
   <button className={`${Style.button}`}>{text}</button>
   </>
  )
}

export default Button