export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#555',
    selectedColor: '#d81e06',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [{
      pagePath: 'pages/index/index',
      text: '้ฆ้กต',
      iconPath: './assets/images/tab/tabbar-market.png',
      selectedIconPath: './assets/images/tab/tabbar-market-active.png'
    }, {
      pagePath: 'pages/user/index',
      text: 'ๆ็',
      iconPath: './assets/images/tab/tabbar-icon-wode.png',
      selectedIconPath: './assets/images/tab/tabbar-icon-wode-active.png'
    }]
  }
})
