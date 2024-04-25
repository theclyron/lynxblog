document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
  
    if (currentMonth === 12 && currentDate.getDate() >= 25) {
      showSnowflakes(); // Call function to show snowflakes
    } else if (currentMonth === 1 && currentDate.getDate() === 1) {
      showSnowflakes(); // Call function to show snowflakes
    }
  
    function showSnowflakes() {
      const snowflakesElement = document.getElementById('snowflakes');
      snowflakesElement.style.display = 'block'; // Show the snowflakes
    }
  });
  