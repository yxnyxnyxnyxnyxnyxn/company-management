import React, {Component} from "react";
import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
 } from "reactstrap";
import DatePicker from "react-datepicker";
export default class CustomModal extends Component {
       constructor(props) {
         super(props);
         this.state = {
           activeItem: this.props.activeItem
         };
       }
       handleChange = e => {
         let { name, value } = e.target;
         if (e.target.type === "checkbox") {
           value = e.target.checked;
         }
         const activeItem = { ...this.state.activeItem, [name]: value };
         this.setState({ activeItem});
       };
       render() {
         const { toggle, onSave } = this.props;
         return (
           <h1>Hello, world!</h1>
         );
       }
}
