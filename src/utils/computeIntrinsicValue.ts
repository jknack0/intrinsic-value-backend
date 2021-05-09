const computeIntrinsicValue = (years: number, epsTtm: number, growthRate: number, minimumReturn: number, marginOfSafety: number, peRatio: number): number => {
    const epsGrowthList: number[] = [];
    epsGrowthList.push(epsTtm);
    for(let previousYear = 0; previousYear < years - 1; previousYear++) {
        const forecastedEpsGrowth = epsGrowthList[previousYear] + (epsGrowthList[previousYear] * growthRate);
        epsGrowthList.push(forecastedEpsGrowth);
    }

    const stockPriceGrowthList: number[] = [];
    stockPriceGrowthList.push(epsGrowthList[years - 1] * peRatio);
    for(let previousYear = 0; previousYear < years - 1; previousYear++) {
        const forcastedStockPrice = stockPriceGrowthList[previousYear] / (1 + minimumReturn);
        stockPriceGrowthList.push(forcastedStockPrice);
    }

    return stockPriceGrowthList[years - 1] * marginOfSafety;
};

export default computeIntrinsicValue;