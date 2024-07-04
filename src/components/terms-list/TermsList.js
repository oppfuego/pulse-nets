import React from 'react';

const TermsList = ({ data, definitionsTitle }) => {
    return (
        <div className="definitions-list">
            <h1 className="definitions">
                <p className="definitions1">
                    {definitionsTitle}
                </p>
            </h1>
            <div className="provisions-list">
                {data.map((item, index) => (
                    <div key={index} className="provisions-items">
                        <h3 className={item.titleClass}>{item.title}</h3>
                        <div className={item.textClass}>
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TermsList;