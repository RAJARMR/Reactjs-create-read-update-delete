import React from 'react';
import {connect} from 'react-redux';
class Postform extends React.Component
{
    handlesubmit= (e) =>
    {
        e.preventDefault();
        const title=this.getTitle.value;
        const message=this.getMessage.value;
        const id= 1;
        const data ={
            id,title,message,
            editing:false
        }
            this.props.dispatch({
             type:'ADD_POST', data});
             this.getTitle.value='';
             this.getMessage.value='';
    }
   
    render()
    {
        return(
            <div>   <h1>Postform</h1>
                    <form onSubmit={this.handlesubmit}>
                    <input type="text" placeholder="Enter title" ref={(input)=>this.getTitle=input}/> <br /><br />
                        <input type ="text" placeholder="Enter Message" ref={(input)=>this.getMessage=input}/><br /><br />
                    <button>Post</button>
                </form>
                </div>
        )
    }
}
export default connect()(Postform);
