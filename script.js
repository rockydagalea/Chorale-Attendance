// Function to dynamically calculate and display the date range from Monday to Sunday
function displayDateRange() {
    const currentDate = new Date();
    
    // Get the current day of the week (0-6, where 0 is Sunday)
    const currentDay = currentDate.getDay();
    
    // Calculate the number of days to subtract to get the previous Monday
    const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay; // Handle Sunday as the start of the week
    const mondayDate = new Date(currentDate);
    mondayDate.setDate(currentDate.getDate() + diffToMonday);
    
    // Get the following Sunday by adding 6 days to Monday
    const sundayDate = new Date(mondayDate);
    sundayDate.setDate(mondayDate.getDate() + 6);
    
    // Options to format the date
    const options = { month: 'short', day: 'numeric' };
    
    // Format the dates
    const formattedMonday = mondayDate.toLocaleDateString('en-US', options);
    const formattedSunday = sundayDate.toLocaleDateString('en-US', options);
    const fullYear = sundayDate.getFullYear();
    
    // Display the date range
    const dateRangeElement = document.getElementById('date-range');
    dateRangeElement.textContent = `${formattedMonday} - ${formattedSunday}, ${fullYear}`;
}

// Call the displayDateRange function on page load
document.addEventListener('DOMContentLoaded', displayDateRange);
