let navLinks = document.querySelectorAll('.header .navbar-nav li')

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = function () {
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active')
    }
    this.classList.add('active')
  }
}

let productLinks = document.querySelectorAll('.product .navbar-nav li')
let device = document.querySelectorAll('.devices')
let all = document.querySelectorAll('.product .all')
let phones = document.querySelectorAll('.product .phones')
let laptops = document.querySelectorAll('.product .laptops')
let computer = document.querySelectorAll('.product .computers')
let tablets = document.querySelectorAll('.product .tablets')
let right = document.querySelector('.product .space .right')
let left = document.querySelector('.product .space .left')
let listOne = ['all', 'phones', 'laptops', 'computers', 'tablets']
let listTwo = [all, phones, laptops, computer, tablets]
let listThree = [all[0], phones[0], laptops[0], computer[0], tablets[0]]

function active(element) {
  for (let i = 0; i < device.length; i++) {
    device[i].classList.remove('d-block')
    device[i].classList.add('d-none')
  }
  element[1].classList.remove('d-none')
  element[1].classList.add('d-block')
}

right.onclick = function () {
  for (let i = 0; i < listThree.length; i++) {
    if (listThree[i].classList.contains('active')) {
      listThree[i].classList.remove('active')
      if (i + 1 === listThree.length) {
        listThree[0].classList.add('active')
        active(listTwo[0])
        break
      } else {
        listThree[i + 1].classList.add('active')
        active(listTwo[i + 1])
        break
      }
    }
  }
}

left.onclick = function () {
  for (let i = 0; i < listThree.length; i++) {
    if (listThree[i].classList.contains('active')) {
      listThree[i].classList.remove('active')
      if (i - 1 < 0) {
        listThree[listThree.length - 1].classList.add('active')
        active(listTwo[listThree.length - 1])
        break
      } else {
        listThree[i - 1].classList.add('active')
        active(listTwo[i - 1])
        break
      }
    }
  }
}

for (let i = 0; i < productLinks.length; i++) {
  productLinks[i].onclick = function () {
    for (let j = 0; j < productLinks.length; j++) {
      productLinks[j].classList.remove('active')
    }
    this.classList.add('active')
    for (let i = 0; i < listOne.length; i++) {
      if (this.classList.contains(listOne[i])) {
        active(listTwo[i])
      }
    }
  }
}

let card = document.querySelectorAll('.product .box')

for (let i = 0; i < card.length; i++) {
  card[i].onclick = function () {
    if (card[i].classList.contains('active')) {
      for (let j = 0; j < card.length; j++) {
        card[j].classList.remove('active')
      }
    } else {
      for (let j = 0; j < card.length; j++) {
        card[j].classList.remove('active')
      }
      this.classList.add('active')
    }
  }
}

let storeDate = new Date('2-19-2001')
let repoUAE = new Date('5-15-2010')
let now = Date.now()
let storeHistory = ((now - storeDate) / 1000 / 60 / 60 / 24 / 365.25).toFixed()
let historyUAE = ((now - repoUAE) / 1000 / 60 / 60 / 24 / 365.25).toFixed()

export { storeHistory, historyUAE }

let setting = document.querySelector('.setting')

window.onscroll = function () {
  if (window.scrollY < 967) {
    setting.classList.remove('d-block')
    setting.classList.add('d-none')
  }
  if (window.scrollY >= 967) {
    setting.classList.remove('d-none')
    setting.classList.add('d-block')
  }
}

let content = document.querySelector('.setting .content')
let icon = document.querySelector('.setting .parent .icon')

icon.onclick = function () {
  if (content.classList.contains('true')) {
    content.classList.remove('true')
    content.style.right = '100%'
  } else {
    content.style.right = '0'
    content.classList.add('true')
  }
}

let thems = document.querySelectorAll('.setting .box ul li')

window.onload = function () {
  if (!localStorage.getItem('color')) {
    localStorage.setItem('color', 'lightGreen')
    document.styleSheets[6].insertRule(
      ':root {	--m-color: #00fff3; --s-color: #79dfc1;}',
      0,
    )
  } else {
    if (localStorage.getItem('color') === 'pink') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #7e00ff; --s-color: #6038a7;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'lightGreen') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #00fff3; --s-color: #79dfc1;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'lightBlue') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #5193ff; --s-color: #498eff;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'yellow') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {  --m-color: #f7cd00; --s-color: #dfba08;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'red') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #e91e63; --s-color: #e91e63;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'orange') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #ff3f00; --s-color: #dd3802;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'green') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {  --m-color: #00ff82; --s-color: #22f18b;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'darkBlue') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #0056ff; --s-color: #0643bb;}',
        0,
      )
    }
  }
}

for (let i = 0; i < thems.length; i++) {
  thems[i].onclick = function () {
    for (let j = 0; j < thems.length; j++) {
      thems[j].classList.remove('active')
    }
    this.classList.add('active')
    if (thems[i].classList.contains('active')) {
      if (thems[i].classList.contains('pink')) {
        localStorage.setItem('color', 'pink')
      } else if (thems[i].classList.contains('light-green')) {
        localStorage.setItem('color', 'lightGreen')
      } else if (thems[i].classList.contains('light-blue')) {
        localStorage.setItem('color', 'lightBlue')
      } else if (thems[i].classList.contains('yellow')) {
        localStorage.setItem('color', 'yellow')
      } else if (thems[i].classList.contains('red')) {
        localStorage.setItem('color', 'red')
      } else if (thems[i].classList.contains('orange')) {
        localStorage.setItem('color', 'orange')
      } else if (thems[i].classList.contains('green')) {
        localStorage.setItem('color', 'green')
      } else if (thems[i].classList.contains('dark-blue')) {
        localStorage.setItem('color', 'darkBlue')
      }
    }
    if (localStorage.getItem('color') === 'pink') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #7e00ff; --s-color: #6038a7;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'lightGreen') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #00fff3; --s-color: #79dfc1;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'lightBlue') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #5193ff; --s-color: #498eff;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'yellow') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {  --m-color: #f7cd00; --s-color: #dfba08;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'red') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #e91e63; --s-color: #e91e63;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'orange') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #ff3f00; --s-color: #dd3802;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'green') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {  --m-color: #00ff82; --s-color: #22f18b;}',
        0,
      )
    } else if (localStorage.getItem('color') === 'darkBlue') {
      document.styleSheets[6].deleteRule(0)
      document.styleSheets[6].insertRule(
        ':root {	--m-color: #0056ff; --s-color: #0643bb;}',
        0,
      )
    }
  }
}
