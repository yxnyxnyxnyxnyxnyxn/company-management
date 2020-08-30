import React, {Component} from "react";
import Search from "./components/Search";
import Companies from "./components/Companies.js"
import axios from "axios"
import NewCompanyModal from "./components/NewCompanyModal"

//TODO: show details , create new company , search , delete, edit
class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: {
            name: "",
            headquarters: "",
            industry: "",
            size: "",
            website:"",
            ceo:"",
            description: "",
            founded: ""
          },
          newCompanyModal: false,
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

      addNewCompany =() =>{
        const item = {
          name: "",
          headquarters: "",
          industry: "",
          size: "",
          website:"",
          ceo:"",
          description: "",
          founded: ""
        }
        this.setState({ activeItem: item,newCompanyModal: !this.state.newCompanyModal });
      }

      toggle = () => {
        this.setState({ newCompanyModal: !this.state.newCompanyModal});
      };

      // handleInput = (e) =>{
      //   let s = e.target.value;
      //   setState(prevState=>{
      //     return {...prevState, s: s}
      //   });
      // }

      handleSubmit = item => {
       this.toggle();
       if (!item['size']){
         item['size'] = 1
       }
       axios.post('http://localhost:8000/api/companies/', item)
       .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.setState({company: this.state.companies.push(item)})
     };

      render() {
        return (
            <div className="App">
              <header>
                <h1>Company Management</h1>
              </header>
              <main>
                <Search />

                <Companies companies={this.state.companies} />
                <div className="add-new">
                <button
                  className="btn btn-primary mr-2"
                  onClick={this.addNewCompany}
                >
                  Add Company
                </button>
                </div>
                {this.state.newCompanyModal ? (
                  <NewCompanyModal
                  activeItem={this.state.activeItem}
                  toggle={this.toggle}
                  onSave={this.handleSubmit}
                  />
                  ) : null}
              </main>
            </div>

        );
      }
    }
    export default App;
