
document.addEventListener("DOMSubtreeModified", function(){
    var allColumns = document.getElementsByTagName("ytd-item-section-renderer");

    for(var i = 0;i< allColumns.length;i++){
        var title = allColumns.item(i).querySelector("#title-annotation");
        if(title!=null && (title.textContent.includes("Рекомендованный канал")
          || title.textContent.includes("Recommended channel for you")
          || title.textContent.includes("Recommended videos for you"))){
            allColumns.item(i).remove();
        }
    }
});
