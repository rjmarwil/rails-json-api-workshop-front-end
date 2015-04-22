$(function() {
  var source = $("#json-template").html();
  var template = Handlebars.compile(source);

  $.ajax({
    url: "http://localhost:3000/api/products.json"
  }).success(function(data){
    var html = template(data);

    $('#context').append(html);
  });

});
