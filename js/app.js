(function () {
  'use strict';

  var tpl;
  $.http = $.ajax;

  function template(data) {
    var tpls = [];

    data.forEach(function (record) {
      var $tpl = $(tpl);
      $tpl.find('.js-type').html(record.type);
      $tpl.find('.js-priority').html(record.priority);
      $tpl.find('.js-ttl').html(record.ttl);
      $tpl.find('.js-query').html(record.name || record.zone);
      $tpl.find('.js-answer').html(record.value);
      tpls.push($tpl);
    });

    $('.js-dns-row-container').html(tpls);
  }

  $.http({
    method: 'GET'
  , url: '/api/dns/public/dns.json'
  }).then(function (data) {
    console.log('data');
    console.log(data);
    template(data);
  }, function (err) {
    console.error(err);
  });

  $(function () {
    tpl = $('.js-dns-row-container').html();
    $('.js-dns-row-container').html('');

    console.log('ready to assign click handler or whatever');
  });
}());
