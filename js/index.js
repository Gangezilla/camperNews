var users = [];
var headlines = [];
var rank = [];
var avatars = [];
var timePosted = [];
var dates = [];
var dateReal = [];
var links = [];
var truncHeadlines = [];
var camperNewsApiUrl = "http://www.freecodecamp.com/news/hot";
var divCount = 0;
var userInformation = [
  {
}
  ];
//myFunction.bookName = 'myBook';
//userInformation[i].user=users[i];
$(document).ready(function() {
   $(".fade-right").animate({left:200, opacity:"show"}, 1500);
  $.getJSON(camperNewsApiUrl, function(json) {
    //this loop describes getting info from the API. and it all works well.
    for (var i = 0; i < json.length; i++) {
      users[i] = json[i].author.username;
      headlines[i] = json[i].headline;
      rank[i] = json[i].rank;
      avatars[i] = json[i].author.picture;
      timePosted[i] = json[i].timePosted;
      dates[i] = new Date(timePosted[i]);
      links[i] = json[i].link;
      dateReal[i] = dates[i].toDateString();
      //dateReal[i] = dates[i].toDateString();
      //the above comment is if you just want the date, considering how indecisive you are about this all...
      
    }
    makeObject();
    
    function makeObject() {
 for (var i = 0; i<users.length;i++){
   userInformation['newsSnippet' + i] = {
                       'author':users[i],
                       'headlines':headlines[i],
                       'likes':rank[i],
                       'avatar':avatars[i],
                       'datePosted':dateReal[i],
                       'link':links[i]};
                          }
          } //closes makeObject();
console.log(userInformation);
    $(function() { //make the divs
      for (var i =0 ; i < (Object.keys(userInformation).length)-1;i++) {
        $('<a href = "'+userInformation['newsSnippet'+i].link+'"> \
<div id = "variableID' + i + ' " class = "col-xs-6 posts">\
  <div class = "container fade-right">\
    <div class ="row">\
\
      <div class = "col-xs-2">\
      <img class = "formatImage" src = "' + userInformation['newsSnippet'+i].avatar + '"     \       </img>\
      </div>\
\
       <div class = "col-xs-6 ">\
        <p class = "formatHead"> '+userInformation['newsSnippet'+i].headlines+'</p>\
       </div>\
\
      <div class = "col-xs-4"><p class = "formatInside centerText">by: ' + userInformation['newsSnippet'+i].author + '</br> &#9733; '+userInformation['newsSnippet'+i].likes+' </br>Posted on: '  +userInformation['newsSnippet'+i].datePosted+'  </p>\
  </div>\
\
</div>\
</div>\
</div></a>').appendTo('#outerHeaven');
        //console.log(userInformation['newsSnippet'+i].author)
       // console.log(userInformation['newsSnippet'+i].headlines)
      }  
    }); //closes function to make divs
   
    
  }); //closes getJSON command up there

}) //closes document.ready function.