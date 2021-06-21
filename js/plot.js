var chartDom = document.getElementById('totalHouseCount');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        left: 'left'
    },
    series: [
        {
            name: '成交總量',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 39887, name: '公寓' },
                { value: 33492, name: '華廈' },
                { value: 17515, name: '套房' },
                { value: 3502, name: '透天厝' },
                { value: 52085, name: '住宅大樓' }
            ]
        }
    ]
};
option && myChart.setOption(option);

//統計101-109每年各類型交易數量
var chartDom = document.getElementById('HouseCount');
var myChart1 = echarts.init(chartDom);
var option1;

option1 = {
    legend: {
        left: 'left'
    },
    tooltip: {
    },
    dataset: {
        source: [

            ["trans_year", "公寓", "華廈", "套房", "透天厝", "住宅大樓"],
            [102, 7550, 7333, 2554, 617, 8562],
            [103, 6749, 5345, 2161, 548, 5730],
            [104, 4939, 3855, 2024, 346, 5069],
            [105, 2604, 1966, 1175, 165, 4006],
            [106, 5130, 3529, 2901, 542, 7745],
            [107, 4031, 3372, 2117, 354, 6514],
            [108, 2736, 2358, 2044, 271, 6362],
            [109, 3828, 3829, 2159, 307, 5814]
        ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' }
    ]
};
option1 && myChart1.setOption(option1);

//地圖顯示
var chartDom2 = document.getElementById('TPEMAP');
var myChart2 = echarts.init(chartDom2);
var option2;


$.get('data/test.geojson', function (geoJson) {

    myChart2.hideLoading();

    echarts.registerMap('taipei', geoJson);

    myChart2.setOption(option2 = {
        title: {
            text: '107-109年初臺北市12區中古房屋平均價格 ',
            subtext: '（剔除車位價格 && 僅統計 公寓,華廈,套房,透天厝,住宅大樓 ）'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (單價，1坪)'
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            min: 450000,
            max: 840000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        },
        series: [
            {
                name: '臺北行政區平均房價',
                type: 'map',
                map: 'taipei', // 自定义扩展图表类型
                label: {
                    show: true
                },
                data: [
                    { name: '士林區', value: 560849.1719 },
                    { name: '大同區', value: 573924.7083 },
                    { name: '大安區', value: 830350.1167 },
                    { name: '中山區', value: 651411.7526 },
                    { name: '中正區', value: 771234.1965 },
                    { name: '信義區', value: 696069.8356 },
                    { name: '內湖區', value: 538153.0131 },
                    { name: '文山區', value: 463052.5719 },
                    { name: '北投區', value: 465089.6443 },
                    { name: '松山區', value: 695839.9553 },
                    { name: '南港區', value: 531929.828 },
                    { name: '萬華區', value: 490374.2858 }
                ],
                // 自定义名称映射
                nameMap: {
                    'shilin': '士林區',
                    'datong': '大同區',
                    'daan': '大安區',
                    'zhongshan': '中山區',
                    'zhongzhen': '中正區',
                    'xinyi': '信義區',
                    'neihu': '內湖區',
                    'beitou': '北投區',
                    'songshan': '松山區',
                    'nangang': '南港區',
                    'wenshan': '文山區',
                    'wanhua': '萬華區'
                }
            }
        ]
    });
});


var chartDom3 = document.getElementById('TPEMAP1');
var myChart3 = echarts.init(chartDom3);
var option3;


$.get('data/test.geojson', function (geoJson) {

    myChart3.hideLoading();

    echarts.registerMap('taipei', geoJson);

    myChart3.setOption(option3 = {
        title: {
            text: '102-109年臺北市12區中古房屋平均價格 ',
            subtext: '（剔除車位價格 && 僅統計 公寓,華廈,套房,透天厝,住宅大樓 ）'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (單價，1坪)'
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        visualMap: {
            min: 450000,
            max: 840000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
            }
        },
        series: [
            {
                name: '臺北行政區平均房價',
                type: 'map',
                map: 'taipei', // 自定义扩展图表类型
                label: {
                    show: true
                },
                data: [
                    { name: '士林區', value: 555150.5226 },
                    { name: '大同區', value: 546820.6071 },
                    { name: '大安區', value: 839820.6031 },
                    { name: '中山區', value: 649317.2679 },
                    { name: '中正區', value: 750829.6318 },
                    { name: '信義區', value: 700239.2584 },
                    { name: '內湖區', value: 536525.1179 },
                    { name: '文山區', value: 455655.6704 },
                    { name: '北投區', value: 455653.2357 },
                    { name: '松山區', value: 693567.3645 },
                    { name: '南港區', value: 534327.4187 },
                    { name: '萬華區', value: 464720.0558 }
                ],
                // 自定义名称映射
                nameMap: {
                    'shilin': '士林區',
                    'datong': '大同區',
                    'daan': '大安區',
                    'zhongshan': '中山區',
                    'zhongzhen': '中正區',
                    'xinyi': '信義區',
                    'neihu': '內湖區',
                    'beitou': '北投區',
                    'songshan': '松山區',
                    'nangang': '南港區',
                    'wenshan': '文山區',
                    'wanhua': '萬華區'
                }
            }
        ]
    });
});

// option3 && myChart3.setOption(option3);

var chartDom4 = document.getElementById('price');
var myChart4 = echarts.init(chartDom4);
var option4;

option4 = {
    title: {
        text: '價格區間',
        subtext: '單位：坪數'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['北投區', '大安區', '大同區', '南港區', '內湖區', '士林區', '松山區', '萬華區', '文山區', '信義區', '中山區', '中正區']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000, 2000000, 3000000, 4000000, 5000000, 10000000, 15000000, 20000000]

        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '北投區',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [70, 852, 1636, 3147, 3550, 3162, 1654, 473, 171, 56, 78, 22, 3, 2, '-', '-', '-']
        },
        {
            name: '大安區',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [8, 124, 366, 378, 437, 708, 1543, 2277, 2592, 1977, 2875, 54, 16, 3, 3, '-', '-']
        },
        {
            name: '大同區',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [25, 244, 245, 664, 1711, 1643, 1183, 543, 158, 47, 175, 18, '-', '-', 2, '-', '-']
        },
        {
            name: '南港區',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [16, 191, 285, 762, 1405, 1986, 1279, 628, 253, 44, 34, '-', '-', '-', '-', '-', '-']
        },
        {
            name: '內湖區',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [17, 352, 468, 1884, 4808, 4929, 3083, 1430, 489, 143, 139, 9, 1, '-', '-', '-', '-']
        }
        ,
        {
            name: '士林區',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [45, 328, 626, 1555, 2517, 2485, 1696, 959, 626, 334, 323, 17, 4, 1, 4, '-', '-']
        }
        ,
        {
            name: '松山區',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [21, 171, 311, 275, 509, 1366, 2663, 2193, 1081, 516, 628, 19, '-', 1, 2, '-', '-']
        }
        ,
        {
            name: '萬華區',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [33, 733, 1082, 2273, 2963, 2141, 1109, 416, 111, 31, 93, 23, 14, 5, 7, '-', '-']
        }
        ,
        {
            name: '文山區',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [38, 412, 981, 3847, 5812, 3407, 1257, 273, 30, 9, 47, 9, 1, '-', 1, '-', 1]
        }
        ,
        {
            name: '信義區',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [18, 168, 352, 487, 1073, 1918, 2040, 1540, 1035, 594, 1221, 28, 6, '-', '-', '-', '-']
        }
        ,
        {
            name: '中山區',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [14, 221, 400, 1007, 3291, 4780, 4687, 3394, 1889, 886, 1074, 43, 6, 6, 1, '-', 1]
        }
        ,
        {
            name: '中正區',
            type: 'line',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [11, 85, 206, 247, 630, 1250, 1442, 1525, 1014, 781, 1090, 35, 8, 1, 4, '-', '-']
        }
    ]
};

