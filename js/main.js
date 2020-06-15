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

$(document).ready(function(e){
    //判斷點擊的方塊決定顯示的內容
    $(document).on('click',function(e){
        if(e.target == $('.open-modal')[0]){
            $('span.content').html('<iframe class="iframe" src="https://maxyeh666.github.io/Todolist-localstorage-/" frameborder="0"></iframe>')
        }else if(e.target == $('.open-modal')[1]){
            $('span.content').html('<iframe class="iframe" src="https://maxyeh666.github.io/googlemap-api-vue-/" frameborder="0"></iframe>')
        //點到互動方塊外的地方就關閉方塊
        }else if(e.target == modal){
            
            $('.modal').fadeToggle('slow','linear')
        }
    })
    
    //關閉內容方塊
    $('.close-modal').on('click',function(){
        $('.modal').fadeToggle('slow')
    })
})



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
    return switcher.value
})
//控制卷軸動畫與偏移
$(document).ready(function(){
    $('a.nav-item').click(function (){
        //考慮到瀏覽器相容性問題，選擇器要使用html跟body
        $('html,body').animate({
            //抓取前往標籤的數值並減去導覽列(nav)所佔的高度(60)
            scrollTop:$($(this).attr('href')).offset().top - 60 + 'px'
        },{
            //動畫時間
            duration: 500,
            //動畫方式
            easing:'swing'
        })

        return false
    })
})
