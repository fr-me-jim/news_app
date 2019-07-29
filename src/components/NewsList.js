import React from 'react';
import News from './News';

const NewsList = ({news}) => ( 
    <div className="row">
        {news.map(article => (
            <News
                key={article.url}
                news={article}
            />
        ))}

    </div>
);
 
export default NewsList;