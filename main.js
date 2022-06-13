const $ = document.querySelector.bind(document);

const html ={
  tab: [...$('.tab-container').children],
  content: [...$('.texto-container').children],
  openTab: $('[data-open]'),
}

function TabNavigation(){

  function hideAllTabContent(){
    html.content.forEach(section => { section.style.display = "none"})
  }

  function removeAllActiveClass(){
    html.tab.forEach(t => { 
      t.className = t.className.replace(" active", "")
    })
  }

  function showCurrentTab(id){
    const tabContent = $('#' + id)
    
    tabContent.style.display= "block"
  }

  function selectTab(event){
    hideAllTabContent()
    removeAllActiveClass()
    
    const target = event.currentTarget
    showCurrentTab(target.dataset.id)
    target.className += " active"
  }

  function listenerForChange(){
    html.tab.forEach(tab=>tab.addEventListener('click', selectTab))
  }

  function init(){
    hideAllTabContent()
    listenerForChange()
    html.openTab.click()
  }

  return{
    init
  }
}

window.addEventListener('load', () =>{
 const tabNavigation = TabNavigation()
 tabNavigation.init()
})
