import React from 'react';
import notFound from '../../images/404.jpg'

const NotFoundPage = () => {
    return (
        <div>
            <img src={notFound} alt="" style={{ width: "100%" }} />
        </div>
    );
};

export default NotFoundPage;