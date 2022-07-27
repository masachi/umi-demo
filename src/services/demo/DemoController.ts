import {CakeItem, ColumnItem, ListItem, MockResponse, SplineItem} from "@/interfaces";
import dayjs from "dayjs";
import {columnMockData, listMockData, splineMockData} from "@/constants";




const Mock = require('mockjs');

export async function getListByKeywords(keyword?: string): Promise<MockResponse<ListItem>> {
    return new Promise((resolve) => {
        if(keyword) {
            let filteredData = listMockData.list.filter((item: ListItem) => {
                return item.name.includes(keyword)
            });

            resolve(
                {
                    list: filteredData
                }
            );
        }

        resolve(listMockData);
    });
}

export async function getCakeData(): Promise<MockResponse<CakeItem>> {
    return new Promise(resolve => {
        resolve(
            Mock.mock({
                'list|10': [{
                    type: () => {
                        return Mock.Random.cword(2,4)
                    },
                    value: () => {
                        return 10
                    },
                }]
            })
        );
    })
}

export async function getColumnData(): Promise<MockResponse<ColumnItem>> {
    return new Promise(resolve => {
        resolve(columnMockData);
    })
}

export async function getSplineData(): Promise<MockResponse<SplineItem>> {
    console.error(splineMockData);

    return new Promise(resolve => {

        splineMockData.list.sort((a, b) => a.timestamp - b.timestamp).forEach((item: SplineItem) => {
            item.Date = dayjs(item.timestamp).format("YYYY-MM")
        });

        splineMockData.list = [...new Map(splineMockData.list.map(item =>
            [item['Date'], item])).values()];

        resolve(splineMockData);
    })
}