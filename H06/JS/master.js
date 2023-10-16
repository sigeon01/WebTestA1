var Body = {
  setBackgroundColor : function(color){
    $('body').css('background-color', color);

  },
  setColor : function(color){
    $('body').css('color', color);

  }
}
var Links = {
  setColor : function(color){
    $('a').css('color', color);
  }
}

function ThemeRemove(self){
  var target = document.querySelector('body');
  if(self.value=='테마 비활성화'){
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Links.setColor('blue'); 
    self.value='비활성화됨';
  }  
}