// Generated by CoffeeScript 1.9.3
(function() {
 
    
    window.Jquery.put = function(url, data, callback, type) {
      if (type == null) {
        type = 'json';
      }
      data = data + '&_method=PUT&_token=' +$('meta[name="csrf-token"]').attr('content');
      $.post(url, data, callback, type);
    };
     window.Jquery.remove = function(url, data, callback, type) {
      if (type == null) {
        type = 'json';
      }
      data = data + '&_method=DELETE&_token=' +$('meta[name="csrf-token"]').attr('content');
       $.post(url, data, callback, type);
    };
  

}).call(this);
