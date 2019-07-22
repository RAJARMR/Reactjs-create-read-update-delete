import React from 'react';
import {connect} from 'react-redux'
class Editcomponent extends React.Component
{
    handleEdit =(e)=> {
        e.preventDefault();
        const newtitle =this.getTitle.value;
        const newmessage =this.getMessage.value;
        const data =
        {
            newtitle,newmessage
        }
        this.props.dispatch ({type:'UPDATE',id:this.props.post.id,data:data})
        
    }
    render()
    {
        return(
            <div>
                    <form onSubmit={this.handleEdit}>
                    <input type="text" ref={(input) => this.getTitle = input}
                           defaultValue={this.props.post.title} placeholder="Enter Title" /><br /><br />
                    <input type="text"  ref={(input) => this.getMessage = input}
                           defaultValue={this.props.post.message} placeholder="Enter Message" /><br /><br />
                    <button>Update</button>
                    </form>
            </div>
        )
    }
}
export default connect()(Editcomponent);