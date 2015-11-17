$(function () {
  'use strict';

  $.http = $.ajax;

  $.http({
    method: 'GET'
  , url: './api/public/dns.json'
  }).then(function (data) {
    console.log(data);
  }, function (err) {
    console.error(err);
  });
});