option4 && myChart4.setOption(option4);

var chartDom5 = document.getElementById('houseType');
var myChart5 = echarts.init(chartDom5);
var option5;

option5 = {
    title: {
        text: '102-109年初房間格局熱門TOP10',
        subtext: '單價/坪 面積/坪',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        bottom: 10,
        left: 'center'
    },
    series: [
        {
            type: 'pie',
            radius: [50, 140],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5
            },
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
                {
                    value: 9621,
                    name: '0房0廳0衛',
                    label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|平均房龄}{valueHead|平均單價}{valueHead|平均面積}',
                            '{hr|}',
                            '  {rate|18.64}{rate|730734.29}{rate|55.3}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            bg: {
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [10, 20, 0, 30],
                                align: 'center'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                color: '#333',
                                width: 20,
                                padding: [10, 20, 5, 30],
                                align: 'center'
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {
                    value: 2498, name: '1房0廳1衛',
                    label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|平均房龄}{valueHead|平均單價}{valueHead|平均面積}',
                            '{hr|}',
                            '  {rate|25.71}{rate|612244.54}{rate|12.74}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            bg: {
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [10, 20, 0, 30],
                                align: 'center'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                color: '#333',
                                width: 20,
                                padding: [10, 20, 5, 30],
                                align: 'center'
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {
                    value: 21154, name: '1房1廳1衛'
                    , label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|平均房龄}{valueHead|平均單價}{valueHead|平均面積}',
                            '{hr|}',
                            '  {rate|22.1}{rate|655435.53}{rate|15.16}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            bg: {
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [10, 20, 0, 30],
                                align: 'center'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                color: '#333',
                                width: 20,
                                padding: [10, 20, 5, 30],
                                align: 'center'
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {
                    value: 11285, name: '2房1廳1衛', label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|平均房龄}{valueHead|平均單價}{valueHead|平均面積}',
                            '{hr|}',
                            '  {rate|24.58}{rate|577796.87}{rate|21.97}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            bg: {
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [10, 20, 0, 30],
                                align: 'center'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                color: '#333',
                                width: 20,
                                padding: [10, 20, 5, 30],
                                align: 'center'
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {
                    value: 11192, name: '2房2廳1衛', label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|平均房龄}{valueHead|平均單價}{valueHead|平均面積}',
                            '{hr|}',
                            '  {rate|22.98}{rate|570891.35}{rate|26.12}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            bg: {
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [10, 20, 0, 30],
                                align: 'center'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                color: '#333',
                                width: 20,
                                padding: [10, 20, 5, 30],
                                align: 'center'
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {
                    value: 5337, name: '2房2廳2衛', label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|平均房龄}{valueHead|平均單價}{valueHead|平均面積}',
                            '{hr|}',
                            '  {rate|21.99}{rate|619771.44}{rate|37.52}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            bg: {
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [10, 20, 0, 30],
                                align: 'center'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                color: '#333',
                                width: 20,
                                padding: [10, 20, 5, 30],
                                align: 'center'
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {
                    value: 3762, name: '3房1廳1衛', label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|平均房龄}{valueHead|平均單價}{valueHead|平均面積}',
                            '{hr|}',
                            '  {rate|33.16}{rate|472124.55}{rate|25.54}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            bg: {
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [10, 20, 0, 30],
                                align: 'center'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                color: '#333',
                                width: 20,
                                padding: [10, 20, 5, 30],
                                align: 'center'
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {
                    value: 10353, name: '3房2廳1衛', label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|平均房龄}{valueHead|平均單價}{valueHead|平均面積}',
                            '{hr|}',
                            '  {rate|33.74}{rate|498912.52}{rate|28.75}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            bg: {
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [10, 20, 0, 30],
                                align: 'center'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                color: '#333',
                                width: 20,
                                padding: [10, 20, 5, 30],
                                align: 'center'
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {
                    value: 38214, name: '3房2廳2衛', label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|平均房龄}{valueHead|平均單價}{valueHead|平均面積}',
                            '{hr|}',
                            '  {rate|24.75}{rate|546581.29}{rate|41.46}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            bg: {
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [10, 20, 0, 30],
                                align: 'center'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                color: '#333',
                                width: 20,
                                padding: [10, 20, 5, 30],
                                align: 'center'
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
                {
                    value: 12546, name: '4房2廳2衛', label: {
                        formatter: [
                            '{title|{b}}{abg|}',
                            '  {weatherHead|平均房龄}{valueHead|平均單價}{valueHead|平均面積}',
                            '{hr|}',
                            '  {rate|22.16}{rate|581216.39}{rate|53.30}'
                        ].join('\n'),
                        backgroundColor: '#eee',
                        borderColor: '#777',
                        borderWidth: 1,
                        borderRadius: 4,
                        rich: {
                            title: {
                                color: '#eee',
                                align: 'center'
                            },
                            bg: {
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            abg: {
                                backgroundColor: '#333',
                                width: '100%',
                                align: 'right',
                                height: 25,
                                borderRadius: [4, 4, 0, 0]
                            },
                            weatherHead: {
                                color: '#333',
                                height: 24,
                                align: 'left'
                            },
                            hr: {
                                borderColor: '#777',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            value: {
                                width: 20,
                                padding: [10, 20, 0, 30],
                                align: 'center'
                            },
                            valueHead: {
                                color: '#333',
                                width: 20,
                                padding: [0, 20, 0, 30],
                                align: 'center'
                            },
                            rate: {
                                color: '#333',
                                width: 20,
                                padding: [10, 20, 5, 30],
                                align: 'center'
                            },
                            rateHead: {
                                color: '#333',
                                width: 40,
                                align: 'center',
                                padding: [0, 10, 0, 0]
                            }
                        }
                    }
                },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

option5 && myChart5.setOption(option5);

var chartDom6 = document.getElementById('priceLabel');
var myChart6 = echarts.init(chartDom6);
var option6;

option6 = {
    title: {
        text: '不同價格區間的特征關係',
        subtext: '捷運、醫院越靠近圆心表示越近 | 物業管理越靠近圓心表示越沒有管理'
    },
    legend: {
        data: ['捷運距離', '醫院距離', '物業管理']
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: '10,0000NTD', max: 2 },
            { name: '20,0000NTD', max: 2 },
            { name: '30,0000NTD', max: 2 },
            { name: '40,0000NTD', max: 2 },
            { name: '50,0000NTD', max: 2 },
            { name: '60,0000NTD', max: 2 },
            { name: '70,0000NTD', max: 2 },
            { name: '80,0000NTD', max: 2 },
            { name: '90,0000NTD', max: 2 },
            { name: '100,0000NTD', max: 2 },
            { name: '200,0000NTD', max: 2 },
            { name: '300,0000NTD', max: 2 },
            { name: '400,0000NTD', max: 2 },
            { name: '500,0000NTD', max: 2 },
            { name: '1000,0000NTD', max: 2 }
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        data: [
            {
                value: [0.630406685, 0.625355963, 0.624258367, 0.660701651, 0.53578727, 0.464840359, 0.399006375, 0.358614334, 0.339660855, 0.316032277, 0.33355769, 0.309318338, 0.521199868, 0.479868936, 0.965001717],
                name: '捷運距離'
            },
            {
                value: [1.646086797, 1.46081692, 1.471146541, 1.51251564, 1.165422129, 1.007420015, 0.884307522, 0.798152356, 0.773795372, 0.801119828, 0.841916905, 0.828926671, 0.765072129, 0.422071596, 1.229765939],
                name: '醫院距離'
            },
            {
                value: [0.38, 0.441707718, 0.355008787, 0.418406649, 0.544008598, 0.647478349, 0.721973684, 0.723529412, 0.730344379, 0.791510612, 0.685779817, 0.264367816, 0, 0, 0],
                name: '物業管理'
            }


        ]
    }]
};

option6 && myChart6.setOption(option6);


var chartDom7 = document.getElementById('totalYearPrice');
var myChart7 = echarts.init(chartDom7);
var option7;

setTimeout(function () {

    option7 = {
        title: {
            text: '',
        },
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '102', '103', '104', '105', '106', '107', '108', '109'],
                ['北投區', 464922.7, 462296.16, 463216.92, 463388.43, 422605.72, 454016.36, 471862.33, 471712.41],
                ['大安區', 880873.8, 883055.55, 828920.56, 840400.98, 791890.46, 826835.05, 832088.59, 832641.34],
                ['大同區', 519433.3, 580574.83, 527199.01, 528751.05, 527200.85, 552279.52, 586122.62, 582721.84],
                ['南港區', 535724.88, 558454.32, 511390.01, 513587.9, 516361.58, 519942.63, 526587.82, 549097.8],
                ['內湖區', 534095.28, 564507.98, 540097.54, 515847.82, 520642.26, 515889.45, 545152.02, 553419.72],
                ['士林區', 549333.72, 574753.36, 558363.64, 539694.19, 549254.43, 552878.3, 551932.15, 576315.63],
                ['松山區', 679231.51, 753506.6, 686246.56, 685202.83, 674897.31, 680178.94, 685285.11, 721608.13],
                ['萬華區', 418325.68, 449125.35, 461715.08, 500311.87, 468297.08, 492276.31, 480183.35, 497890.55],
                ['文山區', 440568.64, 475367.86, 455287.13, 452663.26, 456063.28, 454283.4, 458955.07, 475138.68],
                ['信義區', 717837, 752476.49, 691351.21, 659614.69, 664960.37, 685276.63, 699104.83, 703799.67],
                ['中山區', 637418.91, 664768.07, 694793.16, 630075.55, 639325.52, 631316.43, 646980.03, 674581.52],
                ['中正區', 733305.98, 742406.72, 723680.19, 715440.43, 779962.54, 794035.29, 746702.72, 770308.7]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },
            { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' } },

            {
                type: 'pie',
                id: 'pie',
                radius: [80, 150],
                center: ['50%', '30%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    formatter: '{b}: {@102} ({d}%)'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                encode: {
                    itemName: 'product',
                    value: '102',
                    tooltip: '102'
                }
            }
        ]
    };

    myChart7.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart7.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart7.setOption(option7);

});

