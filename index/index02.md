## 指数综合

| 代码   | 收益率    | 波动率    | 名称      | 夏普排名 |
|--------|----------|----------|-----------|--------|
| 801001 | 1.903842 | 0.016636 | 申万50    | 12.0   |
| 801002 | 1.896288 | 0.019449 | 申万中小板 | 18.0   |
| 801003 | 1.781385 | 0.016645 | 申万Ａ指    | 17.0   |
| 801005 | 3.368697 | 0.020389 | 申万创业板 | 3.0    |
| 801300 | 1.625296 | 0.016419 | 申万300指数 | 23.0   |

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
    label_text: ['801001 申万50', '801002 申万中小板', '801003 申万Ａ指', '801005 申万创业板', '801300 申万300指数'],
    title: '市盈率',
    x: data => data.map(_ => new Date(_['发布日期'])),

}))

loadData('/index/PB.csv')(drawTimeSeries({

    el: 'chart02',
    labels: ['801001', '801002', '801003', '801005', '801300'],
    label_text: ['801001 申万50', '801002 申万中小板', '801003 申万Ａ指', '801005 申万创业板', '801300 申万300指数'],
    title: '市盈率',
    x: data => data.map(_ => new Date(_['发布日期'])),

}))
</script>

``` python
ret = {}
for code in [801001, 801002, 801003, 801005, 801300]:
    data = pd.read_csv(root+str(code)+'.csv')
    rr = tt.merge(data, on='发布日期')
    ret[str(code)] = rr['市净率(倍)_y']
ret['发布日期'] = tt['发布日期']
```

