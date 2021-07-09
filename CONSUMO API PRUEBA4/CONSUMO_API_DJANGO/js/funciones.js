$('#btn_mostrarCliente').click(function() {
    fn_mostrarCliente();
})

$("#btn_almacenar").click(function(){
  var clientePantalla = $("#txt_cliente").val();
  var direccionPantalla = $("#txt_direccion").val();
  var correoPantalla = $("#txt_correo").val();
  var telefonoPantalla = $("#txt_telefono").val();

  $.post("http://127.0.0.1:8000/cliente/",
  {
    cliente: clientePantalla,
    direccion: direccionPantalla,
    correo: correoPantalla,
    telefono: telefonoPantalla
  },
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
});

$("#btn_eliminar").click(function(){
  var id = $("#txt_id").val();
  $.ajax({
    url: 'http://127.0.0.1:8000/cliente/' + id,
    method: 'DELETE',
    contentType: 'application/json',
    success: function(result) {
       console.log('REGISTRO ELIMINADO');
    },
    error: function(request,msg,error) {
      console.log('ERROR');
    }
});
});


function fn_mostrarCliente() {
    $.getJSON('http://127.0.0.1:8000/cliente/?format=json', function(data) {
        var respuesta = data;
        
        for (var i in respuesta) {
          $("#lista_cliente").append('<li>' + respuesta[i].cliente + ' - ' + respuesta[i].direccion +' - ' + respuesta[i].correo +' - ' + respuesta[i].telefono +'</li>');
        }
    }).fail(function() {
        console.log('Error al consumir la API!');
    });
}