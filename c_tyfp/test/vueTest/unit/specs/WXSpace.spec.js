// import WXSpace from '../../../../client/mobile/home/page/WXSpace.vue'
import MainPage from '../../../../client/mobile/home/page/MainPage.vue'

describe('WXSpace',function(){
  it('has a created hook',function(){
    expect(MainPage.created).to.be.an.instanceof(Function)
  });

  it('sets the correct default data',function(){
    var defaultData=MainPage.data();
    expect(defaultData.isShowDOM).to.be.an.false;
  });
});

