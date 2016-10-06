<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<HTML expr:dir='data:blog.languageDirection'>
<head>
<meta charset='utf-8'/>
<meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'/>
		<b:if cond='data:blog.pageType == &quot;index&quot;'>
			<strong><span><title><data:blog.pageTitle/></title></span></strong>
        <b:else/>
			<strong><span><title><data:blog.pageName/></title></span></strong>
        </b:if>
		<b:if cond='data:blog.metaDescription != &quot;&quot;'>
		  <meta expr:content='data:blog.metaDescription' name='description'/>
		<b:else/>
		  <meta expr:content='data:blog.pageName + &quot; | Trung tâm đào tạo seo Faceseo. Hotline 0932523569. &quot;' name='description'/>
		</b:if>
		<meta content='Linh Nguyễn' name='author'/>
		<b:include data='blog' name='all-head-content'/>
		<link href='http://faceseo.vn/favicon.ico' rel='shortcut icon' type='image/vnd.microsoft.icon'/>
		<meta content='general' name='rating'/>
		<meta content='all' name='robots'/>
		<meta content='index, follow' name='robots'/>
		<meta content='id' name='geo.country'/>
		<meta content='1 days' name='revisit-after'/>

<b:skin><![CDATA[]]></b:skin>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,700|Fujiyama:400' rel='stylesheet' type='text/css'/>
<link href='http://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'/>
<link href='https://googledrive.com/host/0B_8aLLpeiWoJdEFWSzB0VnhHd1U' rel='stylesheet'/>

<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<link href='https://googledrive.com/host/0B7gBPicAMEt-OExZaVpjTkFvOGs' rel='stylesheet'/>
</b:if></b:if>
<script type='text/javascript'>

</script>
<script src='https://googledrive.com/host/0B7gBPicAMEt-cGxIZW1NejFBZEU' type='text/javascript'/>

<link href='//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.min.css' rel='stylesheet'/>
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js' type='text/javascript'/>

<script>
	var url_popup = 'http://giaiphapthuonghieu.vn';
</script>
<script src='https://jgoogle.googlecode.com/svn/trunk/hocvienfaceseo.js'></script>

</head>

<body>
<div style='position: absolute;top:-999px'>
<h1><data:blog.pageName/> đào tạo SEO Faceseo</h1>
</div>
<div id='top-menuwrapper'>
<div id='top-menuwrap'>  
<div id='top-menu'>
<ul>
<li><a href='/'>Trang chủ</a></li>
<li><a href='http://www.giaiphapthuonghieu.net/2014/07/gioi-thieu-he-thong-giai-phap-thuong-hieu.html'>Giới thiệu</a></li>
<li><a href='http://www.giaiphapthuonghieu.net/2014/07/nguyen-hong-linh-biet-danh-facebook-linh-nguyen.html'>Linh Nguyễn</a></li>  
<li><a href='http://www.giaiphapthuonghieu.net/2014/08/viec-lam-them-cho-sinh-vien-xhnv-tai-hcm.html'>Tuyển dụng</a></li>
</ul>
</div></div>
<div class='social-tooltip'>
<ul>
<li class='pinterest'><a class='pinterest' href='/'><i class='icon-pinterest'/></a></li>
<li><a class='twitter' href='/'><i class='icon-twitter'/></a></li>
<li><a class='linkedin' href='/'><i class='icon-linkedin'/></a></li>
<li><a class='facebook' href='https://www.facebook.com/nguyenlinh.ceo.faceseo/' ref='nofollow'><i class='icon-facebook'/></a></li>
<li><a class='gplus' href='https://plus.google.com/u/0/115912560096998408260/posts' ref='nofollow'><i class='icon-google-plus'/></a></li>
<div class='menusearch'>
<form action='/search' class='searchform' method='get'>
<input class='searchfield' id='q' name='q' onblur='if(this.value==&apos;&apos;)this.value=this.defaultValue;' onfocus='if(this.value==this.defaultValue)this.value=&apos;&apos;' type='text' value='Search here....'/>
<input class='searchbutton' src='http://4.bp.blogspot.com/-TWMP7OJKTHw/UdVehdgDETI/AAAAAAAAEuM/LRdqcm-2dNA/s24/search.png' style='cursor:pointer;vertical-align:top' type='image' value='Go'/>
</form>
</div>
</ul>
</div>
</div><!-- /floating menu -->
<div class='headerpic-wrapper'>
             <div class='header-wrapper'>
                 <b:section class='header' id='header' maxwidgets='1' showaddelement='yes'>
                   <b:widget id='Header1' locked='true' title='Giải Pháp Seo | Đào tạo seo website | Đào tạo Digital Marketing (Tiêu đề)' type='Header'>
                     <b:includable id='main'>
  <b:if cond='data:useImage'>
    <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
      <!--
      Show image as background to text. You can't really calculate the width
      reliably in JS because margins are not taken into account by any of
      clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
      width if the user is using shrink to fit.
      This results in a margin-width's worth of pixels being cropped. If the
      user is not using shrink to fit then we expand the header.
      -->
      <b:if cond='data:mobile'>
          <div id='header-inner'>
            <div class='titlewrapper' style='background: transparent'>
          <b:if cond='data:blog.pageType != &quot;item&quot;'>
          <h1 class='title' style='background: transparent; border-width: 0px'>
            <b:include name='title'/>
          </h1>
<b:else/>
          <p class='title' style='background: transparent; border-width: 0px'>
            <b:include name='title'/>
          </p>
</b:if>
            </div>
            <b:include name='description'/>
          </div>
        <b:else/>
          <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                        + &quot;background-position: &quot;                        + data:backgroundPositionStyleStr + &quot;; &quot;                        + data:widthStyleStr                        + &quot;min-height: &quot; + data:height                        + &quot;_height: &quot; + data:height                        + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
            <div class='titlewrapper' style='background: transparent'>
          <b:if cond='data:blog.pageType != &quot;item&quot;'>
          <h1 class='title' style='background: transparent; border-width: 0px'>
            <b:include name='title'/>
          </h1>
<b:else/>
          <p class='title' style='background: transparent; border-width: 0px'>
            <b:include name='title'/>
          </p>
