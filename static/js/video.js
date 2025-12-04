var $iframe = $("iframe"),
  $videoLink = $(".play-btn"),
  playerTemplate =
    `<div class="player">
        <div class="player__video">
            <div class="video-filler">
            </div>
            <button class="video-close">&times;</button>
            <iframe class="video-iframe" allow="autoplay; encrypted-media; fullscreen"  src="https://player.bilibili.com/player.html?isOutside=true&aid=113716825759557&bvid=BV1aBCBYCExs&cid=32457098354&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
、        </div>
    <div/>`;
$videoLink.on("click", function (e) {
  var localTemplate = "",
    videoWidth = parseInt($(this).data("width")),
    videoHeight = parseInt($(this).data("height")),
    videoAspect = (videoHeight / videoWidth) * 100,
    $player = null,
    $video = null,
    $close = null,
    $iframe = null;
  e.preventDefault();
  localTemplate = playerTemplate.replace(
    "{{iframevideo}}",
    $(this).prop("href")
  );
  $player = $(localTemplate);
  $player.find(".video-filler").css("padding-top", videoAspect + "%");
  $close = $player.find(".video-close").on("click", function () {
    // console.log($(this).off().closest(".player"))
    $(this).off().closest(".player").hide().remove();
  });
  $player.appendTo("body").addClass("js--show-video");
});
