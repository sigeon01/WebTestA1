var Links={
    setColor: function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = 'blue';
            i = i + 1;
        }
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
  
    if(self.value == 'night'){
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      self.value = 'day';
  
      Links.setColor('powderblue');
    }    
    else {
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      self.value = 'night';
  
      Links.setColor('blue');
    }  
}