</b:if>
            </div>
            <b:include name='description'/>
          </div>
        </b:if>
    <b:else/>
      <!--Show the image only-->
      <div id='header-inner'>
        <a expr:href='data:blog.homepageUrl' style='display: block'>
          <img expr:alt='data:title' expr:id='data:widget.instanceId + &quot;_headerimg&quot;' expr:src='data:sourceUrl' style='display: block'/>
        </a>
        <!--Show the description-->
        <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
          <b:include name='description'/>
        </b:if>
      </div>
    </b:if>
  <b:else/>
    <!--No header image -->
    <div id='header-inner'>
      <div class='titlewrapper'>
        <b:if cond='data:blog.pageType != &quot;item&quot;'>
        <h1 class='title'>
          <b:include name='title'/>
        </h1>
<b:else/>
        <p class='title'>
          <b:include name='title'/>
        </p>
</b:if>
      </div>
      <b:include name='description'/>
    </div>
  </b:if>
</b:includable>
                     <b:includable id='description'>
  <div class='descriptionwrapper'>
    <p class='description'><span><data:description/></span></p>
  </div>
</b:includable>
                     <b:includable id='title'>
  <b:if cond='data:blog.url == data:blog.homepageUrl'>
    <data:title/>
  <b:else/>
    <a expr:href='data:blog.homepageUrl'><data:title/></a>
  </b:if>
</b:includable>
                   </b:widget>
                 </b:section>
               <a href='http://giaiphapthuonghieu.vn' target='_blank'><img alt='SEO | SEO WEBSITE | ĐÀO TẠO SEO | SOCIAL' src='http://4.bp.blogspot.com/-MyaSZsYupSU/U8VIF2iaLjI/AAAAAAAAANE/iv93xPOqTtA/s1600/giaiphapthuonghieunet.gif' style='margin-left:5%' title='SEO | SEO WEBSITE | ĐÀO TẠO SEO | SOCIAL'/>   </a>
</div></div><!-- /header-wrapper -->
<div id='page'>
<nav id='menu'>
<input type='checkbox'/>
  <label><i class='icon-reorder'/><span>Navigation</span></label>
<ul>
<li><a class='dropdown' href='http://www.giaiphapthuonghieu.net/2014/07/thiet-ke-website-bat-dong-san-bds-chuan-seo.html'>THIẾT KẾ WEB BDS</a>
<ul class='menus'>
  	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/thiet-ke-website-bat-dong-san-bds-chuan-seo.html#mau-website-bds' title='Mẫu website BDS'>Mẫu website BDS</a></li>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/thiet-ke-website-bat-dong-san-bds-chuan-seo.html#chuc-nang-website-bds' title='Chức năng website bds'>Chức năng website</a></li>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/thiet-ke-website-bat-dong-san-bds-chuan-seo.html#gia-thiet-ke-website' title='Giá thiết kế web'>Giá thiết kế web</a></li>
</ul>
</li>
<li><a class='dropdown' href='http://www.giaiphapthuonghieu.net/2014/07/bang-bao-gia-dich-vu-seo-website-top-google.html'>GIÁ SEO</a>
<ul class='menus'>
 	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-bao-gia-dich-vu-seo-website-top-google.html#seo-google-vietnam'>SEO GOOGLE.COM.VN</a></li>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-bao-gia-dich-vu-seo-website-top-google.html#seo-google-quoc-te'>GIÁ SEO QUỐC TẾ</a></li>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-bao-gia-dich-vu-seo-website-top-google.html#bao-gia-seo-tong-the'>GIÁ SEO TỔNG THỂ</a></li>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-bao-gia-dich-vu-seo-website-top-google.html#gia-seo-fanpage-facebook'>SEO FANPAGE FB</a></li>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-bao-gia-dich-vu-seo-website-top-google.html#gia-seo-youtube'>SEO CLIP YOUTUBE</a></li>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-bao-gia-dich-vu-seo-website-top-google.html#dieu-khoan-hop-dong-seo'>ĐIỀU KHOẢN HD</a></li>
    <li><a href='#'>ALO 01694448411 Ms Tiến</a></li>
</ul>
</li>
<li><a class='dropdown' href='http://www.giaiphapthuonghieu.net/2014/07/bang-gia-quang-cao-google-adwords-moi.html'>GIÁ GOOGLE ADWORDS</a>
<ul class='menus'>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-gia-quang-cao-google-adwords-moi.html#gia-tham-khao'>GIÁ THAM KHẢO</a></li>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-gia-quang-cao-google-adwords-moi.html#cau-hoi-adwords'>THẮC MẮC ADWORDS</a></li>
    <li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-gia-quang-cao-google-adwords-moi.html#tiep-thi-lai-adwords'>TIẾP THỊ LẠI ADWORDS</a></li>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-gia-quang-cao-google-adwords-moi.html#phi-cai-dat-adwords'>PHÍ CÀI ĐẶT ADWORDS</a></li>
	<li><a href='http://www.giaiphapthuonghieu.net/2014/07/bang-gia-quang-cao-google-adwords-moi.html#dao-tao-adwords'>ĐÀO TẠO ADWORDS</a></li>
	<li><a href='#'>ALO 01694448411 MS TIẾN</a></li>
</ul>
</li>
<li><a class='dropdown' href='http://www.giaiphapthuonghieu.net/2014/07/dao-tao-seo-hcm-faceseo.html'>ĐÀO TẠO SEO</a>
<ul class='menus'>
 <li><a href='http://www.giaiphapthuonghieu.net/2014/07/dao-tao-seo-hcm-faceseo.html#hoc-phi'>Học phí</a></li>
</ul>
</li>
<li><a class='dropdown' href='#'>KIẾN THỨC SEO</a>
<ul class='menus'>
 <li><a href='#'>TỐI ƯU WEBSITE</a></li>
 <li><a href='#'>TẠO BACKLINK</a></li>
 <li><a href='#'>TĂNG TRAFFIC</a></li>
</ul>
</li>
<li><a class='dropdown' href='#'>VIẾT BÀI PR</a>
<ul class='menus'>
 <li><a href='#'>PHƯƠNG PHÁP VIẾT PR</a></li>
 <li><a href='#'>MẪU BÀI VIẾT PR</a></li>
 <li><a href='#'>PR SỰ KIỆN</a></li>
</ul>
</li>
<li><a href='#'>Hotline: 01694448411</a></li>
       </ul>
    </nav>

