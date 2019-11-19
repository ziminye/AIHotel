//调用函数要加this
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper_image: [
      { url: "https://tse1-mm.cn.bing.net/th?id=OIP.NF593eHOnkc7YhgdLKw3wAHaEo&w=299&h=187&c=7&o=5&dpr=1.5&pid=1.7" },
      { url: "https://tse1-mm.cn.bing.net/th?id=OIP.40oD-cQJObpcP3APtTHZnQHaD8&w=300&h=159&c=7&o=5&dpr=1.5&pid=1.7" },
      { url: "https://tse1-mm.cn.bing.net/th?id=OIP.40oD-cQJObpcP3APtTHZnQHaD8&w=300&h=159&c=7&o=5&dpr=1.5&pid=1.7" }
    ],
    CheckInDate :'2019-11-15',
    CheckOutDate: '2019-11-16',
    region: ['湖南省','长沙市','雨花区'],
    isAgree: false,
    checkInTime: '1'
  },
  countTime: function () {
    var start_date=new Date(this.data.CheckInDate.replace(/-/g, "/"));
    var end_date = new Date(this.data.CheckOutDate  .replace(/-/g, "/"));
    var days = end_date.getTime() - start_date.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    console.log(day)
    if (day > 0) {
      this.setData({
        checkInTime: day
      })
    } else {

      }
  },
  bindCheckInDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      CheckInDate: e.detail.value
    })
  },
  bindCheckOutDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      CheckOutDate: e.detail.value
    })
    this.countTime()
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})