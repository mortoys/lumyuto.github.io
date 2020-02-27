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
<canvas id="chart04"></canvas>

<script>
loadData('/index/size/Price.csv')(drawTimeSeries({

        el: 'chart01',
        labels: ['801003', '801001', '801300', '801002', '801005'],
        label_text: ['801003 申万Ａ指', '801001 申万50', '801300 申万300指数', '801002 申万中小板', '801005 申万创业板'],
        title: '价格',
        x: data => data.map(_ => new Date(_['发布日期'])),

}))

loadData('/index/size/PE.csv')(drawTimeSeries({

        el: 'chart02',
        labels: ['801003', '801001', '801300', '801002', '801005'],
        label_text: ['801003 申万Ａ指', '801001 申万50', '801300 申万300指数', '801002 申万中小板', '801005 申万创业板'],
        title: '市盈率',
        x: data => data.map(_ => new Date(_['发布日期'])),

}))

loadData('/index/size/PB.csv')(drawTimeSeries({

        el: 'chart03',
        labels: ['801003', '801001', '801300', '801002', '801005'],
        label_text: ['801003 申万Ａ指', '801001 申万50', '801300 申万300指数', '801002 申万中小板', '801005 申万创业板'],
        title: '市净率',
        x: data => data.map(_ => new Date(_['发布日期'])),

}))

loadData('/index/size/beta.csv')(drawTimeSeries({

        el: 'chart04',
        labels: ['801003', '801001', '801300', '801002', '801005'],
        label_text: ['801003 申万Ａ指', '801001 申万50', '801300 申万300指数', '801002 申万中小板', '801005 申万创业板'],
        title: 'Beta',
        x: data => data.map(_ => new Date(_['发布日期'])),

}))
</script>

``` python
ret = {}
tt = pd.read_csv(root+str(801003)+'.csv')
for code in [801001, 801002, 801003, 801005, 801300]:
    data = pd.read_csv(root+str(code)+'.csv')
    rr = tt.merge(data, on='发布日期')
    ret[str(code)] = rr['涨跌幅(%)_y']
# ret['发布日期'] = tt['发布日期']
data = pd.DataFrame(ret)
data = np.log(data/100+1)
data.index = tt['发布日期']
```

``` python
m = data.loc[:,['801003','801300']][::-1].rolling(120).cov().unstack()
beta = (m.iloc[:,0] / m.iloc[:,1])
```

