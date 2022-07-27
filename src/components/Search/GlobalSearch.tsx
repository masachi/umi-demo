import React, { PropsWithChildren } from 'react';
import './GlobalSearch.less'
import moment from 'moment';

import { DatePicker, Input } from 'antd';
import Emitter from "@/utils/event";
import {GLOBAL_SEARCH_EVENT} from "@/constants/event-constant";
const { RangePicker } = DatePicker;
const { Search } = Input

interface GlobalSearchProps {
    defaultStartTime?: string,
    defaultEndTime?: string
}

const GlobalSearch: React.FC<PropsWithChildren<GlobalSearchProps>> = (props) => {
    const { defaultStartTime, defaultEndTime } = props;

    const onSearch = (value: string) => {
        Emitter.emit(GLOBAL_SEARCH_EVENT, {
           keyword: value
        })
    };

    return (
        <div className={`global-search-container`}>
            <div className={'search-container'}>
                <RangePicker
                    className={'range-picker'}
                    defaultValue={defaultStartTime && defaultEndTime ? [moment(defaultStartTime), moment(defaultEndTime)] : undefined}
                />

                <Search placeholder="请输入关键字" allowClear onSearch={onSearch} style={{ width: 200 }} />
            </div>

        </div>
    );
};

export default GlobalSearch;
