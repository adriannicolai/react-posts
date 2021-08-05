import React from 'react';
import ReactDOM from 'react-dom';
import PostDetail from "./PostDetail"

const App = () => {
    return (
        <div className="ui container comments">
            <PostDetail
                name="Oliver"
                message="Hello!"   
                time="1AM" 
            />
            <PostDetail 
                name="Myca"
                message="Hello there!"
                time="7PM"
            />
            <PostDetail 
                name="Paul"
                message="Hola!"    
                time="3PM"
            />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);