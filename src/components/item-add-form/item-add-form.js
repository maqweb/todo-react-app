import React from "react";
import './item-add-form.css'

class ItemAddForm extends React.Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text"
                       value={this.state.label}
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done"
                />
                <button className="btn btn-outline-secondary">
                    Add&nbsp;Task
                </button>
            </form>
        );
    }
}

export default ItemAddForm;