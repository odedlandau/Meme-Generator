'use strict'

const gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
const gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'politics', 'celeb'] },
    { id: 2, url: 'img/2.jpg', keywords: ['dog', 'cute'] },
    { id: 3, url: 'img/3.jpg', keywords: ['dog', 'cute', 'baby'] },
    { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby', 'cute'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'celeb'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'baby', 'cute'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'celeb', 'movie'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'baby', 'cute'] },
    { id: 10, url: 'img/10.jpg', keywords: ['politics', 'celeb'] },
    { id: 11, url: 'img/11.jpg', keywords: ['celeb', 'sport'] },
    { id: 12, url: 'img/12.jpg', keywords: ['celeb'] },
    { id: 13, url: 'img/13.jpg', keywords: ['celeb', 'movie'] },
    { id: 14, url: 'img/14.jpg', keywords: ['celeb', 'movie'] },
    { id: 15, url: 'img/15.jpg', keywords: ['celeb', 'TV'] },
    { id: 16, url: 'img/16.jpg', keywords: ['funny', 'TV'] },
    { id: 17, url: 'img/17.jpg', keywords: ['celeb', 'politics'] },
    { id: 18, url: 'img/18.jpg', keywords: ['funny', 'movie'] },
]

const gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Enter your line',
            fontSize: 30,
            align: 'center',
            font: 'impact',
            color: 'white',
            strokeColor: 'black',
            posX: gElCanvas.width / 2,
            posY: 50

        },
        {
            txt: 'Enter your line',
            fontSize: 30,
            align: 'center',
            font: 'impact',
            color: 'white',
            strokeColor: 'black',
            posX: gElCanvas.width / 2,
            posY: gElCanvas.height - 50
        }
    ]
}

let gFilterBy

function getImgs() {
    return gImgs
}

function setImg(id) {
    gMeme.selectedImgId = id
}

function setMeme() {
    return gMeme
}

function getUrlById(id) {
    const img = gImgs.find(img => id === img.id)
    return img.url
}

function setLineText(text) {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    currLine.txt = text
}

function switchLines() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
}

function changeFontSize(dif) {

    const currLine = gMeme.lines[gMeme.selectedLineIdx]

    currLine.fontSize += dif
    console.log(currLine.fontSize);
}

function addLine() {

    const newLine = {
        txt: 'Enter your line',
        fontSize: 30,
        align: 'center',
        font: 'impact',
        color: 'white',
        strokeColor: 'black',
        posX: gElCanvas.width / 2,
        posY: gElCanvas.height / 2
    }

    gMeme.lines.unshift(newLine)

}

function removeLine() {
    if (gMeme.lines.length === 0) return

    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setStrokeColor(color){
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color 
}

function setFont(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function setAlign(direction) {
    gMeme.lines[gMeme.selectedLineIdx].align = direction
}

function setFilterBy(filterBy) {
    gFilterBy = filterBy
}

function moveLine(direction) {

        if (direction === 'up') {
        gMeme.lines[gMeme.selectedLineIdx].posY -= 10
    } else {
        gMeme.lines[gMeme.selectedLineIdx].posY += 10
    }
    console.log(gMeme.lines[gMeme.selectedLineIdx].posY);
}

function getMeme() {
    return gMeme
}