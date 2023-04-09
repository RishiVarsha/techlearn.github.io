function back() {
    addEventListener("click", function() {
        window.location.href = "Courses.html";
    });
}

function showIframe(iframeId) {
    // Get the container div and the iframes div
    var container = document.getElementById('container');
    var iframesDiv = document.getElementById('iframes');

    // Hide all iframes
    var iframes = iframesDiv.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.display = 'none';
    }

    // Show the selected iframe
    var selectedIframe = document.getElementById(iframeId);
    selectedIframe.style.display = 'block';
}