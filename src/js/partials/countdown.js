function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="countdown__number-wrapper"><div class="countdown__caption">дней</div><span class="countdown__number day">'+day+'</span></span>';
   timer += '<span class="countdown__number-wrapper"><div class="countdown__caption">часов</div><span class="countdown__number hour">'+hour+'</span></span>';
   timer += '<span class="countdown__number-wrapper"><div class="countdown__caption">минут</div><span class="countdown__number min">'+this.addZero(min)+'</span></span><span class="countdown__number-wrapper"><div class="countdown__caption">секунд</div><span class="countdown__number sec">'+this.addZero(sec)+'</span></span><p class="countdown__txt">Осталось до конца акции</p>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date('2017/11/13 00:00:00');

 // You can add time's up message here
 var timer = new CountdownTimer('CDT',tl,'<span class="countdown__number-wrapper"><span class="countdown__number end">Акция закончилась!</span></span>');
 timer.countDown();
}
window.onload=function(){
 CDT();
}