(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/myImage.13539553.jpg"},function(e,a,t){e.exports=t.p+"static/media/image2.7f71e9c2.PNG"},function(e,a,t){e.exports=t.p+"static/media/image3.475bc0fb.PNG"},function(e,a,t){e.exports=t.p+"static/media/image4.973d55a8.PNG"},function(e,a,t){e.exports=t.p+"static/media/image6.b2a5abeb.PNG"},function(e,a,t){e.exports=t.p+"static/media/image1.a9f65b19.PNG"},function(e,a,t){e.exports=t.p+"static/media/image7.5b0ace39.PNG"},function(e,a,t){e.exports=t.p+"static/media/earth.67af05e1.jpg"},function(e,a,t){e.exports=t(35)},,,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),c=(t(22),t(23),t(24),t(25),t(26),t(27),t(28),t(29),t(30),t(1)),i=t.n(c);i.a.easing.jswing=i.a.easing.swing,i.a.extend(i.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,l){return i.a.easing[i.a.easing.def](e,a,t,n,l)},easeInQuad:function(e,a,t,n,l){return n*(a/=l)*a+t},easeOutQuad:function(e,a,t,n,l){return-n*(a/=l)*(a-2)+t},easeInOutQuad:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,l){return n*(a/=l)*a*a+t},easeOutCubic:function(e,a,t,n,l){return n*((a=a/l-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,l){return n*(a/=l)*a*a*a+t},easeOutQuart:function(e,a,t,n,l){return-n*((a=a/l-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,l){return n*(a/=l)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,l){return n*((a=a/l-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,l){return-n*Math.cos(a/l*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,l){return n*Math.sin(a/l*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,l){return-n/2*(Math.cos(Math.PI*a/l)-1)+t},easeInExpo:function(e,a,t,n,l){return 0==a?t:n*Math.pow(2,10*(a/l-1))+t},easeOutExpo:function(e,a,t,n,l){return a==l?t+n:n*(1-Math.pow(2,-10*a/l))+t},easeInOutExpo:function(e,a,t,n,l){return 0==a?t:a==l?t+n:(a/=l/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,l){return-n*(Math.sqrt(1-(a/=l)*a)-1)+t},easeOutCirc:function(e,a,t,n,l){return n*Math.sqrt(1-(a=a/l-1)*a)+t},easeInOutCirc:function(e,a,t,n,l){return(a/=l/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,l){var r=1.70158,s=0,c=n;if(0==a)return t;if(1==(a/=l))return t+n;if(s||(s=.3*l),c<Math.abs(n)){c=n;r=s/4}else r=s/(2*Math.PI)*Math.asin(n/c);return-c*Math.pow(2,10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/s)+t},easeOutElastic:function(e,a,t,n,l){var r=1.70158,s=0,c=n;if(0==a)return t;if(1==(a/=l))return t+n;if(s||(s=.3*l),c<Math.abs(n)){c=n;r=s/4}else r=s/(2*Math.PI)*Math.asin(n/c);return c*Math.pow(2,-10*a)*Math.sin((a*l-r)*(2*Math.PI)/s)+n+t},easeInOutElastic:function(e,a,t,n,l){var r=1.70158,s=0,c=n;if(0==a)return t;if(2==(a/=l/2))return t+n;if(s||(s=l*(.3*1.5)),c<Math.abs(n)){c=n;r=s/4}else r=s/(2*Math.PI)*Math.asin(n/c);return a<1?c*Math.pow(2,10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/s)*-.5+t:c*Math.pow(2,-10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/s)*.5+n+t},easeInBack:function(e,a,t,n,l,r){return void 0==r&&(r=1.70158),n*(a/=l)*a*((r+1)*a-r)+t},easeOutBack:function(e,a,t,n,l,r){return void 0==r&&(r=1.70158),n*((a=a/l-1)*a*((r+1)*a+r)+1)+t},easeInOutBack:function(e,a,t,n,l,r){return void 0==r&&(r=1.70158),(a/=l/2)<1?n/2*(a*a*((1+(r*=1.525))*a-r))+t:n/2*((a-=2)*a*((1+(r*=1.525))*a+r)+2)+t},easeInBounce:function(e,a,t,n,l){return n-i.a.easing.easeOutBounce(e,l-a,0,n,l)+t},easeOutBounce:function(e,a,t,n,l){return(a/=l)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,l){return a<l/2?.5*i.a.easing.easeInBounce(e,2*a,0,n,l)+t:.5*i.a.easing.easeOutBounce(e,2*a-l,0,n,l)+.5*n+t}});t(33),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=t(2),o=t(3),d=t(5),u=t(4),p=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=i()("nav").outerHeight();i()(".navbar-toggler").on("click",(function(){i()("#mainNav").hasClass("navbar-reduce")||i()("#mainNav").addClass("navbar-reduce")})),i()("body").scrollspy({target:"#mainNav",offset:e}),i()(".js-scroll").on("click",(function(){i()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans")):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"))})),i()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var a=i()(this.hash);if((a=a.length?a:i()("[name="+this.hash.slice(1)+"]")).length)return i()("html, body").animate({scrollTop:a.offset().top-e+5},1e3,"easeInExpo"),!1}})),i()(".js-scroll").on("click",(function(){i()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},l.a.createElement("div",{className:"container"},l.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#work"},"Work")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),t}(l.a.Component),g=(t(34),t(8)),E=t.n(g),b=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"intro route bg-image background"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}),l.a.createElement("div",{className:"intro-content display-table"},l.a.createElement("div",{className:"table-cell"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Trang Hoang"),l.a.createElement("p",{className:"intro-subtitle"},l.a.createElement("span",{className:"text-slider-items"}),l.a.createElement("strong",{className:"text-slider"},l.a.createElement(E.a,{strings:["Front End Developer","Back End Developer","Full Stack Developer","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),l.a.createElement("p",{className:"pt-3"},l.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button"},"View My Work")),l.a.createElement("p",{className:"pt-3"},l.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"https://drive.google.com/file/d/1wRqkza2TV1YlIRrG68hJVngFoJs7u-0d/view?usp=sharing",role:"button"},l.a.createElement("i",{className:"fa fa-download"})," Download Resume"))))))}}]),t}(l.a.Component),v=t(9),N=t.n(v),f=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.call(this)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("img",{style:{width:"13em",height:"13em",borderRadius:"100em"},className:"profile-pic",src:N.a,alt:"Profile Pic"})),l.a.createElement("div",{className:"col-md-9"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"I am currently a junior at Augustana College major in Computer Science and Applied Maths and minor in Data Science. I am passionate about how the software works, and I love building applications for Mobile and Websites."),l.a.createElement("p",null,"My specialties include quickly learn new skills, problem-solving, and programming languages. I am always curious about software and eager to learn new frameworks, principles using in web development or mobile development."),l.a.createElement("h2",null,"Skills"),l.a.createElement("span",{style:{marginRight:20,marginBottom:10,padding:10},class:"badge badge-pill badge-primary"},"Java"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"JavaScript"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"TypeScript"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"Python"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"HTML"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"CSS"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"SQL"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"Git"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"Github"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"Agile"),l.a.createElement("span",{style:{marginRight:20,marginBottom:10,padding:10},class:"badge badge-pill badge-primary"},"Eclipse"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"VSC"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"NodeJS"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"MongoDB"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"MySQL"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"AWS"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"Spring"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"Junit"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"React"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"React Native"),l.a.createElement("span",{style:{marginRight:20,padding:10},class:"badge badge-pill badge-primary"},"Android"))))))))}}]),t}(l.a.Component),h=t(10),w=t.n(h),y=t(11),k=t.n(y),O=t(12),M=t.n(O),j=t(13),x=t.n(j),I=t(14),S=t.n(I),R=t(15),P=t.n(R),C=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"Portfolio"),l.a.createElement("div",{className:"line-mf"})))),l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"Web Project"),l.a.createElement("p",{className:"subtitle-a"},"Most my experince with building websites is from my work experince. Here are some of my side web project"),l.a.createElement("div",{className:"line-mf"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:"https://cvguided.com/"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:P.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"CV Guided"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"React Redux Firebase Bootstrap"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:"https://github.com/tranghoang200/CoronaGuru"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:w.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"CoronaGuru"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"HTML5 CSS3 Bootstrap JavaScript AI MongoDB"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"}))))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:"https://github.com/MrOhno/duocode/tree/master"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:M.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"Duocode"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"JavaScript NodeJS React Firebase MongoDB")," ")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))))),l.a.createElement("div",{className:"col-md-3"})),l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h4",{className:"title-a"},"Mobile Project"),l.a.createElement("p",{className:"subtitle-a"},"Here are some of my android app and cross-platform app."),l.a.createElement("div",{className:"line-mf"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:"https://github.com/2ksoft/realty-analysis"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:k.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"Estalysis App"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"React Native JavaScript Python Flask MongoDB NodeJS GoogleAPI Firebase"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:"https://github.com/tranghoang200/Message-App"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:x.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"Message App"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"React Native"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))))),l.a.createElement("div",{className:"col-md-4"},l.a.createElement("div",{className:"work-box"},l.a.createElement("a",{href:"https://github.com/tranghoang200/smart_finance"},l.a.createElement("div",{className:"work-img"},l.a.createElement("img",{src:S.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"Smart Finance App"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"Android Firebase NoSQL"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))))))))}}]),t}(l.a.Component),B=t(16),D=t.n(B),q=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+D.a+")"}},l.a.createElement("div",{className:"overlay-mf"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"contact-mf"},l.a.createElement("div",{id:"contact",className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"Send A Message")),l.a.createElement("div",null,l.a.createElement("form",{action:"https://formspree.io/xdoeonlo",method:"POST",className:"contactForm"},l.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),l.a.createElement("div",{id:"errormessage"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12 mb-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),l.a.createElement("div",{className:"validation"}))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("button",{type:"submit",className:"button button-a button-big button-rouded"},"Send Message")))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},l.a.createElement("h5",{className:"title-left"},"Get in Touch")),l.a.createElement("div",{className:"more-info"},l.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",l.a.createElement("br",null),"Simply fill the from and send me an email.")),l.a.createElement("div",{className:"socials"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/tranghoang200",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-github"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/trang-hoang-113020/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement("i",{className:"ion-social-linkedin"}))))))))))))),l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"copyright-box"}))))))}}]),t}(l.a.Component),A=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){i()(".back-to-top").click((function(){return i()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return l.a.createElement("a",{href:"#",className:"back-to-top animated"},l.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),t}(l.a.Component),L=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){i()(window).on("load",(function(){i()("#preloader").length&&i()("#preloader").delay(100).fadeOut("slow",(function(){i()(this).remove()}))}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"preloader"})}}]),t}(l.a.Component);s.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(b,null),l.a.createElement(f,null),l.a.createElement(C,null),l.a.createElement(q,null),l.a.createElement(A,null),l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.d06594af.chunk.js.map