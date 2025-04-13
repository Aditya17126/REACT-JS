import React from 'react'
import { useParams } from 'react-router-dom'

function Params_Comp() {
  const {id} = useParams();

  return (
    <div>
      Params_Comp
      Param:{id}
    </div>
  )
}

export default Params_Comp