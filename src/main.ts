import './style.css'
import {canvasHandleHoc} from './canvasHandleHoc.js'
import cat from './assets/cat.jpg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
      <img src="${cat}" alt="" >
      <canvas id="canvasApp" width="250" height="250"></canvas>  
  </div>
`

canvasHandleHoc(document.querySelector<HTMLCanvasElement>('#canvasApp')!)
