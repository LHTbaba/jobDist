import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtNoticebar, AtCountdown, AtList, AtListItem, AtAccordion } from 'taro-ui'
import avatar from '../../assets/images/user/avatar.png'
import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      open: true,
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value) {
    this.setState({
      open: value
    })
  }
  render () {
    return (
      <View className='user-page'>
        <View className='header-image'>
          <Image src={avatar} />
          <Text>大冤种</Text>
        </View>
        <AtNoticebar icon='volume-plus' marquee>
          大冤种，你的会员即将到期，快充钱，充钱才能更强！
        </AtNoticebar>
        <View className='count-time'>
          <Text className='text-title'>会员到期倒计时：</Text>
          <AtCountdown
            isCard
            isShowDay
            day={2}
            hours={3}
            minutes={1}
            seconds={10}
          />
        </View>
        <AtList>
          <AtListItem
            title='充钱入口'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='钻石会员权限'
            note='穷逼点不进来，给你禁用了'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
        </AtList>
        <AtAccordion
          open={this.state.open}
          onClick={this.handleClick.bind(this)}
          title='收纳功能'
        >
          <AtList hasBorder={false}>
            <AtListItem
              title='还是充钱入口'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='学校招工'
              note='校门口蹲点'
              extraText='点击了解'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>
        </AtAccordion>
      </View>
    )
  }
}
