function getAllProducts(){
$.ajax({
        url: "https://damp-reef-8180.herokuapp.com/services/productservice/product",
        method: 'GET',
        // params: {dataType: 'json'}
        // dataType: "json"
      }).done(function(data) {
        var i;
        var table="<table class='table'><tr><th>Id</th><th>Price</th></tr>";
        var x = data.getElementsByTagName("Product");
        for (i = 0; i <x.length; i++) { 
          table += "<tr><td>" +
          x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("productPrice")[0].childNodes[0].nodeValue +
          "</td></tr>";
        }
      document.getElementById("p1").innerHTML = table + "</table>";
      	// console.log(data)
      });
}