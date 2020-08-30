import React, {Component} from 'react'
import {
     Button,
     Modal,
     ModalHeader,
     ModalBody,
     ModalFooter,
     Form,
     FormGroup,
     Input,
     Label,
     FormFeedback
} from "reactstrap";
export default class NewCompanyModal extends Component {
  constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem,
          sizeType: ['1-10','11-50','51-200','201-500','501-1000','1001-5000','5001-10,000','10,000+']
        };
  };

  handleChange = e => {
       let { name, value } = e.target;
       const activeItem = { ...this.state.activeItem, [name]: value };
       this.setState({ activeItem });
  };

  render() {
    const { toggle,onSave} = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
          <ModalHeader toggle={toggle}>Add a new company</ModalHeader>
          <ModalBody>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={this.state.activeItem.name}
              onChange={this.handleChange}
              placeholder="Company Name"
              invalid={this.state.activeItem.name.length==0}
            />
          </FormGroup>
          <FormGroup>
            <Label for="headquarter">Headquarter</Label>
            <Input
              type="text"
              name="headquarter"
              value={this.state.activeItem.headquarter}
              onChange={this.handleChange}
              placeholder="Headquarter"
            />
          </FormGroup>
          <FormGroup>
            <Label for="industry">Industry</Label>
            <Input
              type="text"
              name="industry"
              value={this.state.activeItem.industry}
              onChange={this.handleChange}
              placeholder="Industry"
            />
          </FormGroup>
          <FormGroup>
            <Label for="ceo">CEO</Label>
            <Input
              type="text"
              name="ceo"
              value={this.state.activeItem.ceo}
              onChange={this.handleChange}
              placeholder="CEO"
            />
          </FormGroup>
          <FormGroup>
            <Label for="founded">Founded</Label>
            <Input
              type="text"
              name="founded"
              value={this.state.activeItem.founded}
              onChange={this.handleChange}
              placeholder="Founded"
            />
          </FormGroup>
          <FormGroup>
            <Label for="website">Website</Label>
            <Input
              type="text"
              name="website"
              value={this.state.activeItem.website}
              onChange={this.handleChange}
              placeholder="Website"
            />
          </FormGroup>
          <FormGroup>
            <Label for="size">Size</Label>
            <Input
              type="select"
              name="size"
              value={this.state.activeItem.size}
              onChange={this.handleChange}>
              {
                this.state.sizeType.map((option,index)=>
                  <option key={index+1} value={index+1}>
                    {option}
                  </option>
                )
              }

            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              value={this.state.activeItem.description}
              onChange={this.handleChange}
              placeholder="Company description"
            />
          </FormGroup>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => onSave(this.state.activeItem)}>Save</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
      </Modal>
    )
  }
}
