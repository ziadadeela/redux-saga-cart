import React from 'react'
import {connect, useSelector} from "react-redux";
import {CartItemListDisplay} from "../CartItemList";
import {cartItemsSelector} from "../../selectors";
import {isBlockedUISelector} from "../../selectors/isBlockedUISelector";

const BlockUI = ({isBlockedUI}) => {
    console.log("isBlocked", isBlockedUI);
    return (<div>
        {
            isBlockedUI &&
            (<div>
                Loading 0o0
            </div>)
        }
    </div>)
};
const mapStateToProps = (state) => {
    const isBlockedUI = isBlockedUISelector(state);
    return {
        isBlockedUI: isBlockedUI
    }
};
export default connect(
    mapStateToProps
)(BlockUI);