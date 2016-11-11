$(function () {
  // 登录框获取焦点时
  $('.adminlogin p').find('input').on({
    focus: function () {
      $(this).css('border-color', 'rgba(255,144,0,.8)');
    },
    blur: function () {
      $(this).css('border-color', 'rgba(255,255,255,.15)');
    }
  })

  // 收起左栏
  $('#pullleft').click(function () {
    if ($('.admincenter .side').css('display') !== 'none') {
      $('.admincenter .side').fadeOut();
      $('.admincenter .main').css({
        width: '100%',
        'margin-left': '0'
      })
    } else {
      $('.admincenter .side').fadeIn();
      $('.admincenter .main').css({
        width: 'calc(100% - 230px)',
        'margin-left': '230px'
      })
    }
  })

  //自动设置左栏高度
  var wTop = $(window).height();
  var wWidth = $(window).width();
  $('.side').css({
    height: wTop + 'px',
    // 'min-height': '600px'
  });
  $('.side .menu').css({
    height: (wTop - 65) + 'px'
  });
  $('.adminlogin-bg').css({
    height: wTop + 'px',
  });


  // ==========
  // 管理员中心
  // ==========
  // 查询列表结果 删除 通用   
  $('.deleteAdmin').on('click', function () {
    $('.admincenter-dx input[type=checkbox]:checked').each(function () {
      $(this).parents('tr').remove();
    })
  })

  //添加管理员 
  var addnum = 0;
  $('.addAdmin').on('click', function () {
    addnum++;
    var name = $('.messageDetail table td').find('input.addAdminName').val();
    $('.infolist table').append('<tr><td class="w5 admincenter-dx"><input type="checkbox" name="admincenter" id="admincenter-' + addnum + '"><label for="admincenter-' + addnum + '"></label></td><td class="w45">123</td><td class="w45">' + name + '</td></tr>')
    $('.cover').hide();
  })

  // 弹出层
  $('.popup').css({
    'cursor': 'pointer',
  });
  $('.popup').click(function () {
    $('.cover').show();
  })

  // 关闭弹出层
  $('#close').click(function () {
    $('.cover').hide();
  })

  $('#close1').click(function () {
    $('.cover').hide();
  })

  // 用户信息弹出
  $('#studentlist').on('click', '.userInfo', function () {
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

  // ==========
  // 用户管理
  // ==========
  $('.admin-yhgl table').hide();
  $('#studentlist').show();
  // 标签选择
  $('.labelselect input').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    // 获取选择的标签name
    var labelName = $(this).attr('name');
    $('#' + labelName).show().siblings('table').hide();
  })

  // ==========================
  // 试题、试卷、类型、知识点管理
  // ==========================
  // 分类下拉框
  $('.selectBox').each(function () {
      $(this).find('.cur-selected').on('click', function (e) {
          if ($(this).siblings('.list').css('display') == 'none') {
            $(this).siblings('.list').slideDown('fast');
            $(this).parents('td').siblings().find('.list').slideUp('fast');
            $(this).parents('tr').siblings().find('td .list').slideUp('fast');
          } else {
            $(this).siblings('.list').slideUp('fast');
          }
          e.stopPropagation();
        })
        // 选择分类
      $(this).find('.course li').click(function () {
        var text = $(this).text();
        $(this).parents('.list').siblings('.cur-selected').text(text);
        $(this).parents('.list').slideUp('fast');
      })
    })
    // 空白点击隐藏下拉框
  $(window).click(function () {
    $('.selectBox').each(function () {
      if ($(this).find('.list').css('display') == 'block') {
        $(this).find('.list').slideUp(300);
      }
    })
  })

  // 分类下拉框 selectBox1
  $('.selectBox2').each(function () {
    $(this).find('.cur-selected').on('click', function (e) {
      if ($(this).siblings('.list').css('display') == 'none') {
        $(this).siblings('.list').slideDown('fast');
        $(this).parents('td').siblings().find('.list').slideUp('fast');
        $(this).parents('tr').siblings().find('td .list').slideUp('fast');
      } else {
        $(this).siblings('.list').slideUp('fast');
      }
      e.stopPropagation();
    })
  })
  $('.course1').on('click', 'li', function () {
      if ($(this).find('input:checkbox').attr('checked') == undefined) {
        $(this).find('input:checkbox').attr('checked', 'checked');
      } else {
        $(this).find('input:checkbox').attr('checked', false)
      }

    })
    // 试卷添加--获取知识点名字、隐藏下拉框
  $('.zsdName').on('click', function () {
    var zsdName = [];
    $(this).siblings('ul').find('input[type="checkbox"]:checked').each(function () {
      zsdName.push(' ' + $(this).parent().text());
    })
    $('#SJ-zsdName').val(zsdName);
    $(this).parent('.list').slideUp(300);
  })

  // 上传文件获取文件名
  $('.file').each(function () {
    $(this).on('change', function (e) {
      var name = e.currentTarget.files[0].name;
      $(this).parent('span').siblings('.filename').val(name);
    })
  })

  // 添加试题
  $('.addST').on('click', function () {
    addnum++;
    var ST_txName = $('#ST-txName').text();
    var ST_kmName = $('#ST-kmName').text();
    var ST_zsdName = $('#ST-zsdName').text();
    $('.infolist table').append('<tr><td class="w10 admincenter-dx"><input type="checkbox" name="admincenter" id="admincenter-' + addnum + '"><label for="admincenter-' + addnum + '"></label></td><td class="w20">试题ID</td><td class="w10">' + ST_txName + '</td><td class="w10">' + ST_kmName + '</td><td class="w30">' + ST_zsdName + '</td><td class="w20"><a href="###" target="_blank">点击跳转该试题的解析页面</a></td></tr>');
  })

  // 添加试卷
  $('.addSJ').on('click', function () {
    addnum++;
    var SJ_sjlxName = $('#SJ-sjlxName').text();
    var SJ_dqName = $('#SJ-dqName').text();
    var SJ_njName = $('#SJ-njName').text();
    var SJ_sjName = $('#SJ-sjName').val();
    var SJ_stNum = $('#SJ-stNum').val();
    $('.infolist table').append('<tr><td class="w10 admincenter-dx"><input type="checkbox" name="admincenter" id="admincenter-' + addnum + '"><label for="admincenter-' + addnum + '"></label></td><td class="w20">2015040611</td><td class="w10">' + SJ_sjlxName + '</td><td class="w10">' + SJ_dqName + '</td><td class="w10">' + SJ_njName + '</td><td class="w30">' + SJ_sjName + '</td><td class="w10">' + SJ_stNum + '</td></tr>');
  })

  // 添加试题类型
  $('.addSTLX').on('click', function () {
    addnum++;
    var STLX_lxName = $('#STLX-lxName').val();
    $('.infolist table').append('<tr><td class="w10 admincenter-dx"><input type="checkbox" name="admincenter" id="admincenter-' + addnum + '"><label for="admincenter-' + addnum + '"></label></td><td class="w45">2015040611</td><td class="w45">' + STLX_lxName + '</td></tr>');
  })

  // 添加试卷类型
  $('.addSJLX').on('click', function () {
    addnum++;
    var SJLX_lxName = $('#SJLX-lxName').val();
    $('.infolist table').append('<tr><td class="w10 admincenter-dx"><input type="checkbox" name="admincenter" id="admincenter-' + addnum + '"><label for="admincenter-' + addnum + '"></label></td><td class="w45">2015040611</td><td class="w45">' + SJLX_lxName + '</td></tr>');
  })

  // 添加科目类别
  $('.addKMLB').on('click', function () {
    addnum++;
    var KMLB_lbName = $('#KMLB-lbName').val();
    var KMLB_sskmName = $('#KMLB-sskmName').text();
    $('.infolist table').append('<tr><td class="w10 admincenter-dx"><input type="checkbox" name="admincenter" id="admincenter-' + addnum + '"><label for="admincenter-' + addnum + '"></label></td><td class="w30">2015040611</td><td class="w30">' + KMLB_lbName + '</td><td class="w30">' + KMLB_sskmName + '</td></tr>');
  })

  // 添加知识点
  $('.addZSD').on('click', function () {
    addnum++;
    var ZSD_zsdName = $('#ZSD-zsdName').val();
    var ZSD_sszsdName = $('#ZSD-sszsdName').text();
    $('.infolist table').append('<tr><td class="w10 admincenter-dx"><input type="checkbox" name="admincenter" id="admincenter-' + addnum + '"><label for="admincenter-' + addnum + '"></label></td><td class="w30">2015040611</td><td class="w30">' + ZSD_zsdName + '</td><td class="w30">' + ZSD_sszsdName + '</td></tr>');
  })

  // ==========
  // 需求管理
  // ==========
  // 批量处理需求
  $('.batchProcess').on('click', function () {
    $('.infolist table tr').each(function () {
      if ($(this).find('.admincenter-dx input[type="checkbox"]').attr('checked') == 'checked') {
        $(this).find('.processStatus').addClass('yes').removeClass('no').text('已处理');
      }
    })
  })

})