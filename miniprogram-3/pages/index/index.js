// index.js
// 获取应用实例
const util = require('../../utils/util.js')
const bk=wx.getBackgroundAudioManager()
var sign=0;
var arrayUrl=[
  "https://cx-sycdn.kuwo.cn/0c3f21d4ffcedd51faa797483283a677/63258951/resource/n1/1/34/3922880714.mp3",
  "https://cz-sycdn.kuwo.cn/81605c4e290b67f01d160c6a1b859656/632581e3/resource/n1/11/36/3433234841.mp3",
"https://cx-sycdn.kuwo.cn/4d02bef1bdfe183d41e186657a2089ea/63258ad4/resource/n1/1/34/3922880714.mp3",
"https://ct-sycdn.kuwo.cn/794a30adc1386793186fd4cba5696a45/63258614/resource/n2/74/92/3575830812.mp3"
]
var arrayTitle=[
  "风声",
  "雨声",
  "麦浪声",
  "海浪声",
]

Page({
  data: {
    color:'white',
    bgColor:'black',
    Time:'',
  },
  changeColor:function(){

    wx.setNavigationBarColor({
      backgroundColor: '#ffffff',
      frontColor: '#000000',
    })

    // playMusic:function({
    // })
    

    
    if(this.data.color=='white'){
      this.setData({
        color:'black',
        bgColor:'white',
      })
    }else{
      wx.setNavigationBarColor({
        backgroundColor: '#000000',
        frontColor: '#ffffff',
      })
      this.setData({
        color:'white',
        bgColor:'black'
      })
      
    }
    
  },
  backMusic:function(){
    this.changeColor();
    if(sign<3){
    sign=sign+1;
    }else{
      sign=0;
    }
    player();
    function player(){
      
      bk.title=arrayTitle[sign];
      bk.src=arrayUrl[sign];
      console.log(bk.src);
      bk.onEnded(()=>{
        player();
      })
    }
  },
  
  onLoad:function(options){
    wx.setKeepScreenOn({
      keepScreenOn: true,
    })
    var that = this;
    
    setInterval(function(){
        that.setData({
            Time: util.formatTime(new Date()),
        });    

    },1000);    
  }
  
})
