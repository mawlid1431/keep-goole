import React from 'react'

const Note = ( {Title ,Content,onDelete,id}) => {
    return (
        <div className='Note'>
            <h1>   {Title} </h1>
            <p>{Content}</p>
            <button  onClick={ ()=> onDelete (id)}  >Delete </button>
        </div>
    )
}

export default Note