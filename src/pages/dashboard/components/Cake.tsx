import { Pie } from '@ant-design/charts';
import {useEffect, useState} from "react";
import {CakeItem} from "@/interfaces";
import {getCakeData} from "@/services/demo/DemoController";

const DemoPie = () => {
    const [data, setData] = useState<CakeItem[]>([]);


    const getMockCakeData = async () => {
        let response = await getCakeData();
        setData(response.list)
    }

    useEffect(() => {
        getMockCakeData();
    }, []);

    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
            type: 'outer',
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config} />;
};

export default DemoPie;
