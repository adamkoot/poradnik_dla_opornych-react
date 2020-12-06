import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Start from "./Start";
import BasicOne from "./BasicOne";
import BasicTwo from "./BasicTwo";
class Page extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          value: 0,
      };
  }
  zero = () => {
    this.setState({
        value: 0,
    });
  };
  one = () => {
    this.setState({
        value: 1,
    });
};
two = () => {
  this.setState({
      value: 2,
  });
};
three = () => {
  this.setState({
      value: 3,
  });
};

  render() {
    var global;
      if (this.state.value===0) {
        global = <Content />;
      } else if(this.state.value===1) {
        global = <Start />;
      }else if(this.state.value===2) {
        global = <BasicOne />;
      }else if(this.state.value===3) {
        global = <BasicTwo />;
      }
      return (
          <div className="page">
              
            <Header one={this.one} two={this.two} three={this.three} zero={this.zero}/>
            {global}
            <Footer />
              

              
          </div>
      );
  }
}

export default Page;
