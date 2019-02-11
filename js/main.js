{/* <img class="img-fluid" src="${article.image}" alt="" /> */}
const renderNewsTemplate = article => {
  const template = `
    <div class="news-card col-sm-6 col-xs-6 col-md-3 col-xl-3 col-lg-3 ">
        <div class="myNews">
            <div class="article-img" style="background-image: url('${
              article.image
            }')"></div> 
            <div class="secondPart">
                <div class="date">
                    <span>${article.source}</span>
                    <span>${article.date}</span>
                </div>
                <p class="head">${article.title}</p>
                <p class="content">
                ${article.content}
                </p>
            </div>
        </div>
    </div>
    `;
  return template;
};

$(document).ready(() => {
  $.getJSON("../data.json").done(data => {
    renderNews(data);
  });

  $(".newsHead button").on("click", e => {
    const menuPart = $(".menuPart");
    const newsPart = $(".newsPart");
    if (menuPart.hasClass("active")) {
      menuPart.removeClass("active");
      menuPart.animate({ marginLeft: "-200px" });
    } else {
      menuPart.addClass("active");
      menuPart.animate({ marginLeft: "0" });
    }
  });
});
const renderNews = news => {
  news.forEach(article => {
    const articleHTML = renderNewsTemplate(article);
    $(".newContainer").append(articleHTML);
  });
};
