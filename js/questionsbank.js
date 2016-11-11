$(function () {
  

  // 切换单选多选
  $('.bigBtn').click(function () {
    if ($('.shreeBtn').css('display') == 'none') {
      $(this).find('input').attr('value', '切换单选');
      $('.shreeBtn').css('display', 'block');
      $('.oneBtn').css('display', 'none');
      $('#point').find('input').show();
    } else {
      $(this).find('input').attr('value', '切换多选');
      $('.shreeBtn').css('display', 'none');
      $('.oneBtn').css('display', 'block');
      $('#point').find('input').hide();
    }
  })
  // 知识点单选
  $('#point li a').click(function () {
    $(this).parents('li').siblings().removeClass('active');
    $(this).parents('li').addClass('active');
  })
  // 知识点多选
  $('.shreeBtn').find('input').eq(0).click(function () {
    $('#point').find('input').attr('checked', 'checked');
  })
  $('.shreeBtn').find('input').eq(1).click(function () {
    $('#point').find('input').removeAttr('checked');
  })


  //左栏滚动变化
  var questionsMenu = $('#questionsMenu').offset().top;  //左栏距顶部高度
  var dHeight = $(document).height();  //文档高度
  var wHeight = $(window).height();    //可视区域高度
  $(window).scroll(function () {  

    //滚动左栏固定  
    var top = $(this).scrollTop();       //滚动距离
    if (top >= questionsMenu) {
      $('#questionsMenu').addClass('fixed');
    } else {
      $('#questionsMenu').removeClass('fixed');
    }

    //到页面底部 改变左栏高度
    if (dHeight - wHeight - top < 150) {
      $('#questionsMenu .list').css('max-height', '250px');
    } else {
      $('#questionsMenu .list').css({
        'max-height': '500px',
        height: 'auto'
      });
    }

  })

  // 分页
  // $('.bottompage ul li').click(function () {
  //   $(this).siblings().removeClass('active');
  //   $(this).addClass('active');
  // })



  
})