import {connect} from "../createSocketConnection";
import {eventChannel} from "redux-saga";
import {setCustomerServiceAvailability} from "../actions";
import {put, take} from "redux-saga/effects";

export function* customerServiceAvailabilitySaga() {
    const socket = connect();
    const chan = new eventChannel(emit => {
        const enable = () => {
            emit(true);
        }
        const disable = () => {
            emit(false);
        }

        socket.on('SUPPORT_AVAILABLE', enable);
        socket.on('SUPPORT_NOT_AVAILABLE', disable);

        return () => {

        }
    })

    while (true) {
        let supportAvailable = yield take(chan);
        yield put(setCustomerServiceAvailability(supportAvailable));
    }
}