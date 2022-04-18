module.exports = function PMT(interestRate, termsInMonths, presentValue, futureValue, type) {
    /*
     * interestRate   - interest rate per year
     * termsInMonths   - number of periods (months)
     * presentValue   - present value
     * futureValue   - future value
     * type - when the payments are due:
     *        0: end of the period, e.g. end of month (default)
     *        1: beginning of period
     */
    var pmt, presentValueif;

    futureValue || (futureValue = 0);
    type || (type = 0);

    if (interestRate === 0)
        return -(presentValue + futureValue)/termsInMonths;

    const interestRatePerMonth = (Math.pow((1+4/100),1/12)-1);    

    presentValueif = Math.pow(1 + interestRatePerMonth, termsInMonths);
    pmt = - interestRatePerMonth * (presentValue * presentValueif + futureValue) / (presentValueif - 1);

    if (type === 1)
        pmt /= (1 + interestRatePerMonth);

    return -pmt;
}