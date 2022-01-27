import { Component } from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { AtInput } from 'taro-ui'
import swiper_1 from '../../assets/images/swiper/swiper_01.png'
import swiper_2 from '../../assets/images/swiper/swiper_02.png'
import swiper_3 from '../../assets/images/swiper/swiper_03.png'
import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      keyWord: '',
      listData: [{
        name: '就地过年来打寒假工',
        comp: '养猪场',
        state: 0,
        desc: '非常好的一个养生岗位，等待着你的加入哦！',
        salary: '4000元/月'
      }, {
        name: '高考毕业来打暑假工',
        comp: '电子厂',
        state: 1,
        desc: '电子厂里包吃包住',
        salary: '5000元/月'
      }, {
        name: '佛系的服务员',
        comp: '和平饭店',
        state: 0,
        desc: '钱多事少离家近',
        salary: '3000元/月'
      }, {
        name: '在家做不露脸语音主播',
        comp: '家里',
        state: 1,
        desc: '时间自由，收入自己决定',
        salary: '6000元/月'
      }, {
        name: '寒假工',
        comp: '养猪场',
        state: 0,
        desc: '非常好的一个养生岗位，等待着你的加入哦！',
        salary: '4000元/月'
      }, {
        name: '暑假工',
        comp: '电子厂',
        state: 1,
        desc: '电子厂里包吃包住',
        salary: '5000元/月'
      }, {
        name: '寒假工',
        comp: '养猪场',
        state: 0,
        desc: '非常好的一个养生岗位，等待着你的加入哦！',
        salary: '4000元/月'
      }, {
        name: '暑假工',
        comp: '电子厂',
        state: 1,
        desc: '电子厂里包吃包住',
        salary: '5000元/月'
      }]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // 选中岗位
  _chooseBrand(item) {
    console.log(item)
  }
  
  // 输入框值变化
  handleChange (value) {
    this.setState({
      keyWord: value
    })
  }

  static config = {
    navigationStyle: 'custom'
  }

  render () {
    let { listData, keyWord } = this.state
    return (
      <View className='index-page'>
        <View className='search-box'>
          <View className='address'>南昌</View>
          <AtInput
            type='text'
            placeholder='请输入职位关键字'
            value={keyWord}
            onChange={this.handleChange.bind(this)}
          />
          <View className='search-button'>
            搜索
          </View>
        </View>
        <Swiper
          className='top-swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          interval='2000'
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className='swiper-image'>
              <Image src={swiper_1} mode={'aspectFill'}></Image>
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper-image'>
              <Image src={swiper_2} mode={'aspectFill'}></Image>
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiper-image'>
              <Image src={swiper_3} mode={'aspectFill'}></Image>
            </View>
          </SwiperItem>
        </Swiper>
        <View className='list-title'>
          职位精选
        </View>
        {
          listData.map((item) => {
            return (
              <View key={item} className='list-item' onClick={() => this._chooseBrand(item)}>
                <View className='left-box'>
                  <View className='text-title'>{item.name}</View>
                  <View className='text-desc'>
                    <i className='iconfont liht-dizhi'></i>
                    工作地点：{item.comp}
                  </View>
                  <View className='text-desc'>{item.desc}</View>
                </View>
                <View className='right-box'>
                  <View className='text-money'>{item.salary}</View>
                  <View className='state-tag'>{item.state === 1 ? '立即报名' : '已截止'}</View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}
