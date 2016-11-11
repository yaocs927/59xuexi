$(function () {
  // ============
  // 首页
  // ============

  // 轮播
  var i = 0;
  var size = $('#banner .img li').size();
  // 默认状态
  $('#banner .img li').eq(0).show();
  $('#banner .num li').eq(0).addClass('active');

  // 自动播放
  var t = setInterval(nextImg, 4000);
  $("#banner").hover(function () {
    clearInterval(t);
  }, function () {
    t = setInterval(nextImg, 4000);
  })

  // 原点动画
  $('#banner .num li').mouseover(function () {
    var index = $(this).index();
    i = index;
    $('#banner .img li').eq(i).stop().fadeIn(100).siblings().stop().fadeOut(1000);
    $(this).addClass('active').siblings().removeClass('active');
  })

  // 切换动画
  function nextImg() {
    i++;
    if (i == size) {
      i = 0;
    }
    $('#banner .img li').eq(i).fadeIn(1000).siblings().fadeOut(1000);
    $('#banner .num li').eq(i).addClass('active').siblings().removeClass('active');
  }
  // 轮播结束



  // ============
  // 注册
  // ============

  // 注册人选择
  $('.usertab a').eq(0).addClass('active');
  $('.register-main .main').eq(0).show();
  $('.usertab a').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var index = $(this).index();
    $('.register-main .main').eq(index).show().siblings('.main').hide();
    var tabName = $(this).attr('name');
    // console.log(index1)
  })



  // 用户协议显示
  $('#useragreement-A').click(function () {
    $('#useragreement').slideToggle();
  })

  // 文本框获取焦点改变样式
  $('#tabTeacher input').on({
    focus: function () { $(this).addClass('focus'); },
    blur: function () { $(this).removeClass('focus'); },
  })

  $('#tabStudent input').on({
    focus: function () { $(this).addClass('focus'); },
    blur: function () { $(this).removeClass('focus'); },
  })


})