import React,{ Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Map as Amap } from 'react-amap'
import { Wrapper, PositionPicker } from 'react-amapui-wrapper'
import Picker from './PositionPicker'

class Insert extends PositionPicker {
  componentWillMount() {
    this.instanceName = 'sg'
  }
}


class MapUIComponent extends Component {
  render() {
    const useAMapUI = true
    return (
      <Fragment>
    <div style={{ width:'600px', height:'400px' }}>
      <Amap useAMapUI = {useAMapUI}>
        <Wrapper>
          <Picker
            events = {{}}
            initialAdcode={100000}
            eventSupport = {true}
            instanceName = {'PositionPicker'}
          />
        </Wrapper>
      </Amap>
     </div>
      <div>
        <button id='start'>开始选点</button>
        <button id='stop'>关闭选点</button>
      </div>
      <div>
        <div class='title'>选址结果</div>
        <div class='c'>经纬度:</div>
        <div id='lnglat'></div>
        <div class='c'>地址:</div>
        <div id='address'></div>
        <div class='c'>最近的路口:</div>
        <div id='nearestJunction'></div>
        <div class='c'>最近的路:</div>
        <div id='nearestRoad'></div>
        <div class='c'>最近的POI:</div>
        <div id='nearestPOI'></div>
      </div>
    </Fragment>
    )
  }
}

export default MapUIComponent
