const addNewLink = function(event) {
  event.preventDefault();
  console.log("inside addNewLink");
  const url = $("#form-url").val();
  const title = $("#form-title").val();
  const category = $("#form-category").val();
  console.log(url);
  console.log(title);
  console.log(category);

  const aElem = $("<a>").attr("href",url).text(title);
  const liElem = $("<li>").append(aElem);
  $("#link-list").append(liElem);

}

const init = function() {
  console.log("inside init");
  $("#form-submit").on("click",addNewLink);
}


$(document).ready(init);