describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
it('should not add a server if the name is empty', function(){
  serverNameInput.value = '';
  submitServerInfo()
expect(Object.keys(allServers).length).toEqual(0)
})
it('should add to the t body', function (){
  submitServerInfo()
  updateServerTable()
  let testTb = document.querySelectorAll('#serverTable tbody tr td');
  expect(testTb.length).toEqual(2)
  expect(testTb[0].innerText).toEqual('Alice');
  expect(testTb[1].innerText).toEqual('$0.00');
})
  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    serverTbody.innerHTML=''
    allServers = {};
  });
});
