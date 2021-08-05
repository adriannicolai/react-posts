import React from 'react';
import faker from 'faker';

const PostDetail = (props) =>{
    return (
        <div classname="comment">
            <a href="/" classname="avatar">
                <img src={faker.image.avatar()} alt="avatar" />
            </a>
            <div classname="content">
                <a href="/" classname="author">{props.name}</a>
                <div classname="metadata">
                    <span classname="date">Today at {props.time}</span>
                </div>
                <div classname="text">{ props.message }</div>
            </div>
        </div>
    );
}

export default PostDetail;