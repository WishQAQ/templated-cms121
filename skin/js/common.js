//jquery特效开始
$(document).ready(function(){

//设置顶部与导航叠合部分的高度
$(".white").css("height",$("#header").height());
$(window).resize(function(){
	$(".white").css("height",$("#header").height());
});



//下拉菜单
$("#navigate li").hover(function(){
	$(this).find('ul').show();
},function(){
	$(this).find('ul').hide();
});

$(".navbar-toggle").click(function(){		
		$(".collapse").slideToggle();		
	});

//手机版菜单
$('.mobile_nav a').click(function(){     
if( $(this).next().is('ul') ){
if( $(this).next('ul').css('display') == 'none' ){
$(this).next('ul').slideDown();
$(this).find('i').attr("class","touch-arrow-up");     
}else{
$(this).next('ul').slideUp();
$(this).next('ul').find('ul').slideUp();
$(this).find('i').attr("class","touch-arrow-down");
}   
}
});

$(".menu_btn").click(function(e) {
    if ($(this).find("i").hasClass("open")) {
        $(this).find("i").removeClass("open");
        setTimeout("$('#menu').removeClass('open_menu')", 200);
    } else {
        $(this).find("i").addClass("open");
        $("#menu").addClass("open_menu");
        $(".menu_btn").find("i").removeClass("ccc");
    }
});

// $("#search").hover(function(){
	// $(this).find('.skw').css({"width":"220px","display":"block"});
// },function(){
	// $(this).find('.skw').css({"width":"0px","display":"none"});
// });
	$("#search2_img").click(function(){		
		$("#search2").slideToggle();		
	});

	$(".news_more a").hover(function(){
		$(this).find("span").animate({width:'101%'});
	},function(){
		$(this).find("span").animate({width:'0',left:'100%'},'1000',function(){$(".news_more span").css({left:'0%'})});
	});	
	$(function(){
//bar
$(".toolbar_item").hover(function(){
	$(this).find(".tool_qq").show();			  
	$(this).find(".tool_tel").animate({left:"-150px"},"fast",function(){});							  
	$(this).find(".tool_weixin").show();
	$(this).find(".t_item").addClass("cur")
},function(){
	$(this).find(".tool_qq").hide();
	$(this).find(".tool_tel").animate({left:"0px"},"fast",function(){});	
	$(this).find(".tool_weixin").hide();
	$(this).find(".t_item").removeClass("cur")
});
//返回顶部
$("#gotop").click(function(){
$("html,body").animate({scrollTop:0});
});
//end
});

//底部下拉菜单
$(".help_top span").click(function(){
	//$(this).css({"-ms-transform":"rotate(135deg)","-webkit-transform":"rotate(135deg)","transform":"rotate(135deg)"});
	$(this).parents('.help_list').find('ul').slideToggle();
	$(this).parents('.help_list2').find('ul').slideToggle();
});


					
});
//jquery 结束


$(window).load(function() {
	//scrollable-default
	$(".scrollable-default").carouFredSel({
		width   	: '100%',
		infinite 	: false,
		//circular 	: false,
		auto 	  	: { pauseOnHover: true, timeoutDuration:3500 },
		//swipe    	: { onTouch:true, onMouse:true },
		prev 		: { button:function() { return $(this).parent().next('.carousel-direction').find(".carousel-prev"); }},
		next 		: { button:function() { return $(this).parent().next('.carousel-direction').find(".carousel-next"); }},
		pagination: "#news_page"
	});
	$(".scrollable-default").parents(".scrollable").css("overflow","visible");
});

//视频
function showVideo(v_url,v_img,v_mobile,v_id){
	$(".video_list a").removeClass("current");
	$("#"+v_id).addClass("current");
	v_width=$("#Player").width();
	v_height=v_width*3/4;
	
	var flashvars={
		f:v_url,
		c:0,
		b:1,
		i:v_img
		};
	var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
	CKobject.embedSWF('ckplayer/ckplayer.swf','Player','ckplayer_Player','100%',v_height,flashvars,params);
	
	var video=[v_mobile+'->video/mp4'];
	var support=['iPad','iPhone','ios','android+false','msie10+false'];
	CKobject.embedHTML5('Player','ckplayer_Player','100%',v_height,video,flashvars,support);
	
//	var so = new SWFObject("images/player.swf","ply","100%",v_height,"9","#000000");
//	so.addParam("allowfullscreen","true");
//	so.addParam("allowscriptaccess","always");
//	so.addParam("wmode","opaque");
//	so.addParam("quality","high");
//	so.addParam("salign","lt");
//	so.addParam("align","absmiddle");
//	so.addVariable("file",v_url);
//	so.addVariable("img",v_img);
//	so.addVariable("autoplay",v_play);
//	so.write("Player");
}

//获取浏览量
function showNum(cid,ctype,cshow,showid){
	$.get('/config/count.asp',{id:cid,stype:ctype,show:cshow},function(data){
		$(showid).html(data);
	});
}


//搜索
function chkseach(sn){
if(sn.skw.value==""){
alert("请输入搜索关键词！"); 
sn.skw.focus(); 
return false;
}
if(sn.skw.value=="请输入搜索关键词"){
alert("请输入搜索关键词！"); 
sn.skw.focus(); 
return false;
}
return true;
}
function clearsearch(sn){
if(sn.value=="请输入搜索关键词")
sn.value="";
}
function redosearch(sn){
if(sn.value=="")
sn.value="请输入搜索关键词";
}
//end

//邮箱格式
function is_email(str)
{ if((str.indexOf("@")==-1)||(str.indexOf(".")==-1))
{
return false;
}
return true;
}

//feedback
function Checkfeedback(form1){
if(form1.name.value==""){
alert("请输入你的姓名！");
form1.name.focus();
return false;
}
if(form1.email.value==""){
alert("请输入你的邮箱！");
form1.email.focus();
return false;
}
if(!is_email(form1.email.value))
{ alert("邮箱格式错误！");
form1.email.focus();
return false;
}

if(form1.tel.value==""){
alert("请输入你的电话！");
form1.tel.focus();
return false;
}


if(form1.title.value==""){
alert("请输入你想要申请的职位名称！");
form1.title.focus();
return false;
}

if(form1.W_wenjian.value==""){
alert("请提交你的简历文档！");
form1.W_wenjian.focus();
return false;
}

if(form1.validatecode.value==""){
alert("请输入你的验证码！");
form1.validatecode.focus();
return false;
}
return true;
}
//end

//切换
function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++){
  if (i==Num){
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}

//加入收藏 
function AddFavorite() {
sURL = encodeURI(window.location);
try{  
window.external.addFavorite(window.location,document.title);  
}catch(e) {  
try{  
window.sidebar.addPanel(document.title,window.location,"");  
}catch (e) {  
alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
}  
}
}

//设为首页
function SetHome(){
if (document.all) {
document.body.style.behavior='url(#default#homepage)';
document.body.setHomePage(window.location);
}else{
alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
}
}