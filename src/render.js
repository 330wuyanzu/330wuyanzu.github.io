const DATA = [
    {"Airplane": "B-1007", "Deadline": "2018-03-30", "Total": 0, "ATA": {}},
    {"Airplane": "B-1047", "Deadline": "2018-03-30", "Total": 7, "ATA": {"ATA-21": {"count": 3, "ratio": 0.42857142857142855}, "ATA-25": {"count": 1, "ratio": 0.14285714285714285}, "ATA-28": {"count": 1, "ratio": 0.14285714285714285}, "ATA-49": {"count": 1, "ratio": 0.14285714285714285}, "ATA-77": {"count": 1, "ratio": 0.14285714285714285}}},
    {"Airplane": "B-6425", "Deadline": "2018-03-30", "Total": 245, "ATA": {"ATA-21": {"count": 34, "ratio": 0.13877551020408163}, "ATA-27": {"count": 26, "ratio": 0.10612244897959183}, "ATA-30": {"count": 21, "ratio": 0.08571428571428572}, "ATA-36": {"count": 19, "ratio": 0.07755102040816327}, "ATA-32": {"count": 18, "ratio": 0.07346938775510205}, "ATA-23": {"count": 17, "ratio": 0.06938775510204082}, "ATA-34": {"count": 17, "ratio": 0.06938775510204082}, "ATA-22": {"count": 14, "ratio": 0.05714285714285714}, "ATA-49": {"count": 13, "ratio": 0.053061224489795916}, "ATA-28": {"count": 10, "ratio": 0.04081632653061224}, "ATA-24": {"count": 6, "ratio": 0.024489795918367346}, "ATA-26": {"count": 6, "ratio": 0.024489795918367346}, "ATA-31": {"count": 6, "ratio": 0.024489795918367346}, "ATA-38": {"count": 4, "ratio": 0.0163265306122449}, "ATA-47": {"count": 4, "ratio": 0.0163265306122449}, "ATA-76": {"count": 4, "ratio": 0.0163265306122449}, "ATA-29": {"count": 3, "ratio": 0.012244897959183673}, "ATA-33": {"count": 3, "ratio": 0.012244897959183673}, "ATA-35": {"count": 3, "ratio": 0.012244897959183673}, "ATA-52": {"count": 3, "ratio": 0.012244897959183673}, "ATA-75": {"count": 3, "ratio": 0.012244897959183673}, "ATA-79": {"count": 3, "ratio": 0.012244897959183673}, "ATA-71": {"count": 2, "ratio": 0.00816326530612245}, "ATA-73": {"count": 2, "ratio": 0.00816326530612245}, "ATA-74": {"count": 2, "ratio": 0.00816326530612245}, "ATA-46": {"count": 1, "ratio": 0.004081632653061225}, "ATA-77": {"count": 1, "ratio": 0.004081632653061225}}},
    {"Airplane": "B-6426", "Deadline": "2018-03-30", "Total": 242, "ATA": {"ATA-21": {"count": 35, "ratio": 0.1446280991735537}, "ATA-27": {"count": 32, "ratio": 0.1322314049586777}, "ATA-34": {"count": 25, "ratio": 0.10330578512396695}, "ATA-32": {"count": 23, "ratio": 0.09504132231404959}, "ATA-30": {"count": 18, "ratio": 0.0743801652892562}, "ATA-36": {"count": 18, "ratio": 0.0743801652892562}, "ATA-22": {"count": 9, "ratio": 0.0371900826446281}, "ATA-28": {"count": 9, "ratio": 0.0371900826446281}, "ATA-24": {"count": 8, "ratio": 0.03305785123966942}, "ATA-49": {"count": 8, "ratio": 0.03305785123966942}, "ATA-23": {"count": 7, "ratio": 0.028925619834710745}, "ATA-29": {"count": 6, "ratio": 0.024793388429752067}, "ATA-31": {"count": 5, "ratio": 0.02066115702479339}, "ATA-26": {"count": 4, "ratio": 0.01652892561983471}, "ATA-47": {"count": 4, "ratio": 0.01652892561983471}, "ATA-52": {"count": 4, "ratio": 0.01652892561983471}, "ATA-79": {"count": 4, "ratio": 0.01652892561983471}, "ATA-33": {"count": 3, "ratio": 0.012396694214876033}, "ATA-38": {"count": 3, "ratio": 0.012396694214876033}, "ATA-46": {"count": 3, "ratio": 0.012396694214876033}, "ATA-75": {"count": 3, "ratio": 0.012396694214876033}, "ATA-73": {"count": 2, "ratio": 0.008264462809917356}, "ATA-74": {"count": 2, "ratio": 0.008264462809917356}, "ATA-77": {"count": 2, "ratio": 0.008264462809917356}, "ATA-35": {"count": 1, "ratio": 0.004132231404958678}, "ATA-70": {"count": 1, "ratio": 0.004132231404958678}, "ATA-71": {"count": 1, "ratio": 0.004132231404958678}, "ATA-72": {"count": 1, "ratio": 0.004132231404958678}, "ATA-76": {"count": 1, "ratio": 0.004132231404958678}}}
]
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
    let decendLabel = ['1','2'];
    let decendData = [50,25];
    let option = {
        title: {text: `${airplane} Malfunction Statics end at ${deadline}`},
        legend: {data: ['Count of Malfunction']},
        series: [{
            type: 'bar',
            name: 'Count of Malfunction',
            data: decendData
        }],
        xAxis: {
            data: decendLabel
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
