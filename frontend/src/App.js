import React, {Component} from "react";
import Search from "./components/Search";
import Companies from "./components/Companies.js"
import axios from "axios"
import NewCompanyModal from "./components/NewCompanyModal"
import update from 'immutability-helper';

//TODO: show details , create new company , search , delete, edit
class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: {
            id:null,
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

      componentDidMount(){
        this.refreshList();
      }

      refreshList = ()=>{
        axios
          .get("http://localhost:8000/api/companies/")
          .then(res=>
            this.setState({companies: res.data})
          )
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

      handleSubmit = item => {
        console.log("id: ",item.id)
        if (item['name']){
          this.toggle();
          if (!item['size']){
            item['size'] = 1
          }
          if (!item.id){
            axios.post('http://localhost:8000/api/companies/', item)
            .then(response=> {
              console.log(response.data)
              this.setState({company: this.state.companies.push(response.data)})
            })
            .catch(error=> {
              console.log(error);
            });
          }else{
            axios.put(`http://localhost:8000/api/companies/${item.id}/`, item)
            .then(response=> {
              const index = this.state.companies.findIndex((cp) => cp.id === item.id);
              const updatedCompanies = update(this.state.companies, {$splice: [[index, 1,  response.data]]});  // array.splice(start, deleteCount, item1)
              this.setState({companies: updatedCompanies});
            })
            .catch(error=> {
              console.log(error);
            });
          }
        }
     };

     deleteCompany = item =>{
       axios.delete(`http://localhost:8000/api/companies/${item.id}`)
       .then(res=>{
         const restCompanies = this.state.companies.filter(cp => cp.id != item.id)
         this.setState({companies: restCompanies})
       })
       .catch(error=> {
         console.log(error);
       });
     }

     editCompany = item =>{

       this.setState({ activeItem: item,newCompanyModal: !this.state.newCompanyModal});
     }

      render() {
        return (
            <div className="App">
              <header>
                <h1>Company Management</h1>
              </header>
              <main>
                <Search />

                <Companies companies={this.state.companies} deleteCompany={this.deleteCompany} editCompany={this.editCompany}/>
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
