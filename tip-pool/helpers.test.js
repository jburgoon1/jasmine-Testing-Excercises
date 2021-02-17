describe('testing the helpers', function(){
    beforeEach(function(){
        billAmtInput.value = 200
        tipAmtInput.value = 20
        submitPaymentInfo()
        calculateTipPercent()
    })
    it('should add tips correctly', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20)
        billAmtInput.value = 300
        tipAmtInput.value = 30
        submitPaymentInfo()
        expect(sumPaymentTotal('tipAmt')).toEqual(50)
    })
    it('should add total correctly', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(200)
        billAmtInput.value = 300
        tipAmtInput.value = 30
        submitPaymentInfo()
        expect(sumPaymentTotal('billAmt')).toEqual(500)
    })
    it('should add percentage correctly', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(10)
        billAmtInput.value = 300
        tipAmtInput.value = 30
        submitPaymentInfo()
        calculateTipPercent()
        expect(sumPaymentTotal('tipPercent')).toEqual(20)
    })
    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
})