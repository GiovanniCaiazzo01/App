import React from 'react';
import CONST from '../../CONST';
import MoneyRequestModal from './MoneyRequestModal';

function IOUSendPage(props) {
    return (
        <MoneyRequestModal
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            iouType={CONST.IOU.MONEY_REQUEST_TYPE.SEND}
        />
    );
}
IOUSendPage.displayName = 'IOUSendPage';
export default IOUSendPage;
