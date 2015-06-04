#set($_qk = "+structureName:FileAsset +confolder:$!{folder1}")
#set($cons = $dotcontent.pull(${_qk},$!{numberOfResults},"FileAsset.fileName"))
##change undefined to FileAsset.fileName


#if ($UtilMethods.isSet($displayTitle))
  <h3>$!{displayTitle}</h3>
#end
#if($cons.size() > 0)


#if ($includeScripts != "No")
<script type="text/javascript" src="http://www.shsu.edu/scripts/resizecrop.min.js"></script>
<script type="text/javascript" src="http://www.shsu.edu/scripts/fancybox/jquery.fancybox.js"></script>
<link rel="stylesheet" type="text/css" href="http://www.shsu.edu/scripts/fancybox/jquery.fancybox.css" media="screen" />

<style>
#left-col #primary-content ul.imagegallery li { 
margin-bottom: 8px;
}
</style>

#end

#if ($imageWidth == 0)
#set ($imageWidth = 146)
#end
#if ($imageHeight == 0)
#set ($imageHeight = 146)
#end

<script type='text/javascript'>
$(document).ready(function(){
    $('ul.imagegallery img').resizecrop({
      width: $!imageWidth,
      height: $!imageHeight,
      vertical:"top"
    });  
  });  
$(".fancybox")
$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']")
    .attr('rel', 'gallery')
    .fancybox({
        beforeLoad: function() {
            this.title = $(this.element).attr('caption');
        },
    prevEffect  : 'none',
    nextEffect  : 'none',
    helpers  : {
      title  : {
        type: 'inside'
      }
    },
        margin : [20, 80, 20, 80]
    });
</script>
<style type="text/css">
.fancybox-nav {width: 60px;}
.fancybox-nav span {
    visibility: visible;
    opacity: 1;
}
.fancybox-next {right: -80px;}
.fancybox-prev {left: -80px;}
.clearGallery {clear:both;}
</style>

<ul class="imagegallery">

#foreach($con in $cons)

#set ( $dotPos = $webapi.parseInt($con.fileName.lastIndexOf('.')) + 1 )
#set ($ext = $con.fileName.substring($dotPos))


  <li style="margin-left:4px;">
<a href="http://www.shsu.edu/dotAsset/${con.identifier}.$!{ext}" class="fancybox" rel="gallery" caption="$!{con.description}">
<img src="http://www.shsu.edu/dotAsset/${con.identifier}.$!{ext}" class="fancybox" rel="gallery" alt="$!{con.description}" />
</a>
</li>
#end
  
  <br class="clearGallery"  />
</ul>
  

#end

<div class="clear p4"></div>?