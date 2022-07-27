import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import {getSplineData} from "@/services/demo/DemoController";
import {SplineItem} from "@/interfaces";

const DemoSpline = () => {
    const [data, setData] = useState<SplineItem[]>([]);

    const asyncFetch = async () => {
        let response = await getSplineData();

        setData(response.list);
    };

    useEffect(() => {
        asyncFetch();
    }, []);

    const config = {
        width: '100%',
        height: '100%',
        data,
        xField: 'Date',
        yField: 'scales',
        xAxis: {
            // type: 'timeCat',
            tickCount: 5,
        },
        smooth: true,
    };

    return <Line {...config} />;
};

export default DemoSpline;