<div class='clear'/>
	        <div class='content-wrapper'>
<div class='outerpic-wrapper'>
	        <div class='outer-wrapper'>
                      <div class='main-wrapper'>
                    <b:section class='main' id='main' showaddelement='no'>
                      <b:widget id='Blog1' locked='true' title='Bài đăng trên Blog' type='Blog'>
                        <b:includable id='main' var='top'>
<b:include data='posts' name='breadcrumb'/>
  <b:if cond='data:top.showDummy'>
    <script expr:src='data:top.dummyUrl'/>
  </b:if>

  <b:if cond='data:mobileindex'>
    <!-- mobile index -->
    <div class='blog-posts hfeed'>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
          &lt;/div&gt;
        </b:if>
        &lt;div class=&quot;mobile-date-outer date-outer&quot;&gt;
        <div expr:onclick='data:post.indexOnclick'>
          <b:include data='post' name='mobile-index-post'/>
        </div>
        <b:if cond='data:post.trackLatency'>
          <data:post.latencyJs/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;
      </b:if>
    </div>
  <b:else/>

    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <data:defaultAdStart/>
      <b:loop values='data:posts' var='post'>
        <b:if cond='data:post.isDateStart'>
          <b:if cond='data:post.isFirstPost == &quot;false&quot;'>
            &lt;/div&gt;&lt;/div&gt;
          </b:if>
        </b:if>
        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-outer&quot;&gt;
        </b:if>

        <b:if cond='data:post.isDateStart'>
          &lt;div class=&quot;date-posts&quot;&gt;
        </b:if>
        <div class='post-outer'>
        <b:include data='post' name='post'/>
        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
        </div>
        <b:if cond='data:post.includeAd'>
          <b:if cond='data:post.isFirstPost'>
            <data:defaultAdEnd/>
          <b:else/>
            <data:adEnd/>
          </b:if>
          <b:if cond='data:mobile == &quot;false&quot;'>
            <div class='inline-ad'>
              <data:adCode/>
            </div>
          </b:if>
          <data:adStart/>
        </b:if>
        <b:if cond='data:post.trackLatency'>
          <data:post.latencyJs/>
        </b:if>
      </b:loop>
      <b:if cond='data:numPosts != 0'>
        &lt;/div&gt;&lt;/div&gt;
      </b:if>
      <data:adEnd/>
    </div>
  </b:if>

  <!-- navigation -->
  <b:if cond='data:mobile'>
    <b:include name='mobile-nextprev'/>
  <b:else/>
    <b:include name='nextprev'/>

    <!-- feed links -->
    <b:include name='feedLinks'/>
  </b:if>

  <b:if cond='data:top.showStars'>
    <script src='//www.google.com/jsapi' type='text/javascript'/>
    <script type='text/javascript'>
      google.load(&quot;annotations&quot;, &quot;1&quot;, {&quot;locale&quot;: &quot;<data:top.languageCode/>&quot;});
      function initialize() {
        google.annotations.setApplicationId(<data:top.blogspotReviews/>);
        google.annotations.createAll();
        google.annotations.fetch();
      }
      google.setOnLoadCallback(initialize);
    </script>
  </b:if>
</b:includable>
                        <b:includable id='backlinkDeleteIcon' var='backlink'>
  <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
    <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
      <img src='//www.blogger.com/img/icon_delete13.gif'/>
    </a>
  </span>
</b:includable>
                        <b:includable id='backlinks' var='post'>
  <a name='links'/><h4><data:post.backlinksLabel/></h4>
  <b:if cond='data:post.numBacklinks != 0'>
    <dl class='comments-block' id='comments-block'>
      <b:loop values='data:post.backlinks' var='backlink'>
        <div class='collapsed-backlink backlink-control'>
          <dt class='comment-title'>
            <span class='backlink-toggle-zippy'>&#160;</span>
            <a expr:href='data:backlink.url' rel='nofollow'><data:backlink.title/></a>
            <b:include data='backlink' name='backlinkDeleteIcon'/>
          </dt>
          <dd class='comment-body collapseable'>
            <data:backlink.snippet/>
          </dd>
          <dd class='comment-footer collapseable'>
            <span class='comment-author'><data:post.authorLabel/> <data:backlink.author/></span>
            <span class='comment-timestamp'><data:post.timestampLabel/> <data:backlink.timestamp/></span>
          </dd>
        </div>
      </b:loop>
    </dl>
  </b:if>
  <p class='comment-footer'>
    <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'><data:post.createLinkLabel/></a>
  </p>
</b:includable>
                        <b:includable id='breadcrumb' var='posts'><b:if cond='data:blog.homepageUrl != data:blog.url'>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<div class='breadcrumbs'><span><a expr:href='data:blog.homepageUrl' rel='tag'>Home</a></span> &#187; <span><data:blog.pageName/></span></div>
<b:else/>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<!-- breadcrumb for the post page -->
<b:loop values='data:posts' var='post'>
<b:if cond='data:post.labels'>
<div class='breadcrumbs' xmlns:v='http://rdf.data-vocabulary.org/#'>
<span typeof='v:Breadcrumb'><a expr:href='data:blog.homepageUrl' property='v:title' rel='v:url'>Home</a></span>
<b:loop values='data:post.labels' var='label'>
&#187; <span typeof='v:Breadcrumb'><a expr:href='data:label.url' property='v:title' rel='v:url'><data:label.name/></a></span>
</b:loop>
&#187; <span><data:post.title/></span>
</div>
<b:else/>
<div class='breadcrumbs'><span><a expr:href='data:blog.homepageUrl' rel='tag'>Home</a></span> &#187; <span>Unlabelled</span> &#187; <span><data:post.title/></span></div>
</b:if>
</b:loop>
<b:else/>
<b:if cond='data:blog.pageType == &quot;archive&quot;'>
<!-- breadcrumb for the label archive page and search pages.. -->
<div class='breadcrumbs'>
<span><a expr:href='data:blog.homepageUrl'>Home</a></span> &#187; <span>Archives for <data:blog.pageName/></span>
</div>
<b:else/>
<b:if cond='data:blog.pageType == &quot;index&quot;'>
<div class='breadcrumbs'>
<b:if cond='data:blog.pageName == &quot;&quot;'>
<span><a expr:href='data:blog.homepageUrl'>Home</a></span> &#187; <span>All posts</span>
<b:else/>
<span><a expr:href='data:blog.homepageUrl'>Home</a></span> &#187; <span>Posts filed under <data:blog.pageName/></span>
</b:if>
</div>
</b:if>
</b:if>
</b:if>
</b:if>
</b:if>
</b:includable>
                        <b:includable id='comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <h4 id='comment-post-message'>
        <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'><data:postCommentMsg/></a></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <h4 id='comment-post-message'><data:postCommentMsg/></h4>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
                        <b:includable id='commentDeleteIcon' var='comment'>
  <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
    <b:if cond='data:showCmtPopup'>
      <div class='goog-toggle-button'>
        <div class='goog-inline-block comment-action-icon'/>
      </div>
    <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
        <img src='http://2.bp.blogspot.com/-d-5BS0YCkho/UOKe2UIw0rI/AAAAAAAAC4w/md_iYNVHaHk/s1600/delete4.png'/>
      </a>
    </b:if>
  </span>
