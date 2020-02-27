## 指数综合

<canvas id="chart01"></canvas>
<canvas id="chart02"></canvas>
<canvas id="chart03"></canvas>

<script>
// data_index_gen = loadData('/index/801003.csv')
// data_index_gen(drawTimeSeries({
//     el: 'chart01',
//     label: '801003',
//     title: '收盘指数',
//     x: data => data.map(_ => new Date(_['发布日期'])),
//     y: data => data.map(_ => _['收盘指数'])
// }))
loadData('/index/PE.csv')(drawTimeSeries({
    el: 'chart02',
    labels: ['801001', '801002', '801003', '801005', '801300'],
    title: '市盈率',
    x: data => data.map(_ => new Date(_['发布日期'])),
}))
// data_index_gen(drawTimeSeries({
//     el: 'chart03',
//     label: '801003',
//     title: '市净率',
//     x: data => data.map(_ => new Date(_['发布日期'])),
//     y: data => data.map(_ => _['市净率(倍)'])
// }))
</script>