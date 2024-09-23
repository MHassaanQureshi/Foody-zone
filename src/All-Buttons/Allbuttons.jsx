import Button from "../buttons/Button"
import Style from "./All.module.css"
function Allbuttons() {
  return (
    <div className={`${Style.Buttoncontainer}`}>
        <Button text="All" />
        <Button text="Breakfast" />
        <Button text="Lunch" />
        <Button text="Dinner" />
    </div>
  )
}

export default Allbuttons