</b:includable>
                        <b:includable id='comment_count_picker' var='post'>
  <b:if cond='data:post.forceIframeComments'>
    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-url='data:post.canonicalUrl'>
    </span>
  <b:else/>
    <b:if cond='data:post.commentSource == 1'>
      <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-url='data:post.canonicalUrl'>
      </span>
    <b:else/>
      <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
        <data:post.commentLabelFull/>:
      </a>
    </b:if>
  </b:if>
</b:includable>
                        <b:includable id='comment_picker' var='post'>
  <b:if cond='data:post.forceIframeComments'>
    <b:include data='post' name='iframe_comments'/>
    <b:if cond='data:post.showThreadedComments'>
      <b:include data='post' name='comments'/>
    <b:else/>
      <b:include data='post' name='comments'/>
    </b:if>
  <b:else/>
    <b:if cond='data:post.commentSource == 1'>
      <b:include data='post' name='iframe_comments'/>
    <b:else/>
      <b:if cond='data:post.showThreadedComments'>
        <b:include data='post' name='comments'/>
      <b:else/>
        <b:include data='post' name='comments'/>
      </b:if>
    </b:if>
  </b:if>
</b:includable>
                        <b:includable id='comments' var='post'>
<div class='cmt_iframe_holder' expr:data-href='data:post.canonicalUrl' expr:data-viewtype='data:post.viewType'/>
</b:includable>
                        <b:includable id='feedLinks'>
  <b:if cond='data:blog.pageType != &quot;item&quot;'> <!-- Blog feed links -->
    <b:if cond='data:feedLinks'>
      <div class='blog-feeds'>
        <b:include data='feedLinks' name='feedLinksBody'/>
      </div>
    </b:if>

  <b:else/> <!--Post feed links -->
    <div class='post-feeds'>
      <b:loop values='data:posts' var='post'>
        <b:include cond='data:post.allowComments and data:post.feedLinks' data='post.feedLinks' name='feedLinksBody'/>
      </b:loop>
    </div>
  </b:if>
</b:includable>
                        <b:includable id='feedLinksBody' var='links'>
</b:includable>
                        <b:includable id='iframe_comments' var='post'>

  <b:if cond='data:post.allowIframeComments'>
    <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
    <div class='cmt_iframe_holder'/>

    <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
      <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><data:postCommentMsg/></a>
    </b:if>
  </b:if>
</b:includable>
                        <b:includable id='mobile-index-post' var='post'>
  <b:if cond='data:post.dateHeader'>
    <div class='mobile-index-date'>
      <div class='date-header'>
        <span><data:post.dateHeader/></span>
      </div>
    </div>
  </b:if>

  <div class='mobile-post-outer'>
    <div class='mobile-index-title-outer'>
      <h3 class='mobile-index-title entry-title'>
        <a href='javascript:void(0)'><data:post.title/></a>
      </h3>
    </div>

    <div>
      <div class='mobile-index-arrow'>
        <a href='javascript:void(0)'>&amp;rsaquo;</a>
      </div>

      <div class='mobile-post-contents'>
        <b:if cond='data:post.thumbnailUrl'>
          <div class='mobile-index-thumbnail'>
            <div class='Image'>
              <img expr:src='data:post.thumbnailUrl'/>
            </div>
          </div>
        </b:if>

        <div class='post-body'>
          <b:if cond='data:post.snippet'><data:post.snippet/></b:if>
        </div>
      </div>
      <div style='clear: both;'/>
    </div>

    <div class='mobile-index-comment'>
      <b:if cond='data:blog.pageType != &quot;item&quot;'>
        <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
          <b:if cond='data:post.allowComments'>
            <b:if cond='data:post.numComments != 0'>
              <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
            </b:if>
          </b:if>
        </b:if>
      </b:if>
    </div>
  </div>
</b:includable>
                        <b:includable id='mobile-main' var='top'>
    <!-- posts -->
    <div class='blog-posts hfeed'>

      <b:include data='top' name='status-message'/>

      <b:if cond='data:blog.pageType == &quot;index&quot;'>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-index-post'/>
        </b:loop>
      <b:else/>
        <b:loop values='data:posts' var='post'>
          <b:include data='post' name='mobile-post'/>
        </b:loop>
      </b:if>
    </div>

   <b:include name='mobile-nextprev'/>
</b:includable>
                        <b:includable id='mobile-nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <div class='mobile-link-button' id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </div>
    </b:if>

    <b:if cond='data:olderPageUrl'>
      <div class='mobile-link-button' id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </div>
    </b:if>

    <div class='mobile-link-button' id='blog-pager-home-link'>
    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>
    </div>

    <div class='mobile-desktop-link'>
      <a class='home-link' expr:href='data:desktopLinkUrl'><data:desktopLinkMsg/></a>
    </div>

  </div>
  <div class='clear'/>
