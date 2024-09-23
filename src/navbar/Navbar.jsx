import Allbuttons from "../All-Buttons/Allbuttons"
import Search from "../search-bar/Search"
import Style from "./Navbar.module.css"
function Navbar() {
  return (
    <div className={`${Style.NavContainer}`}>
      <div className={`${Style.navTop}`}>
      <h1 className={`${Style.logo}`}>F<span>oo</span>dy Z<span>o</span>ne</h1>
      <Search />
      </div>
       <Allbuttons />
    </div>
  )
}

export default Navbar