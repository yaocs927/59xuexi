$(function () {

  // 科目下拉
  // $('.selectBox1 .cur-selected').click(function (e) {
  //   if ($('.selectBox1 .list').css('display') == 'none') {
  //     $(this).siblings('.list').slideDown(300);
  //   } else {
  //     $(this).siblings('.list').slideUp(200);
  //   }
  //   e.stopPropagation();  //阻止冒泡事件
  // })

  // 科目下拉
  $('.selectBox').each(function () {
    $(this).find('.cur-selected').on('click', function (e) {
      if ($(this).siblings('.list').css('display') == 'none') {
        $(this).siblings('.list').slideDown(300);
        $(this).parents('.subject').siblings('.classify').find('.selectBox .list').slideUp('fast');
        $(this).parents('.selectBox').siblings('.selectBox3').find('.list').slideUp('fast');
        console.log($(this).parents('.selectBox').siblings('.selectBox3').find('.list'));
      } else {
        $(this).siblings('.list').slideUp(200);
      }
      e.stopPropagation();  //阻止冒泡事件
    })
  });

  // $('.selectBox .cur-selected').click(function (e) {
  //   if ($('.selectBox1 .list').css('display') == 'none') {
  //     $(this).siblings('.list').slideDown(300);
  //   } else {
  //     $(this).siblings('.list').slideUp(200);
  //   }
  //   e.stopPropagation();  //阻止冒泡事件
  // })
  // 国内外切换
  $('.china-abroad li').click(function (e) {
    var index = $(this).index();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.firstlevel').eq(index).show().siblings('.firstlevel').hide();
    e.stopPropagation();
  })
  // 选择科目
  $('.firstlevel li').click(function () {
    var index = $(this).parent().index();
    var text1 = $('.china-abroad li').eq(index - 1).text();
    var text2 = $(this).text();
    $('.selectBox1 .cur-selected').text(text1 + ' - ' + text2);
    $('.selectBox1 .cur-selected').siblings('.list').slideUp(200);
    console.log(index);
  })

  // 选择分类
  $('.course li').click(function () {
    var text2 = $(this).text();
    $('.selectBox2 .cur-selected').text(text2);
    $('.selectBox2 .cur-selected').siblings('.list').slideUp(200);
  })

  // 空白点击隐藏菜单
  $(window).click(function (e) {
    if ($('.selectBox1 .list').css('display') == 'block') {
      $('.selectBox1 .list').slideUp(300);
    }
    if ($('.selectBox2 .list').css('display') == 'block') {
      $('.selectBox2 .list').slideUp(300);
    }
    e.stopPropagation();
  })


  // 选题数量
  var i = $('.testnum input').val();
  if (i == 0) {
    $('.minus').addClass('disabled');
  }
  $('.plus').click(function () {
    i++;
    $('.testnum input').attr('value', i);
    $('.minus').removeClass('disabled');
  })
  $('.minus').click(function () {
    i--;
    if (i <= 0) {
      $('.minus').addClass('disabled');
      i = 0;
    }
    $('.testnum input').attr('value', i);
  })


  // 点击左侧 添加/移除 知识点标签
  $('.thirdlevel li').click(function () {
    var text = $(this).text();
    if ($(this).attr('class') !== 'active') {  //点击添加标签
      $(this).addClass('active');
      $('.knowldgeLabel').append('<span></span>');
      var aa = $('.knowldgeLabel span').length;
      $('.knowldgeLabel span').eq(aa - 1).html(text + '<i></i>');
    } else {   //再次点击移除标签
      $(this).removeClass('active');
      $('.knowldgeLabel span').each(function () {
        if ($(this).text() == text) {
          $(this).remove();
        }
      });
    }

    // 设置知识点的个数显示
    var index = $('.knowldgeLabel span').index();
    $('.knowldgeLabel-num').text(index + 1);
    var num = $('.thirdlevel li').index();

    // 当有选定的标签时，设置全选按钮 为 取消全部已选标签
    if (index > -1) {
      $('#chooseall').addClass('active');
      $('#chooseall').attr('value', '取消全部已选标签');
    } else {
      $('#chooseall').removeClass('active');
      $('#chooseall').attr('value', '选择全部知识点');
    }

    // 点击标签移除标签
    $('.knowldgeLabel span').click(function () {
      var text1 = $(this).text();
      $(this).remove();
      $('.thirdlevel li').each(function () {
        if ($(this).text() == text1 && $(this).attr('class') == 'active') {
          $(this).removeClass('active');
        }
      })
      // 设置知识点的个数显示
      var index = $('.knowldgeLabel span').index();
      $('.knowldgeLabel-num').text(index + 1);

      // 标签全部移除后全选按钮的样式
      if (index < 0) {
        $('#chooseall').removeClass('active');
        $('#chooseall').attr('value', '选择全部知识点');
      }
    })

  })


  // 选择全部知识点
  $('#chooseall').click(function () {
    if ($(this).attr('class') !== 'active') { //选择全部知识点
      $(this).addClass('active');
      $(this).attr('value', '取消选择全部');
      $('.thirdlevel li').each(function () {
        var text = $(this).text();
        $('.knowldgeLabel').append('<span></span>');
        var aa = $('.knowldgeLabel span').length;
        $('.knowldgeLabel span').eq(aa - 1).html(text + '<i></i>');
      })
      $('.thirdlevel li').addClass('active');
    } else {  //取消选择全部
      $(this).removeClass('active');
      $(this).attr('value', '选择全部知识点');
      $('.knowldgeLabel').empty();
      $('.thirdlevel li').removeClass('active');
    }
    // 设置知识点的个数显示
    var index = $('.knowldgeLabel span').index();
    $('.knowldgeLabel-num').text(index + 1);

    // 点击标签移除标签
    $('.knowldgeLabel span').click(function () {
      var text1 = $(this).text();
      $(this).remove();
      $('.thirdlevel li').each(function () {
        if ($(this).text() == text1 && $(this).attr('class') == 'active') {
          $(this).removeClass('active');
        }
      })
      // 设置知识点的个数显示
      var index = $('.knowldgeLabel span').index();
      $('.knowldgeLabel-num').text(index + 1);

      // 标签全部移除后全选按钮的样式
      if (index < 0) {
        $('#chooseall').removeClass('active');
        $('#chooseall').attr('value', '选择全部知识点');
      } else {
        $('#chooseall').addClass('active');
        $('#chooseall').attr('value', '取消全部已选标签');
      }
    })
  })


  // 答题选择答案
  $('.select').on('change', function () {
    var aa = $('.select input:radio:checked').val();
    var bb = ['A', 'B', 'C', 'D'];
    for (i in bb) {
      i = aa - 1;
      $(this).siblings('.answertext').find('.mychoice').text(bb[i]);
    }
  })


  // 获取科目列表
  // $('#y-ol-getSubject').on('click', function () {
  function getSubject() {
    $.ajax({
      type: 'GET',
      url: 'js/data/questionBankll.js',
      data: 'JSON',
      dataType: 'JSON',
      success: function (data) {
        var leveltwoPanelId = '';
        var jsonParentId = '';
        var menu1 = data.menu1;
        for (var i = 0; i < menu1.length; i++) {
          if (menu1[i].grade == 1) {
            $('#y-ol-getSubject-list .course').append('<li class="y-ol-title" id="y-ol-levelone-' + menu1[i].thisNodeId + '">' + menu1[i].thisNodeName + '</li>');
          } else if (menu1[i].grade == 2) {
            jsonParentId = menu1[i].parentNodeId;
            $('#y-ol-levelone-' + jsonParentId).after('<li id="y-ol-leveltwo-' + menu1[i].thisNodeId + '">' + menu1[i].thisNodeName + '</a></li>');
          }
        }

      }
    });
  }
  getSubject();
  // })
})