</b:includable>
                        <b:includable id='mobile-post' var='post'>
  <div class='date-outer'>
    <b:if cond='data:post.dateHeader'>
      <h2 class='date-header'><span><data:post.dateHeader/></span></h2>
    </b:if>
    <div class='date-posts'>
      <div class='post-outer'>

        <div class='post hentry uncustomized-post-template'>
          <a expr:name='data:post.id'/>
          <b:if cond='data:post.title'>
            <h3 class='post-title entry-title'>
              <b:if cond='data:post.link'>
                <a expr:href='data:post.link'><data:post.title/></a>
              <b:else/>
                <b:if cond='data:post.url'>
                  <b:if cond='data:blog.url != data:post.url'>
                    <a expr:href='data:post.url'><data:post.title/></a>
                  <b:else/>
                    <data:post.title/>
                  </b:if>
                <b:else/>
                  <data:post.title/>
                </b:if>
              </b:if>
            </h3>
          </b:if>

          <div class='post-header'>
            <div class='post-header-line-1'/>
          </div>

          <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
            <data:post.body/>
            <div style='clear: both;'/> <!-- clear for photos floats -->
          </div>

          <div class='post-footer'>
            <div class='post-footer-line post-footer-line-1'>
              <span class='post-author vcard'>
                <b:if cond='data:top.showAuthor'>
                  <b:if cond='data:post.authorProfileUrl'>
                    <span class='fn'>
                      <a expr:href='data:post.authorProfileUrl' rel='author' title='author profile'>
                        <data:post.author/>
                      </a>
                    </span>
                  <b:else/>
                    <span class='fn'><data:post.author/></span>
                  </b:if>
                </b:if>
              </span>

              <span class='post-timestamp'>
                <b:if cond='data:top.showTimestamp'>
                  <data:top.timestampLabel/>
                  <b:if cond='data:post.url'>
                    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'><abbr class='published' expr:title='data:post.timestampISO8601'><data:post.timestamp/></abbr></a>
                  </b:if>
                </b:if>
              </span>

              <span class='post-comment-link'>
                <b:if cond='data:blog.pageType != &quot;item&quot;'>
                  <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                    <b:if cond='data:post.allowComments'>
                      <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'><b:if cond='data:post.numComments == 1'>1 <data:top.commentLabel/><b:else/><data:post.numComments/> <data:top.commentLabelPlural/></b:if></a>
                    </b:if>
                  </b:if>
                </b:if>
              </span>
            </div>

            <div class='post-footer-line post-footer-line-2'>
              <b:if cond='data:top.showMobileShare'>
                <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                  <a href='javascript:void(0);'><data:shareMsg/></a>
                </div>
              </b:if>
              <b:if cond='data:top.showDummy'>
                <div class='goog-inline-block dummy-container'><data:post.dummyTag/></div>
              </b:if>
            </div>

          </div>
        </div>

        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
        <b:if cond='data:blog.pageType == &quot;item&quot;'>
          <b:if cond='data:post.showThreadedComments'>
            <b:include data='post' name='comments'/>
          <b:else/>
            <b:include data='post' name='comments'/>
          </b:if>
        </b:if>
      </div>
    </div>
  </div>
</b:includable>
                        <b:includable id='nextprev'>
  <div class='blog-pager' id='blog-pager'>
    <b:if cond='data:newerPageUrl'>
      <span id='blog-pager-newer-link'>
      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'><data:newerPageTitle/></a>
      </span>
    </b:if>
    <b:if cond='data:olderPageUrl'>
      <span id='blog-pager-older-link'>
      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'><data:olderPageTitle/></a>
      </span>
    </b:if>

    <a class='home-link' expr:href='data:blog.homepageUrl'><data:homeMsg/></a>

    <b:if cond='data:mobileLinkUrl'>
      <div class='blog-mobile-link'>
        <a expr:href='data:mobileLinkUrl'><data:mobileLinkMsg/></a>
      </div>
    </b:if>

  </div>
  <div class='clear'/>
</b:includable>
                        <b:includable id='post' var='post'>
  <div class='post hentry'>
    <b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:post.title'>
      <h2 class='post-title entry-title'>
     <b:if cond='data:post.link'>
       <a expr:href='data:post.link'><data:post.title/></a>
     <b:else/>
        <b:if cond='data:post.url'>
          <a expr:href='data:post.url'><data:post.title/></a>
        <b:else/>
          <data:post.title/>
        </b:if>
     </b:if>
      </h2>
</b:if>
<b:else/>
      <h1 class='post-title entry-title'>
     <b:if cond='data:post.link'>
       <a expr:href='data:post.link'><data:post.title/></a>
     <b:else/>
        <b:if cond='data:post.url'>
          <a expr:href='data:post.url'><data:post.title/></a>
        <b:else/>
          <data:post.title/>
        </b:if>
     </b:if>
      </h1>
</b:if>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<div class='postmeta'>
		<span class='post-labels'>
        <b:if cond='data:post.labels'>Mục: 
          <b:loop values='data:post.labels' var='label'>
            <a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'>, </b:if>
          </b:loop>
        </b:if>
      </span>
		
</div>
</b:if>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<div class='thumbnail'>
<script type='text/javascript'>
//<![CDATA[
function bp_thumbnail_resize(e,d){var c=1600;var a=true;var b="http://2.bp.blogspot.com/-erTXCq61ULM/TmHYAQBZ0GI/AAAAAAAACCs/6cBX54Dn6Gs/s1600/default.png";if(a==true&&e==""){e=b}image_tag='<img src="'+e.replace("/s72-c/","/s"+c+"/")+'" class="postthumb" alt="'+d+'" width="180px" height="130px"/>';if(e!=""){return image_tag}else{return""}};
//]]>
</script>
<a expr:href='data:post.url'><script type='text/javascript'>
document.write(bp_thumbnail_resize(&quot;<data:post.thumbnailUrl/>&quot;,&quot;<data:post.title/>&quot;));
</script></a>
</div>
</b:if></b:if>

    <div class='post-header'>
    <div class='post-header-line-1'/>
    </div>

    <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<div expr:id='&quot;summary&quot; + data:post.id'><data:post.body/></div>
<script type='text/javascript'>createSummaryAndThumb(&quot;summary<data:post.id/>&quot;);</script>

  <div class='readmorecontent'><a expr:href='data:post.url'><i class='icon-mail-forward' style='margin-right:10px'/>Đọc thêm</a></div>
</b:if>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'><data:post.body/></b:if>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'><data:post.body/></b:if>
      <div style='clear: both;'/> <!-- clear for photos floats -->
    </div>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<!-- Scripts Start -->
