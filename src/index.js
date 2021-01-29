import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App = () => {
    return (
        <div className = "ui container comments">
           <ApprovalCard>
             <CommentDetail 
                author ="Sam" 
                timeAgo = "Today at 4:45 PM" 
                commentGiven = "Wonderful blog!"
                avatar = {faker.image.image()}
                /> 
            </ApprovalCard>
        <ApprovalCard>
           <CommentDetail 
           author ="Alex"
           timeAgo = "Today at 2:00 AM" 
           commentGiven = "Nice blog post"
           avatar = {faker.image.image()}
           /> 
        </ApprovalCard>
        <ApprovalCard>
           <CommentDetail 
            author ="Jane" 
            timeAgo = "Yesterday at 6:00 PM" 
            commentGiven = "Oops!"
            avatar = {faker.image.image()}
            /> 
        </ApprovalCard>
            
        </div>

    );
};

ReactDom.render(<App/>, document.querySelector('#root')); 