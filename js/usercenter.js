$(function () {
  // 收起左栏
  $('#pullleft').click(function () {
    if ($('.usercenter .side').css('display') !== 'none') {
      $('.usercenter .side').fadeOut();
      $('.usercenter .main').css({
        width: '100%',
        'margin-left': '0'
      })
    } else {
      $('.usercenter .side').fadeIn();
      $('.usercenter .main').css({
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


  // 个人信息修改
  $('#changeinfobtn').click(function () {
    $('#infolist .changeinfo').each(function () {
      if ($(this).find('span').eq(1).css('display') == 'none') {
        $(this).find('span').eq(0).addClass('hide');
        $(this).find('span').eq(1).removeClass('hide');
      } else {
        $(this).find('span').eq(1).addClass('hide');
        $(this).find('span').eq(0).removeClass('hide');
      }
    })
  })

  // 修改信息 获取焦点改变样式
  $('#infolist .changeinfo span.in-type').find('input').on({
    focus: function () { $(this).addClass('focus'); },
    blur: function () { $(this).removeClass('focus'); }
  })


  $('#changePW1').click(function () {
    $(this).parent().find('span').eq(0).addClass('hide');
    $(this).parent().find('span').eq(1).removeClass('hide');
  })

  $('#changePW4').click(function () {
    $(this).parents('td').find('span').eq(0).addClass('hide');
    $(this).parents('td').find('span').eq(1).removeClass('hide');
  })

  $('#changePW2').click(function () {
    $(this).parents('td').find('span').eq(1).addClass('hide');
    $(this).parents('td').find('span').eq(0).removeClass('hide');
  })

  $('#changePW5').click(function () {
    $(this).parents('td').find('span').eq(1).addClass('hide');
    $(this).parents('td').find('span').eq(0).removeClass('hide');
  })

  $('#changePW3').click(function () {
    $('#infolist .changeinfo').each(function () {
      $(this).find('span').eq(1).addClass('hide');
      $(this).find('span').eq(0).removeClass('hide');
    })
  })


  // 个人消息
  // 弹出层
  $('.popup').css({
    'cursor': 'pointer',
    'text-decoration': 'underline'
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

  // 修改头像
  // 弹出层
  $('.popup1').click(function () {
    $('.cover').show();
  })

  // 上传头像
  var options =
    {
      thumbBox: '.thumbBox',
      spinner: '.spinner'
    }
  var cropper = $('.imageBox').cropbox(options);
  $('#upload-file').on('change', function (event) {

    var Oimg = document.createElement("img");
    Oimg.file = this.files[0];
    Oimg.onload = function () {
      var upImgWidht = this.width;
      var upImgHeight = this.height;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
      Oimg.src = e.target.result;
      options.imgSrc = Oimg.src;
      cropper = $('.imageBox').cropbox(options);
    }
    reader.readAsDataURL(this.files[0]);
    var avatarName = event.currentTarget.files[0].name;
  })
  $('#btnCrop').on('click', function () {
    var img = cropper.getDataURL();
    // console.log(img)

    $('.cropped').html('');
    // $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:64px;margin-top:4px;border-radius:64px;box-shadow:0px 0px 12px #7E7E7E;" ><p>64px*64px</p>');
    $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:100px;margin-top:10px;border-radius:100px;box-shadow:0px 0px 12px #7E7E7E;"><p>100px*100px</p>');
    $('.cropped').append('<img src="' + img + '" align="absmiddle" style="width:180px;margin-top:10px;border-radius:180px;box-shadow:0px 0px 12px #7E7E7E;"><p>180px*180px</p>');
  })
  $('#btnZoomIn').on('click', function () {
    cropper.zoomIn();
  })
  $('#btnZoomOut').on('click', function () {
    cropper.zoomOut();
  })

})