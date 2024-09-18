export function canvasHandleHoc(element: HTMLCanvasElement) {
    // 必能选中
    let ctx = element.getContext('2d')!;
    ctx.beginPath()
    let origin = element
    // //  缩放
    // let scale = 1 //  图片缩放比例
    // let dx = 0 //  图片偏移 x
    // let dy = 0//  图片偏移 y
    // let dw = origin.width
    // let dh = origin.height
    //  裁剪位置
    let initX = 50
    let initY = 50
    let endX = origin.width - initX
    let endY = origin.height - initY
    // let img = {
    //     width: 250,
    //     height: 250,
    // }
    Object.assign(element.style, {
        // backgroundColor: '#d5d5d5',
        position: 'absolute',
        left: 50 + '%',
        top: 50 + '%',
        transform: 'translate(-50%, -50%)',
    })

//  绘制裁剪控制图像
    function drawOperatingLine(): void {
        // 先清除 内容
        ctx.clearRect(0, 0, origin.width, origin.height)
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.fillRect(0, 0, origin.width, initY);
        ctx.fillRect(0, endY, origin.width, origin.height - initY);
        ctx.fillRect(0, initY, initX, endY - initY);
        ctx.fillRect(endX, initY, origin.width - endX, endY - initY);
        ctx.restore()
        // 边缘线
        ctx.save()
        ctx.strokeStyle = 'red';
        ctx.setLineDash([5, 5])
        ctx.moveTo(initX, initY);
        ctx.lineTo(endX, initY);
        ctx.lineTo(endX, endY);
        ctx.lineTo(initX, endY);
        ctx.closePath();
        ctx.stroke();
        // 矩形四周点
        ctx.fillStyle = '#fff';
        ctx.fillRect(initX - 5, initY - 5, 10, 10);
        ctx.fillRect(endX - 5, initY - 5, 10, 10);
        ctx.fillRect(endX - 5, endY - 5, 10, 10);
        ctx.fillRect(initX - 5, endY - 5, 10, 10);
        ctx.beginPath();
        ctx.restore()
    }

    drawOperatingLine()
    element.addEventListener('touchstart', (e) => {
        console.log(e, '====>e')
    })
    element.addEventListener('touchmove', (e) => {
        console.log(e, '====>e')
        // draw(e)
    })
    element.addEventListener('touchend', (e) => {
        console.log(e, '====>e')
    })
}

