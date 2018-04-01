
function newContainer(id){
    let div = document.createElement('div');
    div.setAttribute("id", id);
    div.setAttribute("class", "container");
    document.getElementById('main').appendChild(div);
    return div;
}

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
        title: {text: `${airplane} Malfunction Statics as of ${deadline}`},
        legend: {},
        series: [{
            type: 'bar',
            name: 'Count of Malfunction',
            data: decendData
        }],
        xAxis: {
            data: decendLabel,
            axisLabel: {rotate: 45}
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
