   document.getElementById('proxyForm').addEventListener('submit', function(event) {
       event.preventDefault();
       var url = document.getElementById('urlInput').value;
       fetch(url)
           .then(response => response.text())
           .then(data => {
               document.getElementById('proxyContent').innerHTML = data;
           });
   });