<b:if cond='data:post.isFirstPost'>
<!-- Facebook -->
<div id='fb-root'/>
<script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
js = d.createElement(s); js.id = id;
js.src = &quot;http://connect.facebook.net/en_US/all.js#xfbml=1&quot;;
fjs.parentNode.insertBefore(js, fjs);
}(document, &#39;script&#39;, &#39;facebook-jssdk&#39;));
</script>
<!-- Google +1 -->
<script type='text/javascript'>
(function() {
var po = document.createElement(&#39;script&#39;); po.type = &#39;text/javascript&#39;; po.async = true;
po.src = &#39;https://apis.google.com/js/plusone.js&#39;;
var s = document.getElementsByTagName(&#39;script&#39;)[0]; s.parentNode.insertBefore(po, s);
})();
</script>
<!-- Twitter -->
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=&quot;//platform.twitter.com/widgets.js&quot;;fjs.parentNode.insertBefore(js,fjs);}}(document,&quot;script&quot;,&quot;twitter-wjs&quot;);</script>
</b:if>
<!-- Scripts End -->
<!-- Horizontal social buttons Start -->
<div class='horizontal-social-buttons' style='padding:10px 0 10px;'>
<!-- Twitter -->
<div style='float:left;'>
<a class='twitter-share-button' data-count='horizontal' data-lang='en' data-related='' data-via='' expr:data-text='data:post.title' expr:data-url='data:post.url' href='https://twitter.com/share'>Tweet</a>
</div>
<!-- Google +1 -->
<div style='float:left;'>
<g:plusone annotation='bubble' expr:href='data:post.url' size='medium'/>
</div>
<!-- Facebook Like+Send -->
<div style='float:left;'>
<fb:like colorscheme='light' expr:href='data:post.url' font='' layout='button_count' send='true' show_faces='false'/>
</div>
<!-- Pinterest Start -->
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<div id='pin-wrapper' style='float: left; margin:0px 0px 0px 30px; width:44px;'>
<a data-pin-config='beside' data-pin-do='buttonPin' expr:href='&quot;http://pinterest.com/pin/create/button/?url=&quot; + data:post.url'><img src='//assets.pinterest.com/images/pidgets/pin_it_button.png'/></a>
<span style='margin-left:-44px;'><a data-pin-config='beside' data-pin-do='buttonBookmark' href='//pinterest.com/pin/create/button/' style='outline:none;border:none;'/></span>
</div> 
<script src='http://assets.pinterest.com/js/pinit.js' type='text/javascript'/>
<style type='text/css'> 
#pin-wrapper &gt; a {background-image:none !important;}
</style> 
</b:if> 
<!-- Pinterest End -->
</div>
<div style='clear: both;'/>
<!-- Horizontal social buttons End -->
 <div class='clear'/>
<div id='related-posts'>
<b:loop values='data:post.labels' var='label'>
<b:if cond='data:label.isLast != &quot;true&quot;'>
</b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=related_results_labels_thumbs&amp;max-results=8&quot;' type='text/javascript'/></b:if></b:loop>
<script type='text/javascript'>
var currentposturl=&quot;<data:post.url/>&quot;;
var maxresults=4;
var relatedpoststitle=&quot;Related Posts :&quot;;
removeRelatedDuplicates_thumbs();
printRelatedLabels_thumbs();
</script>
</div><div class='clear'/>
</b:if>

    <div class='post-footer'>
    <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
    <div class='post-footer-line post-footer-line-1'>
      </div>

      <div class='post-footer-line post-footer-line-2'>
      <span class='post-labels'>
        <b:if cond='data:post.labels'>
          <data:postLabelsLabel/>
          <b:loop values='data:post.labels' var='label'>
            <a expr:href='data:label.url' rel='tag'><data:label.name/></a><b:if cond='data:label.isLast != &quot;true&quot;'>,</b:if>
          </b:loop>
        </b:if>
      </span>
      </div>    </b:if>

      <div class='post-footer-line post-footer-line-3'>
      <span class='post-location'>
        <b:if cond='data:top.showLocation'>
          <b:if cond='data:post.location'>
            <data:postLocationLabel/>
            <a expr:href='data:post.location.mapsUrl' target='_blank'><data:post.location.name/></a>
          </b:if>
        </b:if>
      </span>
      </div>
    </div>
  </div>
</b:includable>
                        <b:includable id='postQuickEdit' var='post'>
  <b:if cond='data:post.editUrl'>
    <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
      <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
        <img alt='' class='icon-action' height='18' src='//img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
      </a>
    </span>
  </b:if>
</b:includable>
                        <b:includable id='shareButtons' var='post'>
<b:if cond='data:top.showEmailButton'><a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'><span class='share-button-link-text'><data:top.emailThisMsg/></span></a></b:if><b:if cond='data:top.showBlogThisButton'><a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'><span class='share-button-link-text'><data:top.blogThisMsg/></span></a></b:if><b:if cond='data:top.showTwitterButton'><a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToTwitterMsg/></span></a></b:if><b:if cond='data:top.showFacebookButton'><a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=620\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToFacebookMsg/></span></a></b:if><b:if cond='data:top.showOrkutButton'><a class='goog-inline-block share-button sb-orkut' expr:href='data:post.sharePostUrl + &quot;&amp;target=orkut&quot;' expr:title='data:top.shareToOrkutMsg' target='_blank'><span class='share-button-link-text'><data:top.shareToOrkutMsg/></span></a></b:if><b:if cond='data:top.showDummy'><div class='goog-inline-block dummy-container'><data:post.dummyTag/></div></b:if>
</b:includable>
                        <b:includable id='status-message'>
<b:if cond='data:navMessage'>
<div>
</div>
<div style='clear: both;'/>
</b:if>
</b:includable>
                        <b:includable id='threaded-comment-form' var='post'>
  <div class='comment-form'>
    <a name='comment-form'/>
    <b:if cond='data:mobile'>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
    <b:else/>
      <p><data:blogCommentMessage/></p>
      <data:blogTeamBlogMessage/>
      <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
      <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
    </b:if>
    <data:post.friendConnectJs/>
    <data:post.cmtfpIframe/>
    <script type='text/javascript'>
      BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
    </script>
  </div>
</b:includable>
                        <b:includable id='threaded_comment_css'>   
</b:includable>
                        <b:includable id='threaded_comment_js' var='post'>
  <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>

  <script type='text/javascript'>
    (function() {
      var items = <data:post.commentJso/>;
      var msgs = <data:post.commentMsgs/>;
      var config = <data:post.commentConfig/>;

// <![CDATA[
      var cursor = null;
      if (items && items.length > 0) {
        cursor = parseInt(items[items.length - 1].timestamp) + 1;
      }

      var bodyFromEntry = function(entry) {
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
              return '<span class="deleted-comment">' + entry.content.$t + '</span>';
            }
          }
        }
        return entry.content.$t;
      }

      var parse = function(data) {
        cursor = null;
        var comments = [];
        if (data && data.feed && data.feed.entry) {
          for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
            var comment = {};
            // comment ID, parsed out of the original id format
            var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
            comment.id = id ? id[2] : null;
            comment.body = bodyFromEntry(entry);
            comment.timestamp = Date.parse(entry.published.$t) + '';
            if (entry.author && entry.author.constructor === Array) {
              var auth = entry.author[0];
              if (auth) {
                comment.author = {
                  name: (auth.name ? auth.name.$t : undefined),
                  profileUrl: (auth.uri ? auth.uri.$t : undefined),
                  avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                };
              }
            }
            if (entry.link) {
              if (entry.link[2]) {
                comment.link = comment.permalink = entry.link[2].href;
              }
              if (entry.link[3]) {
                var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                if (pid && pid[1]) {
                  comment.parentId = pid[1];
                }
              }
            }
            comment.deleteclass = 'item-control blog-admin';
            if (entry.gd$extendedProperty) {
              for (var k in entry.gd$extendedProperty) {
                if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                  comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                  comment.displayTime = entry.gd$extendedProperty[k].value;
                }
              }
            }
            comments.push(comment);
          }
        }
        return comments;
      };

      var paginator = function(callback) {
        if (hasMore()) {
          var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
          if (cursor) {
            url += '&published-min=' + new Date(cursor).toISOString();
          }
          window.bloggercomments = function(data) {
            var parsed = parse(data);
            cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1
            callback(parsed);
            window.bloggercomments = null;
          }
          url += '&callback=bloggercomments';
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = url;
          document.getElementsByTagName('head')[0].appendChild(script);
        }
      };
      var hasMore = function() {
        return !!cursor;
      };
      var getMeta = function(key, comment) {
        if ('iswriter' == key) {
          var matches = !!comment.author
              && comment.author.name == config.authorName
              && comment.author.profileUrl == config.authorUrl;
          return matches ? 'true' : '';
        } else if ('deletelink' == key) {
          return config.baseUri + '/delete-comment.g?blogID='
               + config.blogId + '&postID=' + comment.id;
        } else if ('deleteclass' == key) {
          return comment.deleteclass;
        }
        return '';
      };

      var replybox = null;
      var replyUrlParts = null;
      var replyParent = undefined;

      var onReply = function(commentId, domId) {
        if (replybox == null) {
          // lazily cache replybox, and adjust to suit this style:
          replybox = document.getElementById('comment-editor');
          if (replybox != null) {
            replybox.height = '250px';
            replybox.style.display = 'block';
            replyUrlParts = replybox.src.split('#');
          }
        }
        if (replybox && (commentId !== replyParent)) {
          document.getElementById(domId).insertBefore(replybox, null);
          replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
          replyParent = commentId;
        }
      };

      var hash = (window.location.hash || '#').substring(1);
      var startThread, targetComment;
      if (/^comment-form_/.test(hash)) {
        startThread = hash.substring('comment-form_'.length);
      } else if (/^c[0-9]+$/.test(hash)) {
        targetComment = hash.substring(1);
      }

      // Configure commenting API:
      var configJso = {
        'maxDepth': config.maxThreadDepth
      };
      var provider = {
        'id': config.postId,
        'data': items,
        'loadNext': paginator,
        'hasMore': hasMore,
        'getMeta': getMeta,
        'onReply': onReply,
        'rendered': true,
        'initComment': targetComment,
        'initReplyThread': startThread,
        'config': configJso,
        'messages': msgs
      };

      var render = function() {
        if (window.goog && window.goog.comments) {
          var holder = document.getElementById('comment-holder');
          window.goog.comments.render(holder, provider);
        }
      };

      // render now, or queue to render when library loads:
      if (window.goog && window.goog.comments) {
        render();
      } else {
        window.goog = window.goog || {};
        window.goog.comments = window.goog.comments || {};
        window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
        window.goog.comments.loadQueue.push(render);
      }
    })();
