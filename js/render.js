/* jshint esversion:6 */
function newContainer(id){
    let div = document.createElement('div');
    div.setAttribute("id", id);
    div.setAttribute("class", "container");
    document.getElementById('main').appendChild(div);
    return div;
}
/*
function newTotalChartPer(container, data, type){
    let total = data.Total;
    let atas = data.ATA;
    let deadline = data.Deadline;
    let legends = [];
    let n = [];
    for (let ata of atas){
        n.push({value:ata[1],name:ata[0]});
        legends.push(ata[0]);
    }
    let option = {
        title: {text: `${type} Malfunction Statistics as of ${deadline} <total: ${total}>`,
                x: 'center'
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            data: legends
        },
        series: [
        {
            name: 'Percentage',            
            type: 'pie',
            roseType: true,
            data: n,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
        ],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        }
    };
    var chart = echarts.init(container,'vintage');
    chart.setOption(option);
}
let a320p = document.getElementById('total320p');
let a330p = document.getElementById('total330p');
newTotalChartPer(a320p, A320, 'A320FM');
newTotalChartPer(a330p, A330, 'A330');
*/



/* 渲染机队总体故障统计条形图 */
// datalst = ['最后统计日期',['ATA-xx',count,ratio]....]
function FamilyBar(container, fm, datalst, theme){
    let _family = fm;
    let _data = datalst.ATA;
    let _updatetime = datalst.update;
    let _total = datalst.total;
    let _xLabel = [];
    let _xValue = [];
    for (let item of _data){
        let ata = item[0];
        let count = item[1];
        _xLabel.push(ata);
        _xValue.push(count);
    }
    let _per = _total / _xValue.length;
    let _option = {
        title: {
            text: `${_family} 机队故障数量统计`,
            x: 'center'
        },
        graphic: [
            {
                type: 'text',
                z: 100,
                right: '40%',
                top: '10%',
                style: {
                    fill: '#fff',
                    lineWidth: 2,
                    text: [
                        `截至 ${_updatetime} 日，共发生故障 ${_total} 次`,
                        `故障分布于 ${_xValue.length} 个章节，平均故障率 ${(100/_xValue.length).toFixed(4)}%`,
                        `其中 ${datalst.MAX} 的故障率最高，为 ${(_xValue[0]/_total*100).toFixed(4)}%`
                    ].join('\r\n'),
                    font: '20px Microsoft YaHei'
                }
            }
        ],
        legend: {show: false},
        series: [{
            type: 'bar',
            name: '故障数量',
            data: _xValue,
            label: {
                show: true,
                position: 'top'
            },
            distance: 1,
            markLine: {
                label: {
                    position: 'middle',
                    formatter: '平均故障'
                },
                data: [
                    {
                        name: '平均故障数',
                        type: 'average'
                    }
                ],
                lineStyle: {
                    color: 'red',
                    width: 5,
                    type: 'dashed'
                }
            }
        }],
        xAxis: {
            type: 'category',
            data: _xLabel,
            axisLabel: {rotate: 30},
            axisTick: {show: false}
        },
        yAxis: [{
            type: 'value',
            name: '故障数量',
            axisLabel: {formatter: '{value}次'}
        }],
        toolbox: {
            feature: {saveAsImage: {title: '保存为图片'}},
            right: 70
        },
        tooltip: {}
    };
    let chart = echarts.init(container, theme);
    chart.setOption(_option);
}


/* 渲染单个飞机故障统计条形图 */
// datalst = [plane,['ATA-xx',count,ratio].....]
function SingleBar(container, lasttime, datalst, theme){
    let _data = datalst;
    let _updatetime = lasttime;
    let _plane = data.shift();
    let _total = 0;
    let _xLabel = [];
    let _xValue = [];
    for (let item of _data){
        let ata = itemp[0];
        let count = item[1];
        _xLabel.push(ata);
        _xValue.push(count);
        _total += count;
    }
    let _option = {
        title: {
            text: `${_plane}故障数量统计<共${_total}> 截止日期:${_updatetime}`,
            x: 'center'
        },
        legend: {show: false},
        series: [{
            type: 'bar',
            name: '故障数量',
            data: _xValue,
            label: {
                show: true,
                position: 'insideBottom'
            },
            distance: 1
        }],
        xAxis: {
            type: 'category',
            data: _xLabel,
            axisLabel: {rotate: 45},
            axisTick: {show: false}
        },
        yAxis: [{
            type: 'category',
            name: '故障数量',
            axisLabel: {formatter: '{value}次'}
        }],
        toolbox: {
            feature: {saveAsImage: {title: '保存为图片'}},
            right: 70
        },
        tooltip: {},
        animationEasing: 'bounceInOut'
    };
    let chart = echarts.init(container, theme);
    chart.setOption(_option);
}

FamilyBar(document.getElementById('total320'),'A320FM', A320FM, 'dark');
FamilyBar(document.getElementById('total330'),'A330', A330, 'dark');
