const sites = [];

const site2li = (site) => {
  const aElem = $("<a>").attr("href", site.url).text(site.title);
  const trashElem = $("<img>")
    .addClass("trash-icon")
    .attr("src", "trash.png")
    .attr("alt", "trash icon")
    .data("id",site.id);
  const liElem = $("<li>")
    .append(aElem)
    .append(trashElem);
  console.log("trashElem id: "+ trashElem.data("id"));
  return liElem;
}

const li2list = (newList, li) => newList.append(li)

const writeSiteList = function (listElement, sites) {
  sites
    .map(site2li)
    .reduce(li2list, listElement);
}

const generateId = function() {
   return Math.floor(Math.random()*100000); 
}

const addNewSite = function (event) {
  event.preventDefault();
  console.log("inside addNewSite");
  const url = $("#form-url").val();
  const title = $("#form-title").val();
  const category = $("#form-category").val();

  const newSite = {
    id: generateId(),
    url: url,
    title: title,
    category: category
  };

  console.log("new site with ID: "+newSite.id)

  sites.push(newSite); // fino a qui OK

  writeSiteList($("#site-list"), sites);

}

const deleteSite = function() {
  console.log('dentro delete site!!');
  const id = $(this).data("id");
  console.log('site id: ' + id);
  // elimino il sito con questo id
  // aggiorno la lista visualizzata a schermo
}


let init = function () {
  console.log("inside init");
  $("form").submit(addNewSite);
  $("#site-list").on("click",".trash-icon",deleteSite);
  console.log();
}

$(document).ready(init);


  // const a1 = $("a"); // prendo tutti gli elementi con tag a

  // const a2 = $("<a>"); // CREO un nuovo elemento con tag a
