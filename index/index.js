Page({
  onLoad(){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data:{
        city:'厦门',
      },
      success:(res)=>{
        console.log(res)
      }
    })
  }
})

