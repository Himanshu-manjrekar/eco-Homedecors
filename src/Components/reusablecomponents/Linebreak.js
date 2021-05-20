import React, { useState } from 'react';


const Linebreak = ({ img, paint }) => {

    const [color] = useState(true)
    return (
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center"
                style={{ backgroundColor: color ? paint : "#fff" }}
            >
                <img src={img} alt="" className="img-fluid" style={{
                    padding: "1rem"
                }} />
            </div>
        </>
    )
}

export default Linebreak
