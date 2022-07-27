import {ListItem, MockResponse, SplineItem} from "@/interfaces";
let Mock = require('mockjs');

export const DEFAULT_NAME = 'Umi Max';


export const listMockData: MockResponse<ListItem> = Mock.mock({
    'list|1-100': [{
        id: () => {
            return Mock.Random.guid()
        },
        name: () => {
            return Mock.Random.name()
        },
        description: () => {
            return Mock.Random.sentence()
        },
        timestamp: () => {
            return Mock.Random.date("T")
        },
    }]
})

export const columnMockData = Mock.mock({
    'list|1-7': [{
        type: () => {
            return Mock.Random.cword(2,4)
        },
        sales: () => {
            return Mock.Random.natural(0, 200)
        },
        timestamp: () => {
            return Mock.Random.date("T")
        },
    }]
})

export const splineMockData: MockResponse<SplineItem> = Mock.mock({
    'list|20-60': [{
        scales: () => {
            return Mock.Random.natural(0, 2000)
        },
        timestamp: () => {
            return Mock.Random.time("T")
        },
    }]
})