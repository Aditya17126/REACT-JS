import React, { useState } from 'react'
import explorer from './folderData'
import Folder from './Folder'
import './fileExplorer.css'
import useTraverseTree from './Hooks/useTraverseTree'

function FileExplorer() {
  const [explorerData, setExplorerData] = useState(explorer)
   
   const {insertNode} = useTraverseTree();

  const handleInsertNode = (folderId , item ,isFolder)=>{
    const finalTree = insertNode(explorerData , folderId , item , isFolder)
  }
  return (
    <div className='fileExplorerContainer'>
       <h1>File Explorer</h1>

       <Folder handleInsertNode={handleInsertNode}  explorer = {explorerData} />
       
    </div>
  )
}

export default FileExplorer