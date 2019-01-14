import  React from 'react';

export default  (props) =>{
    const {appTitle , address , year} = props;
    return(
        <div>
            <hr />
            <p> Copyrights@{year} ,  {appTitle} </p>
            <p> {address.city} , {address.state} </p>

        </div>
    )
}