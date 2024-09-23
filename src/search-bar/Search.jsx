import Style from "./Search.module.css"
function Search () {
  return (
    <>
      <div className={`${Style.inputContainer}`}>
        <input type="text" placeholder="Search Food Item"  />
      </div>
    </>
  )
}

export default Search

