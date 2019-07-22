import React from 'react';
import { connect } from 'react-redux';
class Post extends React.Component
{
    render()
    {
        return(
            <div>
                title:{this.props.post.title}
            <br></br>
                message:{this.props.post.message}
                <p></p>
                <br></br>
                <button
                onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
                EDIT </button>
                <button
                onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
                DELETE</button>
            </div>
            
        )
    }
}
export default connect()(Post);