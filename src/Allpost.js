import React from 'react';
import {connect} from 'react-redux';
import Post from './post';
import Editcomponent from './Editcomponent';
class Allpost extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>All post</h1>
                {this.props.posts.map((post) =>(
                    <div key={post.id}>
                    {post.editing ? <Editcomponent post={post} key={post.id}/> :
                   <Post key={post.id} post={post}/>}

                    </div>
                        ))}
                    </div>
        )
    }

}
const mapStateToProps =(state) =>{
    return {
        posts:state
    }
}
export default connect(mapStateToProps)(Allpost);