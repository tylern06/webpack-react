import React from "react";
class Life extends React.Component{
    //1st
    constructor(props){
        super(props);
        this.state = {count: 10};
        this.renderOrder = 2;
        console.log("1. This is the constructor method. Always first");
        // If we need to define state, this should always happen in the constructor
    }

    //2nd
    render(){
      console.log(`${this.renderOrder}. This is the render method. Invoked after constructor and before state changes`);
      return (
        <h1>COUNT: {this.state.count}</h1>
      )
    }

    //3rd
    componentDidMount(){
        console.log("3. componentDidMount method. Invoked immediataly after the first render runs.");
        // setTimeout(() => {
        //   this.setState({count: this.state.count - 1})
        // }, 1000)
        this.countDown = setInterval(()=>{
            //State is changed every second, so compenent re-renders accordingly
            this.setState({count: this.state.count - 1})
            console.log('state has changed');
        }, 1000)
        // console.log('this.counter',this.countDown)
    }

    //4th
    componentWillUpdate(nextProps, nextState){
      console.log('nextProps', nextProps)
      console.log('nextState', nextState)
      console.log("4. This runs right before the html is re-rendered, in this case right before state changes")
      if(this.renderOrder == 2){this.renderOrder = 5}
    }
    componentDidUpdate(prevProps, prevState){
      console.log("6. This runs right after the html is re-rendered, in this case right after state changes")
      if(this.state.count <= 0 && prevState.count > 0){
          clearInterval(this.countDown);
          console.log("7. Countdown Finished and state has interval has been stopped");
          // Let's make a mess to be cleaned up by componentWillUnmount
          this.h1 = document.createElement('h1');
          this.h1.innerText = "Making A Mess"
          document.body.appendChild(this.h1)
          // Runs this.props.destroyMethod after 3 seconds
          setTimeout(() => {
              console.log("Invoking this.props.destroyMethod()")
              this.props.destroyMethod();
          }, 3000)
      }
    }
    componentWillUnmount(){
      console.log("7. This runs right before the component is removed from the DOM");
      document.body.removeChild(this.h1)
    }
}
export default Life;
