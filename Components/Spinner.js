import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="overlay-loader"><TailSpin
            height="150"
            width="150"
            color="#837BD1"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
        /></div>
    );
};

export default Spinner;