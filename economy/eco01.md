## CPI指数

<canvas id="chart01"></canvas>

<script>
loadData('/economy/CPI.csv')(drawTimeSeries({

        el: 'chart01',
        labels: ['CPI'],
        label_text: ['CPI指数'],
        title: 'CPI指数',
        x: data => data.map(_ => new Date(_['日期'])),

}))

