function menu_bars(){
  var menu = document.getElementById('menu_mobile');
  var chamaHeader = document.getElementById('home');

  if(menu.style.height == '195px'){
    menu.style.height = '0';
    chamaHeader.style.paddingTop = '0';

  }else{
    menu.style.height = '195px';
    chamaHeader.style.paddingTop = '200px';
  }

}

function fecharMenu(){
  var menu = document.getElementById('menu_mobile');
  if(menu.style.height == '195px'){
    menu.style.height = '0';
    var chamaHeader = document.getElementById('home');
    chamaHeader.style.paddingTop = '0';

  }
}

//scroll.paddingTop = '60px';

function verMais(){
    var fechar = document.querySelector('.material-symbols-outlined');
    var habilitar = true;
    if(fechar == habilitar){
      fechar.innerHTML = 'chevron_left';
    }
    else{
      fechar == false;
      fechar.innerHTML = 'expand_more';
    }

}
