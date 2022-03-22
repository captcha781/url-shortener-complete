import React, { Component } from "react";
import Aux from "../../hoc/aux";
import Navigation from "../../components/Navigation/Navigation";
import "./shrink.css";
import axios from "axios";

class Shrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainurl: "",
      shorturl: "",
      success: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    mainurl: "",
    shorturl: "",
    success: false,
  };

  handleInput(event) {
    this.setState({ mainurl: event.target.value });
  }

  handleSubmit(event) {
    let url = this.state.mainurl;
    axios
      .post("http://localhost:5000/post/", { url: url })
      .then((response) => {
        this.setState({
          shorturl: response.data.urlnew,
          success: response.data.success,
        });
      })
      .then((error) => {
        console.log(error);
      });

    event.preventDefault();
    // console.log(this.state);
  }

  render() {
    return (
      <Aux>
        <Navigation />
        <main>
          <div className="w-50 mx-auto rounded-4 shadow p-5 mt-5">
            <form className="" action="" method="POST">
              <div>
                <label htmlFor="mainurl" className="ml125">
                  Enter the URL Here
                </label>
                <input
                  className="form-control rounded-2 w-75 mx-auto"
                  type="url"
                  placeholder="https://website.com/abcdefghi"
                  value={this.state.value}
                  onChange={this.handleInput}
                  name="mainurl"
                  id="mainurl"
                />
                <br></br>
                <input
                  type="submit"
                  id="submit"
                  className="btn btn-primary mr125"
                  value="Submit"
                  onClick={this.handleSubmit}
                />
              </div>
            </form>
          </div>
          {this.state.success ? 
            <div className="w-50 mx-auto rounded-4 shadow p-5 mt-5">
              <div className="w-100">
              <p className="fs-5">The New Short URL is : </p>
              </div>
              <div className="w-50 mx-auto">
              <a href={"http://localhost:5000/"+this.state.shorturl}>http://localhost:5000/{this.state.shorturl}</a>
              </div>
            </div>
            : null
          }
        </main>
      </Aux>
    );
  }
}

export default Shrink;
