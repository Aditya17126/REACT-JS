import React from 'react'
import MenuList from './MenuList'
import './treeView.css'

function TreeView({menus = []}) {
  return (
    <div className='treeViewContainer '>
      <h1>TREE VIEW</h1>
      <MenuList list={menus}/>
    </div>
  )
}

export default TreeView