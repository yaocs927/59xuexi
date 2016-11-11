// 表单验证
$(function () {
  // 首页、登录页 登录框表单验证
  $('#loginForm').validate({
    errorElement: 'span',
    rules: {
      'login-username': {
        required: true,
        minlength: 11,
        maxlength: 11,
        digits: true
      },
      'login-userpassword': {
        required: true,
        minlength: 6,
        maxlength: 16,
      }
    },
    messages: {
      'login-username': {
        required: '请输入正确的手机号',
        minlength: '请输入正确的手机号',
        maxlength: '请输入正确的手机号',
        digits: '请输入正确的手机号'
      },
      'login-userpassword': {
        required: '请输入6~16位密码',
        minlength: '请输入6~16位密码',
        maxlength: '请输入6~16位密码'
      }
    }
  });


  // 注册表单验证
  $('#registerForm').validate({
    errorElement: 'em',
    errorPlacement: function (error, element) {
      $(element).parents('li').append(error);
    },
    rules: {
      'register-username': {
        required: true,
        minlength: 11,
        maxlength: 11,
        digits: true
      },
      'register-userpassword': {
        required: true,
        minlength: 6,
        maxlength: 16
      },
      'register-confirm-userpassword': {
        required: true,
        minlength: 6,
        maxlength: 16,
        equalTo: '#register-userpassword'
      }
    },
    messages: {
      'register-username': {
        required: '请输入正确的手机号',
        minlength: '请输入正确的手机号',
        maxlength: '请输入正确的手机号',
        digits: '请输入正确的手机号'
      },
      'register-userpassword': {
        required: '请输入6~16位密码',
        minlength: '请输入6~16位密码',
        maxlength: '请输入6~16位密码'
      },
      'register-confirm-userpassword': {
        required: '两次输入不一样',
        minlength: '请输入6~16位密码',
        maxlength: '请输入6~16位密码',
        equalTo: '两次输入不一样'
      }
    }
  });


  // 找回密码验证
  $('#resetpasswordForm').validate({
    errorElement: 'em',
    errorPlacement: function (error, element) {
      $(element).parents('li').append(error);
    },
    rules: {
      'reset-username': {
        required: true,
        minlength: 11,
        maxlength: 11,
        digits: true
      },
      'reset-password': {
        required: true,
        minlength: 6,
        maxlength: 16
      },
      'reset-confirm-password': {
        required: true,
        minlength: 6,
        maxlength: 16,
        equalTo: '#reset-password'
      }
    },
    messages: {
      'reset-username': {
        required: '请输入正确的手机号',
        minlength: '请输入正确的手机号',
        maxlength: '请输入正确的手机号',
        digits: '请输入正确的手机号'
      },
      'reset-password': {
        required: '请输入6~16位密码',
        minlength: '请输入6~16位密码',
        maxlength: '请输入6~16位密码'
      },
      'reset-confirm-password': {
        required: '两次输入不一样',
        minlength: '请输入6~16位密码',
        maxlength: '请输入6~16位密码',
        equalTo: '两次输入不一样'
      }
    }
  });


  // 免费请家教表单
  // $('#freetutorForm').validate({
  //   errorLabelContainer: $('.validateinfo em'),
  //   rules: {
  //     'freetutor-phone': {
  //       required: true
  //     },
  //     'freetutor-qq': {
  //       required: true
  //     },
  //     'freetutor-class': {
  //       required: true
  //     },
  //     'freetutor-subject': {
  //       required: true
  //     },
  //     'freetutor-point': {
  //       required: true
  //     }
  //   },
  //   messages: {
  //     'freetutor-phone': {
  //       required: '带 * 号为必填信息'
  //     },
  //     'freetutor-qq': {
  //       required: '带 * 号为必填信息'
  //     },
  //     'freetutor-class': {
  //       required: '带 * 号为必填信息'
  //     },
  //     'freetutor-subject': {
  //       required: '带 * 号为必填信息'
  //     },
  //     'freetutor-point': {
  //       required: '带 * 号为必填信息'
  //     }
  //   }
  // })

});