import React from "react";

const style = {
    width : "60%",
    padding:"0.5%",
    marginTop:"1%",
    borderRadius : "4%"
}

class Form extends React.Component {
  state = {
    name: "",
    height: "",
    age: ""
  };


  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSmurf = smurf => {
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      age: ""
    });
  };

  render() {
    return (
       
      <form  style={{display:"flex", width:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

      
        <input  style={style}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
          placeholder="Enter Name"
        />
        <input style={style}
          type="text"
          name="height"
          value={this.state.height}
          onChange={this.onChange}
          placeholder="Enter Height"
        />
        <input style={style}
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.onChange}
          placeholder="Enter Age"
        />
        <input style={style}
          type="button"
          value="Add Smurf"
          onClick={() => this.props.addSmurf(this.state)}
        />
      </form>



    );
  }
}

export default Form;