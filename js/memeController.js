'use strict'

const gElCanvas = document.querySelector('#canvas')
const gCtx = gElCanvas.getContext('2d')

function renderMeme() {
    // gElCanvas = document.querySelector('#canvas')
    // gCtx = gElCanvas.getContext('2d')
    const meme = setMeme()

    renderImg(meme)
    renderTextOnInput()
}

function renderImg(meme) {
    const imgUrl = getUrlById(meme.selectedImgId)
    const img = new Image
    img.src = `../${imgUrl}`

    img.onload = () => {

        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawLines(meme.lines)
    }
}

function drawLines(lines) {
    lines.forEach(line => drawText(line.align, line.txt, line.fontSize, line.color, line.font, line.strokeColor, line.posX, line.posY))
    // lines.forEach(line => console.log(line.posY))
}

function drawText(align, text, fontSize, color, font, stroke, posX, posY) {

    gCtx.beginPath()
    gCtx.textAlign = align
    gCtx.font = `${fontSize}px ${font}`
    gCtx.fillStyle = color
    gCtx.fillText(text, posX, posY)
    gCtx.strokeStyle = stroke
    gCtx.strokeText(text, posX, posY)
    gCtx.closePath()
}

function onSetLineText(text) {
    setLineText(text)
    renderMeme()
}

function onSwitchLine() {
    switchLines()
    renderMeme()
    renderTextOnInput()
}

function onChangeFontSize(dif) {
    changeFontSize(dif)
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
}

function onSetColor(color) {
    setColor(color)
    renderMeme()
}

function onSetStrokeColor(color) {
    setStrokeColor(color)
    renderMeme()
}

function onSetFont(font) {
    setFont(font)
    renderMeme()
}

function onMoveLine(direction) {

    moveLine(direction)
    renderMeme()
}

function onSetAlign(align) {
    console.log(align);
    setAlign(align)
    // setAlignPos()
    renderMeme()
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'meme'
}

function renderTextOnInput() {
    const meme = getMeme()
    const selectedLine = meme.lines[meme.selectedLineIdx]
    const elTextInput = document.querySelector('input[name="text-line-input"]')
    elTextInput.value = selectedLine.txt
}
