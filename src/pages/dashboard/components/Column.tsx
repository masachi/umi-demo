import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';
import {ColumnItem} from "@/interfaces";
import {getColumnData} from "@/services/demo/DemoController";

const DemoColumn = () => {

  const [data, setData] = useState<ColumnItem[]>([]);


  const getMockColumnData = async () => {
    let response = await getColumnData();
    setData(response.list)
  }

  useEffect(() => {
    getMockColumnData();
  }, []);

  const config = {
    width: '100%',
    height: '100%',
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
