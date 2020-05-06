//隱藏互動方塊
let modal = document.querySelector('.modal')
let open = document.querySelectorAll('.open-modal')
let close = document.querySelector('.close-modal')

//開啟內容方塊
//querySelectorAll會將資料存為類陣列(NodeList)
for (i = 0;i < open.length;i++){
    open[i].addEventListener('click',function(){
    modal.style.display = 'block'
})
}

//關閉內容方塊
close.addEventListener('click',function(){
    modal.style.display = 'none'
})

//點到方塊外的地方就關閉方塊
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none'
    }
}

//收合式側邊欄
let SideMenu = document.querySelector('.side-menu')
let OpenTag = document.querySelector('.open-tag')
let switcher = document.querySelector('.switch')

OpenTag.addEventListener('click',function(){
    if (switcher.value == 0){
        SideMenu.classList.add('menu-switch-on')
        SideMenu.classList.remove('menu-switch-off')
        switcher.value = 1
    }else if(switcher.value == 1){
        SideMenu.classList.add('menu-switch-off')
        SideMenu.classList.remove('menu-switch-on')
        switcher.value = 0
    }
    console.log(switcher.value)
    return switcher.value
})