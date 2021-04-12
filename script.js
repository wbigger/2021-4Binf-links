const sites = [];

const writeSiteList = function(sites) {

}

const addNewSite = function(event) {
  event.preventDefault();
  console.log("inside addNewSite");
  const url = $("#form-url").val();
  const title = $("#form-title").val();
  const category = $("#form-category").val();

  const newSite = {
    url: url,
    title: title,
    category: category
  };

  sites.append(newSite); // fino a qui OK

  // CONSEGNA: modificare la pagina in modo da funzionare con la nuova lista "sites"

  const aElem = $("<a>").attr("href",url).text(title);
  const liElem = $("<li>").append(aElem);
  $("#site-list").append(liElem);
}

const init = function() {
  console.log("inside init");
  $("form").submit(addNewSite);
}

$(document).ready(init);




  // const a1 = $("a"); // prendo tutti gli elementi con tag a
  
  // const a2 = $("<a>"); // CREO un nuovo elemento con tag a
