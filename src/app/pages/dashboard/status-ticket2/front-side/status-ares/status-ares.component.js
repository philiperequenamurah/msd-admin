"use strict";
exports.__esModule = true;
var operators_1 = require("rxjs/operators");
var points = [300, 520, 435, 530, 730, 620, 660, 860];
var StatusAresComponent = /** @class */ (function () {
    function StatusAresComponent(theme, layoutService) {
        var _this = this;
        this.theme = theme;
        this.layoutService = layoutService;
        this.alive = true;
        this.option = {};
        this.layoutService.onChangeLayoutSize()
            .pipe(operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function () { return _this.resizeChart(); });
    }
    StatusAresComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.theme.getJsTheme()
            .pipe(operators_1.delay(1), operators_1.takeWhile(function () { return _this.alive; }))
            .subscribe(function (config) {
            var trafficTheme = config.variables.traffic;
            _this.option = Object.assign({}, {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: points
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: trafficTheme.colorBlack,
                            opacity: 0.06,
                            width: '1'
                        }
                    }
                },
                tooltip: {
                    axisPointer: {
                        type: 'shadow'
                    },
                    textStyle: {
                        color: trafficTheme.tooltipTextColor,
                        fontWeight: trafficTheme.tooltipFontWeight,
                        fontSize: 16
                    },
                    position: 'top',
                    backgroundColor: trafficTheme.tooltipBg,
                    borderColor: trafficTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '$ {c0}',
                    extraCssText: trafficTheme.tooltipExtraCss
                },
                series: [
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 8,
                        sampling: 'average',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: trafficTheme.shadowLineDarkBg
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)',
                                borderColor: 'rgba(0,0,0,0)',
                                borderWidth: 0
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.shadowLineDarkBg
                            }
                        },
                        data: points.map(function (p) { return p - 15; })
                    },
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 6,
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: trafficTheme.itemColor,
                                borderColor: trafficTheme.itemBorderColor,
                                borderWidth: 2
                            },
                            emphasis: {
                                color: 'white',
                                borderColor: trafficTheme.itemEmphasisBorderColor,
                                borderWidth: 2
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.lineBg,
                                shadowColor: trafficTheme.lineBg,
                                shadowBlur: trafficTheme.lineShadowBlur
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: trafficTheme.gradFrom
                                    }, {
                                        offset: 1,
                                        color: trafficTheme.gradTo
                                    }]),
                                opacity: 1
                            }
                        },
                        data: points
                    },
                ]
            });
        });
    };
    StatusAresComponent.prototype.onChartInit = function (echarts) {
        this.echartsIntance = echarts;
    };
    StatusAresComponent.prototype.resizeChart = function () {
        if (this.echartsIntance) {
            this.echartsIntance.resize();
        }
    };
    StatusAresComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    StatusAresComponent.prototype.ngOnInit = function () {
        this.alive = true;
    };
    return StatusAresComponent;
}());
exports.StatusAresComponent = StatusAresComponent;
