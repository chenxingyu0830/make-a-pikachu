! function () {
  var duration = 50
  function writeCode(code, prefix) {
    let container = document.querySelector('#code')
    let codeStyle = document.querySelector('#code-style')
    let n = 0
    let id
    return new Promise((resolve) => {
      id = setTimeout(write, duration)
      function write(){
        n += 1
        container.innerHTML = code.substring(0, n)
        codeStyle.innerHTML = code.substring(0, n)
        container.scrollTop = container.scrollHeight
        if (n < code.length) {
          id = setTimeout(write, duration)
        }
      }
    })
  }
  let code = `
/*
 * 首先，需要准备皮卡丘的外貌颜色 
 */  
.preview{
  height: 100%;
  border: 1px solid green;
  background: #FFE600;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper{
  width: 100%;
  height: 165px;
  position: relative; 
}
/*
 * 接下来，来画一下皮卡丘的鼻子
 */  
.nose{
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 10px 13px;
  border-color: black transparent transparent;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translate(-50%);
}
/*
 * 接下来，来画一下皮卡丘的眼睛
 */  
.eye{
  width: 49px;
  height: 49px;
  background: #2E2E2E;
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
}
.eye::before{
  content: '';
  display: block;
  background: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
  left: 5px;
}
/* 摆正左眼和右眼的位置 */
.eye.left{
  right: 50%;
  margin-right: 57px;
}
.eye.right{
  left: 50%;
  margin-left: 57px;
}
/*
 * 接下来，画皮卡丘的酒窝
 */  
.face{
  width: 68px;
  height: 68px;
  background: #FF0000;
  border-radius: 50%;
  border: 2px solid black;
  position: absolute;
  top: 85px;
}
/* 摆正左酒窝和右酒窝的位置 */
.face.left{
  right: 50%;
  margin-right: 90px;
}
.face.right{
  left: 50%;
  margin-left: 90px;
}
/*
* 然后，来画一下皮卡丘的嘴唇
*/  
.upperLip{
  height: 20px;
  width: 63px;
  border: 3px solid black;
  background: #FFE600;
  position: absolute;
  top: 49px;
}
.upperLip.left{
  border-bottom-left-radius: 60px 30px;
  transform: rotate(-20deg);
  border-top: none;
  border-right: none;
  right: 50%;
}
.upperLip.right{
  border-bottom-right-radius: 60px 30px;
  transform: rotate(20deg);
  border-top: none;
  border-left: none;
  left: 50%;
}
/*
 * 最后，来画一下皮卡丘的舌头
 */  
.LowerLip-wrapper{
  position: absolute;
  bottom: -20px;
  left: 50%;
  margin-left: -70px;
  height: 127px;
  width: 300px;
  overflow: hidden;
}
.LowerLip{
  height: 2000px;
  width: 140px;
  background: #9B000A;
  border-radius: 100px/500px;
  border: 3px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
.LowerLip::before{
  content: '';
  position: absolute;
  bottom: -24px;
  left: 8px;
  width: 120px;
  height: 120px;
  background: #FF485F;
  border-radius: 50%;
}

/*
 * 好了，这只皮卡丘已经画完了
 * 希望你能喜欢~
 */ 
`
  writeCode(code, '')

  $('.actions').on('click', 'button', function(e){
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    console.log(speed)
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch(speed){
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })
}.call()