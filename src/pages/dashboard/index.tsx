import {PageContainer} from '@ant-design/pro-components';
import React from 'react';
import './index.less'
import CardContainer from "@/components/Card/Card";
import RGL, { WidthProvider } from "react-grid-layout";
import DemoSpline from "@/pages/dashboard/components/Spline";
import DemoColumn from "@/pages/dashboard/components/Column";
import DemoPie from "@/pages/dashboard/components/Cake";
import DemoList from "@/pages/dashboard/components/List";
import GlobalSearch from "@/components/Search/GlobalSearch";

// const ReactGridLayout = WidthProvider(RGL);
const ReactGridLayout = RGL;

const layout = [
    { i: "column", x: 0, y: 0, w: 1, h: 5, static: true },
    { i: "spline", x: 1, y: 0, w: 1, h: 4, static: true },
    { i: "cake", x: 0, y: 5, w: 1, h: 3, static: true },
    { i: "list", x: 1, y: 4, w: 1, h: 3, static: true }
];

export default function Page() {
    return (
        <PageContainer
            header={{
                title: ""
            }}>

            <GlobalSearch />

            <ReactGridLayout
                className={'dashboard-container'}
                layout={layout}
                cols={2}
                rowHeight={100}
                // TODO width需要换个实现方案
                width={window.screen.width - 265 - 80}
            >
                <div key={'column'} className={'column-card-container card-item'}>
                    <CardContainer hasDelete={true} hasMax={true}>
                        <DemoColumn />
                    </CardContainer>
                </div>

                <div key={'spline'} className={'spline-card-container card-item'}>
                    <CardContainer hasDelete={true} hasMax={true}>
                        <DemoSpline />
                    </CardContainer>
                </div>

                <div key={'cake'} className={'cake-card-container card-item'}>
                    <CardContainer hasDelete={true} hasMax={true}>
                        <DemoPie />
                    </CardContainer>
                </div>

                <div key={'list'} className={'list-card-container card-item'}>
                    <CardContainer hasDelete={true} hasMax={true}>
                        <DemoList />
                    </CardContainer>
                </div>
            </ReactGridLayout>

        </PageContainer>
    );
}
