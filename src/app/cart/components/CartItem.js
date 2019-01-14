// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: this.props.item.qty
        }
    }

    componentDidMount(){
        console.log("cart Item did mount ");


        this.inputElem.focus();

        //refs are resolved after render
    }

    componentWillMount(){
        console.log("cart Item will mount ");
    }

    onQtyChange =(event)=>{
        const {value} = event.target;
        console.log('on qty change' , value);

        this.setState({
            qty : value
        })

    };
    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty

    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <input
                        ref = { elem => this.inputElem = elem}
                        value={this.state.qty}
                        type="number"
                        onChange={this.onQtyChange}
                    />
                </td>
                <td>{item.price * item.qty}</td>
                <td>
                    <button onClick={() => this.props.updateItem(item.id , parseInt(this.state.qty)) }>
                        Update
                    </button>
                    <button onClick={() => this.props.removeItem(item.id)}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}


CartItem.defaultProps = {

}

CartItem.propTypes = {

}