import React from 'react'
import Main from 'src/components/tamplates/Main'
import Sidebar from 'src/components/tamplates/Sidebar'

const style = {
  display : "flex"
}
function HomePage() {
  return (
    <div style={style}>
    <Sidebar/>
    <Main/>
    </div>
  )
}

export default HomePage