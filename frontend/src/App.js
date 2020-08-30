import React, {Component} from "react";
import Modal from "./components/create-company-modal";
import Search from "./components/Search";
import Companies from "./components/Companies.js"
import axios from "axios"

//TODO: show details , create new company , search , delete, edit
class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: {
            name: "",
            industry: "",
            ceo:"",
            description: "",
            founded: new Date()
          },
          companies: []
        };
      }


      // const search = (e) => {
      //   if (e.key === "Enter"){
      //     let filteredResult =
      //   }
      // }

      componentDidMount(){
        this.refreshList();
      }

      refreshList = ()=>{
        axios
          .get("http://localhost:8000/api/companies/")
          .then(res=> this.setState({companies: res.data}))
          .catch(err=> console.log(err))
      }

      // handleInput = (e) =>{
      //   let s = e.target.value;
      //   setState(prevState=>{
      //     return {...prevState, s: s}
      //   });
      // }

      render() {
        return (
            <div className="App">
              <header>
                <h1>Company Management</h1>
              </header>
              <main>
                <Search />

                <Companies companies={this.state.companies} />

                <button
                  className="btn btn-secondary mr-2"
                >
                  Edit
                </button>
              </main>
            </div>

        );
      }
    }
    export default App;
