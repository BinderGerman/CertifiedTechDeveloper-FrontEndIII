import React from "react";

const Article = (props) => {
    return (
        <div>
            <h1>Article</h1>
            <div> { props.params.titleId } </div>
        </div>
    )
}

export default Article;