// ]]>
  </script>
</b:includable>
                        <b:includable id='threaded_comments' var='post'>
  <b:include name='threaded_comment_css'/>

  <div class='comments' id='comments'>
    <a name='comments'/>
    <h4>
      <b:if cond='data:post.numComments == 1'>
        1 <data:commentLabel/>:
      <b:else/>
        <data:post.numComments/> <data:commentLabelPlural/>:
      </b:if>
    </h4>

    <div class='comments-content'>
      <b:if cond='data:post.embedCommentForm'>
        <b:include data='post' name='threaded_comment_js'/>
      </b:if>
      <div id='comment-holder'>
         <data:post.commentHtml/>
      </div>
    </div>

    <p class='comment-footer'>
      <b:if cond='data:post.allowNewComments'>
        <b:include data='post' name='threaded-comment-form'/>
      <b:else/>
        <data:post.noNewCommentsText/>
      </b:if>
    </p>

    <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'>
        <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
        </iframe>
      </div>
    </b:if>

    <div id='backlinks-container'>
    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
       <b:if cond='data:post.showBacklinks'>
         <b:include data='post' name='backlinks'/>
       </b:if>
    </div>
    </div>
  </div>
</b:includable>
                      </b:widget>
                    </b:section>
<script type='text/javascript'>
    var postperpage=6;
    var numshowpage=4;
    var upPageWord =&#39;&#171; Previous &#39;;
    var downPageWord =&#39;Next &#187;&#39;;
    var urlactivepage=location.href;
    var home_page=&quot;/&quot;;
  </script>
