import React from 'react';


class About extends React.Component {
    constructor()
    {
        super();
       /* this.state={
            name:'Ramjas_Maurya',
            age: 26 
        }
        console.warn("constructer")*/
    }
    
    componentDidMount()
    {
    console.warn("props",this.props.name)
}
    componentDidUpdate()
    {
        console.warn("props in update",this.props.name)

    //console.warn("did update")
    //alert("your data is updated")

}

    render() { 
    
   return (<div>
        <h1 >
        About us 
        </h1>
        <h6>
            {this.props.name}
        </h6>
    </div> )
    }
}

export default About;

/*
constructer()
{

}

componentDidMount(){
    
}


componentDidUpdate(){

}

componentWillUnmount(){

}

   </h1>
        <h2>
            {this.state.name}
        </h2>
        <h2>
            {this.state.age}
        </h2>
        <h6>
            this.props.name
        </h6>
     <button onClick={()=>{this.setState({name:'anil_sidhu'})}}> update thid thing</button>
  */