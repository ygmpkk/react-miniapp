
const react_miniapp_obj = {
  onClick: function () {
    console.log('test click');
  }
}
const onLoad = react_miniapp_obj.onLoad
react_miniapp_obj.onLoad = function(args){
  if(onLoad !== void 666)
      onLoad.call(this,args)
}
Page(react_miniapp_obj)