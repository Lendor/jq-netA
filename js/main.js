// Callback függvény fade után.
function fadeDone() {
    console.log(this);
};

$("p").click(function(){
    $(this).hide();
    // $(this).fadeTo(5000, 1, fadeDone); 
    // $(this).slideDown(3500).slideUp(2000);
  });
// Esemény kiváltása
// $("p").click();

// Kattintás megelőzése.
/* $("nav a.nav-link").click(function(ev) {
    ev.preventDefault();
    var link = $(this);
    $(document.body).animate({
        opacity: '0'
    }, 1000, function() {
        document.location = link.attr("href");
    });
}); */

// Events oldal.
$(".input-row input").on("keyup", function(ev) {
    $.each( $(".events-card-deck .card .card-title"), function (i, elem) {
      var elem = $(elem);
      var search = ev.target.value.toLowerCase();
      var content = elem.html().toLowerCase();
        if ( content.indexOf(search) == -1) {
          elem.parents(".card").hide();
        } else {
          elem.parents(".card").show();
        }
      });
    });

// Regiszter oldal.
    $(".custom-file").on("change", function(ev) {
        var name = ev.target.value.split("\\").pop();
        $(this)
          .find(".custom-file-label")
          .html(name);
      })

  var alertBox = $(".alert.alert-primary");    
  function showInvalidMessage() {
    alertBox  
      .removeClass("alert-primary")
      .addClass("alert-danger")
      .find(".alert-message")
      .text("Sikertelen belépés!");
   }


 // Ticket oldal
 $(function() {
   $('[data-toggle="tooltip]').tooltip();
 });

 //Jegyek tömbje.

 var tickets = [
   {
     event: "Sziget Fesztivál",
     time: "2018-08-03 18:00:00",
     seller: "Kis Márton",
     pcs: 5,
     link: "licit/1"
   }
 ];

 //Jegyek táblájának generálása
var ticketTable = $(".table.table.table-striped").eq(0);
function fillTicketsTable() {
  var tbody = ticketTable.find("tbody");
  
  $.each( tickets, function(index, ticket) {
    var row = $(".templates .ticket-row").clone();
    row.find("td").eq(0).html(ticket.event);
    row.find("td").eq(1).html(ticket.time);
    row.find("td").eq(2).html(ticket.seller);
    row.find("td").eq(3).html(ticket.pcs);
    row.find("td").eq(4).html(ticket.link);
    tbody.append(row);
  });
  
}

