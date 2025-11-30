
function useTraverseTree() {
  function insertNode(tree,  folderId , item , isFolder ){
    if(tree.id === folderId && tree.isFolder){
      tree.items && tree.items.unshift({
        id: new Date().getTime(),
        name: item ,
        isFolder ,
        item : []
      })
      return tree;
    }
  
    let latestNode = []
   latestNode = tree.items && tree.items.map((ob)=>{
       return insertNode(ob , folderId , item , isFolder);
    });

    return {...tree , items :latestNode}
  }

  return {insertNode};

}

export default useTraverseTree