import React from "react";
import faker from "faker"
const Smurf = props => {
  return (
    <div >
      <div class="ui cards " >
      <div class="card" style={{display:"block", margin:"0 auto",backgroundColor :"#d3eadb",marginBottom :"3%",boxShadow:"2px 3px blue"}}>
        <div class="content">
          <img class="right floated mini ui image" src={faker.image.avatar()} />
          <div class="header">
           Name : {props.name}
          </div>
          <div class="meta">
            Height : {props.height}
          </div>
          <div class="description">
           {props.age} smurf Years
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <div class="ui basic green button"  onClick={e => props.deleteSmurf(props.id)} >Delete</div>
            <div class="ui basic red button"  onClick={() => props.updateSmurf(props.id, this.state)}>Update</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Smurf;