document.addEventListener('DOMContentLoaded', function() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
  
    if (currentMonth === 12 && currentDate.getDate() >= 25) {
      showSnowflakes();
    } else if (currentMonth === 1 && currentDate.getDate() === 1) {
      showSnowflakes();
    }
  
    function showSnowflakes() {
      const snowflakesElement = document.getElementById('snowflakes');
      snowflakesElement.style.display = 'block';
    }
  });
  
