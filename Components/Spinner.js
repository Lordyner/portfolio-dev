import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="overlay-loader"><TailSpin
            height="200"
            width="200"
            color="#6E07F3"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
        /></div>
    );
};

export default Spinner;