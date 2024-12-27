// Predefined list of names
const namesList = [
    'Sheryll Magajes',
    'Christine Maravilla',
    'Chito Ponciano',
    'Sharra Mhay Martinez',
    'Ellen Asuncion', 
    'Joan Mercado',
    'Vina Marie Legaspi',
    'Belinda Cruz',
    'Sherani Noval',
    'Evangeline Cruz',
    'Hermegelda Merchant',
    'Jennifer De Leon',
    'Cenly Hufana',
    'Charisma Morada',
    'Melanie Gegantino',
    'Rona Lajara-Mendoza',
    'Dalia Tapiru',
    'Rowena Jamio',
    'Imelda Andrada',
    'Anabel Gaoat',
    'Romelda Buzon',
    'Minhet De Jesus',
    'Josephine Sampang',
    'Mico Malibiran',
    'Jona Pineda',
    'Grace Estorque',
    'Maribeth David'
];

// Function to dynamically calculate and display the date range from Monday to Sunday
function displayDateRange() {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    const mondayDate = new Date(currentDate);
    mondayDate.setDate(currentDate.getDate() + diffToMonday);
    
    const sundayDate = new Date(mondayDate);
    sundayDate.setDate(mondayDate.getDate() + 6);
    
    const options = { month: 'short', day: 'numeric' };
    const formattedMonday = mondayDate.toLocaleDateString('en-US', options);
    const formattedSunday = sundayDate.toLocaleDateString('en-US', options);
    const fullYear = sundayDate.getFullYear();
    
    const dateRangeElement = document.getElementById('date-range');
    dateRangeElement.textContent = `${formattedMonday} - ${formattedSunday}, ${fullYear}`;
}

// Function to toggle reason textarea visibility
function toggleReason(selectElement, textareaId) {
    const textarea = document.getElementById(textareaId);
    textarea.style.display = selectElement.value === 'Dalo' ? 'block' : 'none';
    if (selectElement.value !== 'Dalo') {
        textarea.value = '';
    }
}

// Function to update datalist with filtered names
function updateNameSuggestions(inputValue) {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
    
    const filteredNames = namesList.filter(name => 
        name.toLowerCase().includes(inputValue.toLowerCase())
    );

    filteredNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        nameList.appendChild(option);
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    displayDateRange();
    
    // Setup name input handlers
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.addEventListener('input', function(e) {
            this.value = this.value.toUpperCase();
            updateNameSuggestions(this.value);
        });
    }

    // Create initial datalist
    updateNameSuggestions('');
});