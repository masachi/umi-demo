export interface MockResponse<T> {
    list: T[]
}

export interface ListItem {
    id: string,
    name: string,
    description?: string,
    timestamp: number
}

export interface CakeItem {
    type: string,
    value: number,
    timestamp: number
}

export interface ColumnItem {
    type: string,
    sales: string,
    timestamp: number
}

export interface SplineItem {
    Date: string,
    timestamp: number,
    scales: number
}