function submit (link, title) {
    link = encodeURIComponent(link)
    title = encodeURIComponent(title)
  
    var id = '1FAIpQLSe2FMd6ekjC0uLXMOe0Vmf7CG5amx0Bleb4MwZN3w4vjkY3Fw'
    var queryString = '/formResponse?&entry.1691213846=' + link + '&entry.73227310=' + title + '&submit=SUBMIT'
  
    var url = 'https://docs.google.com/forms/d/e/' + id + queryString
  
    var opts = {
      method: "POST",
      mode: "no-cors", // apparently Google will only submit a form if "mode" is "no-cors"
      redirect: "follow",
      referrer: "no-referrer"
    }
  
    return fetch(url, opts)
  }

chrome.browserAction.onClicked.addListener(function(tab) { 
    alert('Submitted to Journal Club')

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        let title = tabs[0].title;
        submit(url, title)
    });
});