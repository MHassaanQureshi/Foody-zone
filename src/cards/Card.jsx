import Style from "./Cards.module.css"
function Card({text,price ,url}) {
  return (
    <>
    <div className={Style.CardContainer}>
        <div className={Style.UpperContainer}>
            <img src={url}alt="" />
            <div className={Style.innerContainer}>
                <p>{text}</p>
                <button>{price}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card