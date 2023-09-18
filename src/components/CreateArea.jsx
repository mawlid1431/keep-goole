import React, { useState } from 'react'

export const CreateArea = () => {
    const [note, setNote] = useState({

        Title: "",
        Content: "",
    });


    function handleChange(e) {
        const   {name,value} =e.target 
        // console.log(e.target.value);
        // checking fisrt console
    }
    return (
        <div>
            <form>

                <input value={note.Title} type='tex' placeholder=' Title ...' name='Title' onChange={handleChange} />
                <p> <textarea value={note.Content} name='Content' placeholder='Take a note ...' onChange={handleChange}>






                </textarea>


                </p>

            </form>
 



        </div>
    )
}
export default CreateArea;