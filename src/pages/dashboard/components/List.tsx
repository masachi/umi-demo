import './List.less'
import React, {useEffect, useState} from "react";
import {ListItem} from "@/interfaces";
import {getListByKeywords} from "@/services/demo/DemoController";
import Emitter from "@/utils/event";
import {GLOBAL_SEARCH_EVENT} from "@/constants/event-constant";

import { DatePicker, Input } from 'antd';
const { Search } = Input

// TODO 双重搜索的时候会有问题

const DemoList = () => {
    const [data, setData] = useState<ListItem[]>([]);

    const getDataByKeywords = async (keywords?: string) => {
        let dataFromInterface = await getListByKeywords(keywords);
        setData(dataFromInterface.list);
    }

    const handleSearchClick = async (value: string) => {
        getDataByKeywords(value)
    };

    useEffect(() => {
        getDataByKeywords();
        Emitter.on(GLOBAL_SEARCH_EVENT, (data: any) => {
            getDataByKeywords(data.keyword)
        });
        return () => {
            Emitter.off(GLOBAL_SEARCH_EVENT);
        };
    }, []);

    return (
        <div className={'demo-list-container'}>
            <Search placeholder="请输入关键字" allowClear onSearch={handleSearchClick} />

            <div className={'items-container'}>
                {
                    data?.map((item: ListItem) => {
                        return (
                            <span key={item.id}>{item.name}</span>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default DemoList;
