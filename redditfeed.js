$(document).ready(function() {
	
	var url = 'https://www.reddit.com/r/gaming/hot/.rss?sort=hot';
	
	feednami.load(url,function(result){
		if(result.error) {
			console.log(result.error);
		} else {
			var entries = result.feed.entries;
			for(var i = 0; i < entries.length; i++){
				var entry = entries[i];
				console.dir(entry);
                addWidgetContent(entry);
			}
		}
	});
});

function addWidgetContent(entry) {
    // Get information from entry
    var entryTitle = entry.title;
    var entryLink = entry.link;
    var entryAuthor = entry.author;
    var entryAuthorLink = "https://www.reddit.com" + entry.author;
    var entryDescription = entry.description;
    
    console.log(entryTitle);
    console.log(entryLink);
    console.log(entryAuthor);
    console.log(entryAuthorLink);
    
    // Create new section for entry
    var section = document.createElement("div");
    var contentDiv = document.getElementById("redditfeed")
                             .getElementsByClassName("widget")[0]
                             .getElementsByClassName("widget-content")[0];
    // Alternating bg for better readability
    if(contentDiv.childElementCount % 2 == 0) {
        section.setAttribute("class", "widget-content-section");
    } else {
        section.setAttribute("class", "widget-content-section-dark");
    }
    contentDiv.appendChild(section);
    
    // Header div
    var header = document.createElement("div");
    header.setAttribute("class", "content-header");
    section.appendChild(header);
    
    // Title
    var title = document.createElement("h3");
    title.setAttribute("class", "content-title");
    
    var titleLink = document.createElement("a");
    titleLink.setAttribute("href", entryLink);
    
    titleLink.appendChild(document.createTextNode(entryTitle));
    
    title.appendChild(titleLink);
    header.appendChild(title);
    
    // Author
    var author = document.createElement("h6");
    author.setAttribute("class", "content-author");
    
    var authorLink = document.createElement("a");
    authorLink.setAttribute("href", entryAuthorLink);
    
    authorLink.appendChild(document.createTextNode(entryAuthor));
    
    author.appendChild(authorLink);
    header.appendChild(author);
    
    // Breaks
    section.appendChild(document.createElement("br"));
    section.appendChild(document.createElement("br"));
    
    // Description
    var description = document.createElement("p");
    description.setAttribute("class", "content-description");
    description.innerHTML = entryDescription;
    
    section.appendChild(description);
}