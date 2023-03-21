


/*-------------------------------------
  gotop
-------------------------------------*/
jQuery.easing.quart = function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};
 
jQuery(document).ready(function() {
	jQuery("#pagetop").hide();

	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 200) {
			jQuery('#pagetop').fadeIn();
		} else {
			jQuery('#pagetop').fadeOut();
		}
	});

	jQuery('#pagetop a').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 1000, 'quart');
		return false;
	});
});

/*-------------------------------------
  rollover2
-------------------------------------*/
(function($) {
	
	$.fn.opOver = function(op,oa,durationp,durationa){
		
		var c = {
			op:op? op:1.0,
			oa:oa? oa:0.6,
			durationp:durationp? durationp:'fast',
			durationa:durationa? durationa:'fast'
		};
		

		$(this).each(function(){
			$(this).css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				}).hover(function(){
					$(this).fadeTo(c.durationp,c.oa);
				},function(){
					$(this).fadeTo(c.durationa,c.op);
				})
		});
	},
	
	$.fn.wink = function(durationp,op,oa){

		var c = {
			durationp:durationp? durationp:'slow',
			op:op? op:1.0,
			oa:oa? oa:0.2
		};
		
		$(this).each(function(){
			$(this)	.css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				}).hover(function(){
				$(this).css({
					opacity: c.oa,
					filter: "alpha(opacity="+c.oa*100+")"
				});
				$(this).fadeTo(c.durationp,c.op);
			},function(){
				$(this).css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				});
			})
		});
	}
	
})(jQuery);	




(function($) {
$(function() {

  $('.over1').opOver();
  $('.over2').wink();
  $('.over3').opOver(0.6,1.0);
  $('.over4').opOver(1.0,0.6,200,500);
  $('.over5').wink(200);
  $('.over6').wink('slow',0.2,1.0);
  $('.over7').opOver(0.1,1.0);
  $('.test1 .over ').opOver();

});
})(jQuery);


/*--------------------------------------------------------------------------
 *  Smooth Scroller Script, version 1.0.1
 *  (c) 2007 Dezinerfolio Inc. <midart@gmail.com>
 *
 *  For details, please check the website : http://dezinerfolio.com/
 *
/*--------------------------------------------------------------------------*/
//dezinerfolio
//文字コード UTF-8
eval((function(){a="Scroller={speed:10,8dC.;d.while(dC.+C.}} J8N;d=5;&&M4M}d&&dM4dM}%4%} 0J8a,F4(F,fa@7a.4a.LP+F7Jend8e66.cancelBubble=true;6.Value=fa@;}&&(E(7J8di=Hner3||5.G3;hN.3;a=(Ed>ah-d>i7e@{-(h-d)7}e@{a=a+(d-a}To(0,aEa==a}=aJHit8KwHdow,A,A7,A82P;l=9;d=locatiP;D&&D.HdexOfL#)!=-1&&(l/+l=C)Kl,Gck,endEl.PGck=2l=this.hash.substr(1E9.name==l;i=setILL+(9)+),107}}}}}};Hit()",b=48;while(b>=0)a=a.replace(new RegExp("%23456789@ACDEFGHJKLMNP".charAt(b),"g"),("\042Scroller.entfunction(offsetParscrollwindow.returndocumattachEvntervala=.getElemsByTagName(a);if(offsetTop){for(i=0;i<a.length;i++.pathnamea+=Math.ceil((d-ae.stopPropagationTopa.addEvListenerbody)/speede.prevDefaultclearI(i)pageYOffsetend(this);Height .Elemev)}:a[i]lseload=dl.href);b,dcliin},((.=.=C||on".split(""))[b--]);return a})())


