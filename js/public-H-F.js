$(function () {
  // 弹出层
  $('.popup').css('cursor', 'pointer');
  $('.popup').click(function () {
    $('.cover').show();
  })

  $('.ofeedback').click(function () {
    $('.ifeedback').show();
  })

  $('#cfeedback').click(function () {
    $('.ifeedback').hide();
  })

  $('#cfeedback-1').click(function () {
    $('.ifeedback').hide();
  })

  // 关闭弹出层
  $('#close').click(function () {
    $('.cover').hide();
  })

  $('#close1').click(function () {
    $('.cover').hide();
  })

  // 浏览器升级提示关闭
  $('.browserup-close').click(function () {
    $('.browserup').hide();
  })

  // 回到顶部
  var wHeight = $(window).height();
  $(window).scroll(function () {
    var top = $(this).scrollTop();
    if (top >= 200) {
      $('.backtop .top').slideDown();
    } else {
      $('.backtop .top').slideUp();
    }
  })

  $(".backtop .top").click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });


  //登录后顶部隐藏菜单
  $('#userenter').mouseover(function () {
    $('#userenter-list').slideDown(150);
  });
  $('#userenter-list').mouseleave(function () {
    $(this).slideUp(150);
  });



  //选择老师弹出层介绍限制字符个数
  $('.tcontent').each(function () {
    var maxwidth = 74;
    if ($(this).text().length > maxwidth) {
      $(this).text($(this).text().substring(0, maxwidth));
      $(this).html($(this).html() + '…');
    }
  });




  // 免费请家教选择老师数量
  $('.selectTeacher .item').click(function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).find('input[name="chooseTeacher"]').attr('checked', true);
    } else {
      $(this).removeClass('active');
      $(this).find('input[name="chooseTeacher"]').attr('checked', false);
    }

    var num = $('.selectTeacher .active').length;
    if (num > 3) {
      $(this).find('input[name="chooseTeacher"]').attr('checked', false);
      $(this).removeClass('active');
    }
  })

  $('input[name="chooseTeacher"]').click(function () {
    if ($(this).attr('checked') == false) {
      $(this).attr('checked', true);
      $(this).parents('.selectTeacher .item').addClass('active');
    } else {
      $(this).attr('checked', false);
      $(this).parents('.selectTeacher .item').removeClass('active');
    }

    // var num = $('.selectTeacher .active').length;
    // if (num > 3) {
    //   $(this).attr('checked', false);
    //   $('.selectTeacher .item').removeClass('active');
    // }
  })


  // 获取菜单
  function questionsClassMenu() {

    $.ajax({
      type: 'GET',
      url: 'js/data/questionBankll.js', //请求路径
      dataType: 'json',
      success: function (data) {
        var leveltwoPanelId = '';
        var jsonParentId = '0';
        var menu1 = data.menu1;
        for (var i = 0; i < menu1.length; i++) {
          if (menu1[i].grade == 1) {
            $('.sub-nav').append('<li class="title" id="levelone-' + menu1[i].thisNodeId + '">' + menu1[i].thisNodeName + '</li>');
          } else if (menu1[i].grade == 2) {
            jsonParentId = menu1[i].parentNodeId;
            $('#levelone-' + jsonParentId).after('<li  id="leveltwo-' + menu1[i].thisNodeId + '"><a href="###">' + menu1[i].thisNodeName + '</a></li>');
          } else if (menu1[i].grade == 3) {
            jsonParentId = menu1[i].parentNodeId;
            $('#leveltwo-' + jsonParentId).find('a').append('<div class="third-subnav" id="leveltwoPanel' + i + '"></div>');
            leveltwoPanelId = 'leveltwoPanel' + i;
            $('#' + leveltwoPanelId).append('<div class="item"><p>' + menu1[i].thisNodeName + '</p><div class="content clearfix"><span>分类</span><dl id="typeId-' + menu1[i].thisNodeId + '"></dl></div></div>')
          } else if (menu1[i].grade == 4) {
            jsonParentId = menu1[i].parentNodeId;
            $('#typeId-' + jsonParentId).append('<dd><a href="###">' + menu1[i].thisNodeName + '</a></dd>');
          }
        }

        // 鼠标指向出现
        $('.submenu').hover(function () {
          $('.sub-nav').show()
        }, function () {
          $('.sub-nav').hide()
        })

        $('.sub-nav li').hover(function () {
          $(this).find('div.third-subnav').show()
        }, function () {
          $(this).find('div.third-subnav').hide()
        })
      }
    });
  }

  questionsClassMenu();





})