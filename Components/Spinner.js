import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="overlay-loader"><TailSpin
            height="150"
            width="150"
            color="#C5B358"
            ariaLabel="tail-spin-loading"
            radius="2"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
        /></div>
    );
};

export default Spinner;