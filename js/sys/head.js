var headString = '<div class="top-menu">'+
				'<div class="container">'+
					'<div class="row">'+
						'<div class="col-xs-2">'+
						'	<div id="colorlib-logo"><a href="index.html"><img src="../images/sys/logo-title.png"/></a></div>'+
						'</div>'+
						'<div class="col-xs-10 text-right menu-1">'+
							'<ul>'+
								'<li><a href="index.html">首页</a></li> <!-- class="active" -->'+
								'<li><a href="makeComplaints.html">吐槽</a></li>'+
								'<li class="dropdown">'+
										'<a href="statistics.html">'+
										'		归纳'+
										'</a>'+
										'<ul class="dropdown-menu">'+
												'<li><a href="travel-welfare.html">经验福利</a></li>'+
												'<li><a href="travel-skill.html">建站技巧</a></li>'+
												'<li><a href="travel-SourceSharing.html">源码分享</a></li>'+
										'</ul>'+
								'</li>'+
								'<li><a href="links.html">友链</a></li>'+
								'<li class="dropdown">'+
										'<a href="about.html">'+
										'		关于'+
										'</a>'+
										'<ul class="dropdown-menu">'+
												'<li><a href="readerWall.html">读者墙</a></li>'+
										'</ul>'+
								'</li>'+
								'<li class="dropdown">'+
								'<a href="javascript:void();">'+
								'		语言'+
								'</a>'+
								'<ul class="dropdown-menu">'+
								'<li><a href="javascript:void();">简体中文</a></li>'+
    							'<li><a href="javascript:void();">暂不支持其他语言</a></li>'+
								'</ul>'+
								'</li>'+
								'<li><a href="search.html">搜索 🔎</a></li>'+
							'</ul>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
document.getElementById('nav-head').innerHTML=headString;

