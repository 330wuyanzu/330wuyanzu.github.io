
function newContainer(id){
    let div = document.createElement('div');
    div.setAttribute("id", id);
    div.setAttribute("class", "container");
    document.getElementById('main').appendChild(div);
    return div;
}

function newTotalChart(container, data, type){
    let total = data.Total;
    let atas = data.ATA;
    let deadline = data.Deadline;
    let decendLabel = [];
    let decendData = [];
    let decendPercent = [];
    for (ata of atas){
        decendLabel.push(ata[0]);
        decendData.push(ata[1]);
        let tmp = (ata[2]*100).toString().substr(0,5);
        decendPercent.push(tmp);
    }
    let option = {
        title: {text: `${type} Malfunction Statistics as of ${deadline} <total: ${total}>`,
                x:'center'
        },
        legend: {show: false},
        series: [
        {
            type: 'bar',
            name: 'Count',
            data: decendData,
            stack: 'ata',
            label: {
                show: true,
                position: 'insideBottom'
            },
            distance: 1
        }
        ],
        xAxis: {
            type: 'category',
            data: decendLabel,
            axisLabel: {rotate: 45},
            axisTick: {show: false}
        },
        toolbox: {
            feature: {saveAsImage:{title:'保存为图片'}},
            right:70
        },
        yAxis: [{
            type: 'value',
            name: 'count',
            axisLabel: {
                formatter: '{value} time'
            }
        }
        ],
        tooltip: {}
    }
    var chart = echarts.init(container,'vintage');
    chart.setOption(option);
}

let a320 = document.getElementById('total320');
let a330 = document.getElementById('total330');
newTotalChart(a320, A320, 'A320FM');
newTotalChart(a330, A330, 'A330');

function newTotalChartPer(container, data, type){
    let total = data.Total;
    let atas = data.ATA;
    let deadline = data.Deadline;
    let legends = [];
    let n = [];
    for (ata of atas){
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
    }
    var chart = echarts.init(container,'vintage');
    chart.setOption(option);
}
let a320p = document.getElementById('total320p');
let a330p = document.getElementById('total330p');
newTotalChartPer(a320p, A320, 'A320FM');
newTotalChartPer(a330p, A330, 'A330');


function newChart(container, data){
    let airplane = data.Airplane;
    let deadline = data.Deadline;
    let atas = data.ATA;
    let decendLabel = [];
    let decendData = [];
    for(ata of atas){
        decendLabel.push(ata[0]);
        decendData.push(ata[1]);
    }
    let option = {
        title: {text: `${airplane} Malfunction Statistics as of ${deadline} <total: ${data.Total}>`,
        x: 'center'
        },
        series: [{
            type: 'bar',
            name: 'Count of Malfunction',
            data: decendData,
            label: {
                show: true,
                position: 'insideBottom'
            }
        }],
        xAxis: {
            data: decendLabel,
            axisLabel: {rotate: 45},
            axisTick: {show: false}
        },
        toolbox: {
            feature: {saveAsImage:{title:'保存为图片'}},
            right:70
        },
        yAxis: {},
        tooltip: {}
    }
    var chart = echarts.init(container,'dark');
    chart.setOption(option);
}

for (item of DATA){
    let container = newContainer(item.Airplane);
    newChart(container, item);
}
