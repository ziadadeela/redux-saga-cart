import React from 'react'
import {itemsDetailSelector} from "../../selectors";
import {connect, useDispatch} from "react-redux";
import {addItem, increaseItemQuantity} from "../../actions";


const ItemsList = ({items}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {
                items.map(i => (
                    <div>
                        <button className="btn btn-sm" onClick={() => dispatch(increaseItemQuantity(i.id))}>+</button>
                        {i.name}
                    </div>))
            }
        </div>
    )

};
const mapStateToProps = (state) => {
    return {
        items: itemsDetailSelector(state)
    }
};
export default connect(mapStateToProps)(ItemsList);