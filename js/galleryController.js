'use strict'


function onInit() {
    renderGallery()
}

function renderGallery() {
    const imgs = getImgsForDisplay()
    let strHTML = ``
    strHTML = imgs.map(img => strHTML = `<img class="img" onclick="onImgSelect(${img.id})" src=${img.url}>`)

    document.querySelector('.gallery-container').innerHTML = strHTML.join('')
}

function onImgSelect(id) {
    openEditor()
    setImg(id)
    renderMeme()
}

function openEditor() {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'flex'
}

function openGallery() {
    document.querySelector('.gallery').style.display = 'block'
    document.querySelector('.editor').style.display = 'none'
}

function onSetFilterBy(filterBy) {
    setFilterBy(filterBy)
    renderGallery()
}

function getImgsForDisplay() {
   
    if (!gFilterBy) return gImgs
    return gImgs.filter(img => img.keywords.find(keyword => keyword.toLowerCase().includes(gFilterBy.toLowerCase())))
}