
import React from 'react'



export default function Header(props) {
 let headerStyle={
  position: "fixed"
 }
  return (
  <>
    <div className=" text-bg-primary p-3 fixed-top " style={headerStyle}>Todo list</div>
  </>
  )

}

Header.defaultProps={
    title: "title is here"  //if we are not providing title this default props will assign value to title
}

