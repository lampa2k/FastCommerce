/**
 * jQuery.marquee - scrolling text horizontally
 * Date: 11/01/2013
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
(function(e){e.fn.marquee=function(t){return this.each(function(){function h(){if(e.fn.pause){i.pause();r.trigger("paused")}}function p(){if(e.fn.resume){i.resume();r.trigger("resumed")}}var n=e.extend({},e.fn.marquee.defaults,t),r=e(this),i,s,o,u,a;if(r.data().delaybeforestart){r.data().delayBeforeStart=r.data().delaybeforestart;delete r.data().delaybeforestart}if(r.data().pauseonhover){r.data().pauseOnHover=r.data().pauseonhover;delete r.data().pauseonhover}if(r.data().pauseoncycle){r.data().pauseOnCycle=r.data().pauseoncycle;delete r.data().pauseoncycle}n=e.extend({},n,r.data());u=n.direction=="up"||n.direction=="down";n.gap=n.duplicated?n.gap:0;r.wrapInner('<div class="js-marquee"></div>');var f=r.find(".js-marquee").css({"margin-right":n.gap,"float":"left"});if(n.duplicated){f.clone().appendTo(r)}r.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');i=r.find(".js-marquee-wrapper");if(u){var l=r.height();i.removeAttr("style");r.height(l);r.find(".js-marquee").css({"float":"none","margin-bottom":n.gap,"margin-right":0});if(n.duplicated)r.find(".js-marquee:last").css({"margin-bottom":0});var c=r.find(".js-marquee:first").height()+n.gap;n.speed=(parseInt(c,10)+parseInt(l,10))/parseInt(l,10)*n.speed}else{a=r.find(".js-marquee:first").width()+n.gap;s=r.width();n.speed=(parseInt(a,10)+parseInt(s,10))/parseInt(s,10)*n.speed}if(n.duplicated){n.speed=n.speed/2}var d=function(){if(u){if(n.duplicated){i.css({"margin-top":n.direction=="up"?0:"-"+c+"px"});o={"margin-top":n.direction=="up"?"-"+c+"px":0}}else{i.css({"margin-top":n.direction=="up"?l:"-"+c+"px"});o={"margin-top":n.direction=="up"?"-"+i.height()+"px":l}}}else{if(n.duplicated){i.css("margin-left",n.direction=="left"?0:"-"+a+"px");o={"margin-left":n.direction=="left"?"-"+a+"px":0}}else{i.css("margin-left",n.direction=="left"?s:"-"+a+"px");o={"margin-left":n.direction=="left"?"-"+a+"px":s}}}r.trigger("beforeStarting");i.animate(o,n.speed,"linear",function(){r.trigger("finished");if(n.pauseOnCycle){setTimeout(d,n.delayBeforeStart)}else{d()}})};r.on("pause",h);r.on("resume",p);if(n.pauseOnHover){r.hover(h,p)}setTimeout(d,n.delayBeforeStart)})};e.fn.marquee.defaults={speed:5e3,gap:20,delayBeforeStart:0,direction:"left",duplicated:false,pauseOnHover:false,pauseOnCycle:false}})(jQuery)
