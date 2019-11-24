jQuery(document).ready(function(){
jQuery("#sendMail").bind("click", function () {
  var email = jQuery("#email").val();
  var name = jQuery("#name").val();
  var coments = jQuery("#coments").val();

  if(email == ""){
  jQuery("#errorMess").text("Вы вы не ввели Email");
    return false;
  }else if(name == "") {
  jQuery("#errorMess").text("Вы вы не ввели Имя");
    return false;
  }else if(coments.length < 5){
  jQuery("#errorMess").text("Введите сообщение не мение 5 символов");
    return false;
};
jQuery("#email").val("");
jQuery("#name").val("");
jQuery("#coments").val("");



jQuery.ajax({
  url: "js/db.php",
  type: "POST",
  data: {email: email, name: name, coments: coments}, // Передаем данные для записи
  dataType: "json",


  success: function(result) {
    if(result){
      jQuery(".rows tr").remove();
      jQuery(".rows").append( function(){
        var res;
        for(var i = 0; i < result.users.id.length; i++){
        res += '<tr><td>'+ result.users.name[i] + '</td><td><br>' + result.users.coments[i] + '</td></tr>';

      }
        return res;

    });
    console.log(result);
  }else{
    alert(result.message);
  }
  return false;
}
});
return false;


});
});
