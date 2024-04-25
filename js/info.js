    var intervalId;

    function displayUserAgent() {
        var userAgentString = navigator.userAgent;
        var htmlContent = '<i class="fas fa-user-gear"></i>&nbsp;' + userAgentString;
        document.getElementById('userAgent').innerHTML = htmlContent;
    }

    function updateDateTime() {
        var now = new Date();
        var dateTimeString = now.toLocaleString();
        var htmlContent = '<i class="fas fa-user-clock"></i>&nbsp;' + dateTimeString;
        document.getElementById('dateTime').innerHTML = htmlContent;
    }

    function handleShiftKeyPress(event) {
        if (event.keyCode === 16) {
            displayUserAgent();
            updateDateTime();
            intervalId = setInterval(updateDateTime, 1000);
        }
    }

    function handleShiftKeyRelease(event) {
        if (event.keyCode === 16) {
            clearInterval(intervalId);
            document.getElementById('userAgent').innerHTML = '';
            document.getElementById('dateTime').innerHTML = '';
        }
    }

    document.addEventListener('keydown', handleShiftKeyPress);
    document.addEventListener('keyup', handleShiftKeyRelease);