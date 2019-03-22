import React from 'react'
import { PositionPicker } from 'react-amapui-wrapper'

class PositionPickerTest extends PositionPicker {

  // render AllPage
  initPage(PositionPicker,$) {
    this[this.instanceName] = new PositionPicker({
      eventSupport: true,
      mode:'dragMap',//设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
      map:this.map,//依赖地图对象
      iconStyle:{//自定义外观
        url:'//webapi.amap.com/ui/1.0/assets/position-picker2.png',//图片地址
        size:[48,48],  //要显示的点大小，将缩放图片
        ancher:[24,40],//锚点的位置，即被size缩放之后，图片的什么位置作为选中的位置
      }
    })
    this.positionPicker.start(this.map.getBounds().getSouthWest())

    this.positionPicker.on('success', function(positionResult) {
      console.log('success',positionResult)
      document.getElementById('lnglat').innerHTML = positionResult.position;
      document.getElementById('address').innerHTML = positionResult.address;
      document.getElementById('nearestJunction').innerHTML = positionResult.nearestJunction;
      document.getElementById('nearestRoad').innerHTML = positionResult.nearestRoad;
      document.getElementById('nearestPOI').innerHTML = positionResult.nearestPOI;
    });
    this.positionPicker.on('fail', function(positionResult) {
      console.log('fail',positionResult)
      document.getElementById('lnglat').innerHTML = ' ';
      document.getElementById('address').innerHTML = ' ';
      document.getElementById('nearestJunction').innerHTML = ' ';
      document.getElementById('nearestRoad').innerHTML = ' ';
      document.getElementById('nearestPOI').innerHTML = ' ';
    });
  }
}

export default PositionPickerTest
