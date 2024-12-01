const [leftBtn, rightBtn] = document.querySelectorAll('button')

rightBtn.onclick = () => ul.append(ul.firstElementChild)
leftBtn.onclick = () => ul.prepend(ul.lastElementChild)