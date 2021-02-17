describe("Testing the payment input", function(){

    beforeEach(function(){
        billAmtInput.value = 200;
        tipAmtInput.value = 20;
    })
    it('should calculate thr correct amount', function(){
        submitPaymentInfo()
        expect(Object.keys(allPayments).length).toEqual(1)
    })

    it('should append to the table', function (){
        let current = createCurPayment()
        allPayments['payment 1']=current;
        appendPaymentTable(current)
        let payTb = document.querySelectorAll('#paymentTable tbody tr td')

        expect(payTb.length).toEqual(3)
        expect(payTb[0].innerText).toEqual('$200')
        expect(payTb[1].innerText).toEqual('$20')
        expect(payTb[2].innerText).toEqual('10%')
    })

    it('should not enter with empty inputs', function(){
        billAmtInput.value='';
        tipAmtInput.value = '';
        let cuurent = createCurPayment()

        expect(cuurent).toEqual(undefined)
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