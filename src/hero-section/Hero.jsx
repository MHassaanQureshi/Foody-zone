import Card from "../cards/Card";
import Style from "./Hero.module.css"
function Hero() {
  return (
    <>
      <div className={Style.HeroContainer}>
        <div className={Style.overlay}></div>
        <div className={Style.products}>
          <div className={Style.cards}>
            <div className={Style.cards1}>
            <Card text="A perfectly boiled egg, with a soft or firm yolk encased in a tender, white shell. Ideal for breakfast, snacks, or as an ingredient in various dishes. Enjoy it sliced, halved, or whole for a protein-packed treat." price="10.00$" url="public/image/Ellipse 1.png"/>
            <Card text="Delicious ramen noodles served in a flavorful broth, topped with fresh vegetables, tender meat, and a perfectly boiled egg. A comforting and satisfying meal, bursting with savory umami in every bite." price="25.00$" url="public/image/Ellipse 1 (1).png"/>
            <Card text="Juicy grilled chicken, seasoned to perfection and cooked over an open flame. Tender, flavorful, and packed with smoky goodness, it’s a healthy and satisfying option for any meal." price="45.00$" url="public/image/Ellipse 1 (2).png"/>
            </div>
            <div className={Style.cards1}>
            <Card text="A moist and fluffy cake, layered with rich frosting and bursting with sweet flavors. Perfect for celebrations or a delightful treat, offering a slice of indulgence in every bite." price="18.00$" url="public/image/Ellipse 1 (3).png"/>
            <Card text="A hearty burger with a juicy patty, topped with fresh lettuce, ripe tomatoes, pickles, and creamy sauce, all nestled in a soft, toasted bun. A deliciously satisfying meal that’s perfect for any occasion." price="23.00$" url="public/image/Ellipse 1 (4).png"/>
            <Card text="Fluffy pancakes stacked high, drizzled with maple syrup and topped with fresh fruits or whipped cream. A classic breakfast favorite that’s light, airy, and indulgent with every bite." price="25.00$" url="public/image/Ellipse 1 (5).png"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default Hero;