<script src='http://yourjavascript.com/218437119/halamanav.js' type='text/javascript'/>
</div></div>  
<div class='sidebar-wrapper'>
 <b:section class='sidebar' id='sidebar' showaddelement='yes'>
   <b:widget id='HTML4' locked='false' title='Kết bạn để được chia sẻ nhiều hơn' type='HTML'>
     <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <div class="g-person" data-href="//plus.google.com/u/0/116919575805578664970" data-rel="author"></div>

<!-- Place this tag after the last widget tag. -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>
  </div>

  <b:include name='quickedit'/>
</b:includable>
   </b:widget>
   <b:widget id='Label1' locked='false' title='CHUYÊN MỤC' type='Label'>
     <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <h2><data:title/></h2>
  </b:if>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
      <ul>
        <b:loop values='data:labels' var='label'>
          <li>
            <b:if cond='data:blog.url == data:label.url'>
              <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
            <b:else/>
              <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
            </b:if>
            <b:if cond='data:showFreqNumbers'>
              <span dir='ltr'>(<data:label.count/>)</span>
            </b:if>
          </li>
        </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
   </b:widget>
   <b:widget id='PopularPosts1' locked='false' title='ĐỌC NHIỀU NHẤT' type='PopularPosts'>
     <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
  <div class='widget-content popular-posts'>
    <ul>
      <b:loop values='data:posts' var='post'>
      <li>
        <b:if cond='!data:showThumbnails'>
          <b:if cond='!data:showSnippets'>
            <!-- (1) No snippet/thumbnail -->
            <a expr:href='data:post.href'><data:post.title/></a>
          <b:else/>
            <!-- (2) Show only snippets -->
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <div class='item-snippet'><data:post.snippet/></div>
          </b:if>
        <b:else/>
          <!-- (3) Show only thumbnails or (4) Snippets and thumbnails. -->
          <div expr:class='data:showSnippets ? &quot;item-content&quot; : &quot;item-thumbnail-only&quot;'>
            <b:if cond='data:post.thumbnail'>
              <div class='item-thumbnail'>
                <a expr:href='data:post.href' target='_blank'>
                  <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                </a>
              </div>
            </b:if>
            <div class='item-title'><a expr:href='data:post.href'><data:post.title/></a></div>
            <b:if cond='data:showSnippets'>
              <div class='item-snippet'><data:post.snippet/></div>
            </b:if>
          </div>
          <div style='clear: both;'/>
        </b:if>
      </li>
      </b:loop>
    </ul>
    <b:include name='quickedit'/>
  </div>
</b:includable>
   </b:widget>
 </b:section>
</div>
<div class='clr'/>
</div></div> 
  </div>
<div id='footer'>
<div class='content-wrapper'>
            <div class='footer-wrapper'>
<b:section class='footer' id='footer1' preferred='yes'>
  <b:widget id='HTML2' locked='false' title='Liên hệ' type='HTML'>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='LinkList1' locked='false' title='Blogroll' type='LinkList'>
    <b:includable id='main'>

<b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
 <div class='widget-content'>
   <ul>
     <b:loop values='data:links' var='link'>
       <li><a expr:href='data:link.target'><data:link.name/></a></li>
     </b:loop>
   </ul>
   <b:include name='quickedit'/>
 </div>
</b:includable>
  </b:widget>
</b:section>
<b:section class='footer' id='footer2' preferred='yes'>
  <b:widget id='HTML5' locked='false' title='Like để nhận thông tin Offline nhanh!' type='HTML'>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
  <b:widget id='LinkList2' locked='false' title='Recent Posts' type='LinkList'>
    <b:includable id='main'>

<b:if cond='data:title != &quot;&quot;'><h2><data:title/></h2></b:if>
 <div class='widget-content'>
   <ul>
     <b:loop values='data:links' var='link'>
       <li><a expr:href='data:link.target'><data:link.name/></a></li>
     </b:loop>
   </ul>
   <b:include name='quickedit'/>
 </div>
</b:includable>
  </b:widget>
</b:section>
<b:section class='footer' id='footer4' preferred='yes'>
  <b:widget id='HTML3' locked='false' title='DỊCH VỤ' type='HTML'>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
</b:section>
    <div class='clr'/>
</div></div>
<div id='credit'>
<div class='content-wrapper'>
  &#169; Copyright 2014 <a href='http://giaiphapthuonghieu.vn' target='_blank'>GiaiPhapThuongHieu</a>
  </div>
<div id='top-arrow'>
  <a class='top-arrow' href='javascript:void(0);' onclick='jQuery(&apos;html, body&apos;).animate({scrollTop:0}, &apos;slow&apos;);'><i class='icon-angle-up'/></a>
  </div>
</div>
</div>   
<script type='text/javascript'>
//<![CDATA[
$('.popular-posts ul li .item-snippet').each(function(){
  var txt=$(this).text().substr(0,60);
  var j=txt.lastIndexOf(' ');
  if(j>42)
     $(this).text(txt.substr(0,j).replace(/[?,!\.-:;]*$/,'...'));
});
//]]>
</script>
<script type='text/javascript'>    
var jump=function(e)
{
    //alert(&#39;here&#39;);
   if (e){
       //e.preventDefault();
       var target = jQuery(this).attr(&quot;href&quot;).replace(&#39;/&#39;, &#39;&#39;);
   }else{
       var target = location.hash;
   }

   jQuery(&#39;html,body&#39;).animate(
   {
       scrollTop: (jQuery(target).offset().top) - 70
   },3000,function()
   {
     //location.hash = target;
   });
}
jQuery(document).ready(function($)
{
    $(document).on(&#39;click&#39;, &#39;a[href*=#]&#39;, jump);
    if (location.hash){
        setTimeout(function(){
            $(&#39;html, body&#39;).scrollTop(0).show();
            jump();
        }, 0);
    }else{
        $(&#39;html, body&#39;).show();
    }
});    
</script>
<link href='https://googledrive.com/host/0B7gBPicAMEt-YXNiWm5MNGZiWlk' rel='stylesheet'/>
<script src='http://code.jquery.com/jquery-1.9.1.js' type='text/javascript'/>
<scrip	t src='https://rawgithub.com/Tuyettrinh/cssis/master/popup_control_full.js' type='text/javascript'/>

<script src='https://rawgithub.com/Tuyettrinh/cssis/master/addlinkcopy.js' type='text/javascript'></script>

</body>
</HTML>
<!-- giaiphapthuonghieu.net -->
