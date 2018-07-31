/* jshint esversion:6 */

/* 渲染机队总体故障统计条形图 */

function renderFamily(container, fleet, data, theme) {
    Update = data.update;
    Total = data.total;
    tuple_list = data.by_ata;
    ATA_Label = [];
    ATA_Count = [];
    for (let tuple of tuple_list) {
        ATA_Label.push(tuple[0]);
        ATA_Count.push(tuple[1]);
    }
    MAX_ATA = ATA_Label[0];

    let title = {
        text: `${fleet} 机队总体故障统计`,
        x: 'center'
    };
    let tooltip = {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
    };
    let toolbox = {
        show: true,
        feature: { saveAsImage: { title: '保存为图片' } },
        left: 'center',
        top: 25,
        iconStyle: { color: '#64BD3D', borderColor: '#64BD3D' }
    };
    let yAxis = [{
        type: 'category',
        name: 'ATA章节',
        data: ATA_Label, //list
        inverse: false,
    }];
    let xAxis = {
        type: 'value',
        name: '故障次数',
        axisLabel: { formatter: '{value}次' }
    };
    let series = [{
        type: 'bar',
        name: '故障数量',
        data: ATA_Count,
        label: {
            show: true,
            position: 'insideLeft'
        },
        itemStyle: {
            color: function(params) {
                //let colors = ['#C33531','#C33531','#C33531','#C33531','#C33531','#C33531','#C33531','#C33531','#C33531','#C33531'];
                if (params.dataIndex < 10) {
                    //return colors[params.dataIndex];
                    return '#C33531';
                } else {
                    return '#64BD3D';
                }
            }
        }
    }];
    let graphic = [{
        type: 'text',
        z: 100,
        left: 'center',
        top: '10%',
        style: {
            fill: '#fff',
            lineWidth: 2,
            text: [
                `截至 ${Update} 日，共发生故障 ${Total} 次`,
                `故障分布于 ${ATA_Label.length} 个章节，平均故障率 ${(100/ATA_Label.length).toFixed(4)}%`,
                `其中 ${MAX_ATA} 的故障率最高，为 ${(ATA_Count[0]/Total*100).toFixed(4)}%`
            ].join('\r\n'),
            font: '20px Microsoft YaHei'
        }
    }];
    let option = {
        title: title,
        tooltip: tooltip,
        toolbox: toolbox,
        xAxis: xAxis,
        yAxis: yAxis,
        series: series,
        legend: { show: false },
        graphic: graphic,
        backgroundColor: 'rgba(0, 0, 0,0.5)'
    };
    let chart = echarts.init(container, theme);
    chart.setOption(option);
}

let x = document.getElementById('total320');
if (x) {
    renderFamily(x, 'A320FM', A320FM, 'dark');
}
x = document.getElementById('total330');
if (x) {
    renderFamily(x, 'A330', A330FM, 'dark');
}