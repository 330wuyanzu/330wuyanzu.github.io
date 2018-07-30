/* jshint esversion:6 */

/* 渲染机队总体故障统计条形图 */
function FamilyBar(container, fleet, data, theme){
    Update = data.update;
    Total = data.total;
    tuple_list = data.by_ata;
    ATA_Label = [];
    ATA_Count = [];
    for(let tuple of tuple_list){
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
        axisPointer:{type:'shadow'}
    };
    let toolbox = {
        show: true,
        feature: {saveAsImage: {title: '保存为图片'}},
        left: 'center',
        top: 25,
        iconStyle:{color: '#64BD3D', borderColor:'#64BD3D'}
    };
    let  yAxis = [{
        type: 'category',
        name: 'ATA章节',
        data: ATA_Label,//list
        inverse: false,
    }];
    let xAxis = {
        type: 'value',
        name: '故障次数',
        axisLabel: {formatter: '{value}次'}
    };
    let series = [{
        type: 'bar',
        name: '故障数量',
        data: ATA_Count,
        label: {
            show: true,
            position: 'insideLeft'
        },
        itemStyle:{
            color: function(params){
                //let colors = ['#C33531','#C33531','#C33531','#C33531','#C33531','#C33531','#C33531','#C33531','#C33531','#C33531'];
                if(params.dataIndex < 10){
                    //return colors[params.dataIndex];
                    return '#C33531';
                }else{
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
        legend: {show: false},
        graphic: graphic,
        backgroundColor:'rgba(0, 0, 0,0.5)'
    };
    let chart = echarts.init(container, theme);
    chart.setOption(option);
}

const A320FM = {
    "update":"2018-07-28",
    "total":2979,
    "by_ata":[
        ["ATA-21",399],["ATA-34",320],["ATA-27",280],["ATA-36",235],["ATA-32",225],["ATA-23",166],["ATA-22",163],["ATA-49",137],["ATA-30",136],["ATA-28",133],["ATA-24",77],["ATA-31",76],["ATA-79",74],["ATA-26",66],["ATA-52",61],["ATA-77",52],["ATA-29",46],["ATA-74",45],["ATA-75",41],["ATA-38",38],["ATA-35",28],["ATA-73",28],["ATA-33",22],["ATA-47",21],["ATA-25",16],["ATA-80",14],["ATA-71",14],["ATA-72",14],["ATA-46",11],["ATA-70",9],["ATA-78",9],["ATA-76",7],["ATA-57",6],["ATA-56",3],["ATA-05",2],["ATA-12",2],["ATA-55",2],["ATA-53",1]
    ]
};

const A330FM = {"update":"2018-07-28","total":354,"by_ata":[["ATA-21",56],["ATA-34",30],["ATA-73",30],["ATA-36",30],["ATA-23",24],["ATA-24",20],["ATA-27",20],["ATA-32",20],["ATA-28",19],["ATA-52",18],["ATA-49",17],["ATA-38",8],["ATA-47",7],["ATA-29",7],["ATA-25",6],["ATA-22",6],["ATA-74",6],["ATA-30",5],["ATA-31",5],["ATA-26",3],["ATA-33",3],["ATA-79",3],["ATA-78",3],["ATA-46",2],["ATA-71",2],["ATA-35",2],["ATA-77",1],["ATA-45",1]]};

let x = document.getElementById('total320');
if(x){
FamilyBar(x, 'A320FM', A320FM, 'dark');}
x = document.getElementById('total330');
if(x){
FamilyBar(x, 'A330', A330FM, 'dark');
}

document.getElementById('btn-320').onclick = function(){
    a320=document.getElementById('total320');
    a330=document.getElementById('total330');
    a320.style.visibility = 'visible';
    a320.style.display = null;
    a330.style.visibility = 'hidden';
    a330.style.display = 'none';
}
document.getElementById('btn-330').onclick = function(){
    a320=document.getElementById('total320');
    a330=document.getElementById('total330');
    a330.style.visibility = 'visible';
    a320.style.visibility = 'hidden';
    a330.style.display = null;
    a320.style.display = 'none';
}


video = document.getElementById('bgv');
video.oncanplay = function(){
        document.getElementById('loader').remove();
};