option7 && myChart7.setOption(option7);
var app8 = {};

var chartDom8 = document.getElementById('saleHouseType');
var myChart8 = echarts.init(chartDom8);
var option8;

var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app8.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app8.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app8.config.rotate,
                align: app8.config.align,
                verticalAlign: app8.config.verticalAlign,
                position: app8.config.position,
                distance: app8.config.distance
            }
        };
        myChart8.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {
    show: true,
    position: app8.config.position,
    distance: app8.config.distance,
    align: app8.config.align,
    verticalAlign: app8.config.verticalAlign,
    rotate: app8.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 4,
    rich: {
        name: {
        }
    }
};

option8 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['北投區', '大安區', '大同區', '南港區', '內湖區', '士林區', '松山區', '萬華區', '文山區', '信義區', '中山區', '中正區']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            data: ['公寓', '華廈', '套房', '透天厝', '住宅大樓']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '北投區',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [4408, 4196, 1628, 506, 4057]
        },
        {
            name: '大安區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [2999, 3802, 1435, 116, 4913]
        },
        {
            name: '大同區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [1737, 1031, 968, 461, 2428]
        },
        {
            name: '南港區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [2001, 1580, 236, 85, 2631]
        },
        {
            name: '內湖區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [5043, 4382, 1132, 347, 6627]
        },
        {
            name: '士林區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [4770, 2745, 817, 395, 2674]
        },
        {
            name: '松山區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [2756, 2365, 1261, 90, 3261]
        },
        {
            name: '萬華區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [3088, 1010, 1418, 539, 4954]
        },
        {
            name: '文山區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [4714, 3734, 1258, 377, 5461]
        },
        {
            name: '信義區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [4013, 2050, 1016, 197, 3154]
        },
        {
            name: '中山區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [3264, 4826, 5085, 264, 7994]
        },
        {
            name: '中正區',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [1820, 1909, 1354, 203, 2896]
        }
    ]
};

option8 && myChart8.setOption(option8);
