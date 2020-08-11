import { connect } from 'react-redux'
import {
    CheckoutDisplay
} from './CheckoutDisplay';

import {

} from './../../actions'

import {
    isCheckingOutSelector
} from './../../selectors'

const mapStateToProps = (state) => {
    return {
        isCheckingOut:isCheckingOutSelector(state)
    }
};
const mapDispatchToProps = (dispatch) => ({

});

export const CheckoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutDisplay);