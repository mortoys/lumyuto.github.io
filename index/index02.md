## 指数综合

<canvas id="chart01"></canvas>
<canvas id="chart02"></canvas>
<canvas id="chart03"></canvas>

<script>
data_index_gen = loadData('/index/801003.csv')
data_index_gen(drawTimeSeries({
    el: 'chart01',
    x: data => data.map(_ => new Date(_['发布日期'])),
    y: data => data.map(_ => _['收盘指数'])
}))
data_index_gen(drawTimeSeries({
    el: 'chart02',
    x: data => data.map(_ => new Date(_['发布日期'])),
    y: data => data.map(_ => _['市盈率(倍)'])
}))
data_index_gen(drawTimeSeries({
    el: 'chart03',
    x: data => data.map(_ => new Date(_['发布日期'])),
    y: data => data.map(_ => _['市净率(倍)'])
}))
</script>