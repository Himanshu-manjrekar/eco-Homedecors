import React from 'react';


const Linebreak = ({img}) => {
    return (
        <>
          <div className="container-fluid">
          <img src={img} alt="" className="img-fluid" style={{
              padding: "1rem"
          }}/>  
          </div>
        </>
    )
}

export default Linebreak
