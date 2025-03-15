function toggleCategory(category) {
    document.querySelectorAll('.category').forEach(function (element) {
        element.classList.add('hidden');
    });
    document.getElementById(category).classList.remove('hidden');

    // Update active button styling
    document.querySelectorAll('.category-button').forEach(function (btn) {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="toggleCategory('${category}')"]`).classList.add('active');
}

function showAll() {
    document.querySelectorAll('.category').forEach(function (element) {
        element.classList.remove('hidden');
    });
    
    document.querySelectorAll('.category-button').forEach(function (btn) {
        btn.classList.remove('active');
    });
}

// Set the default active category to the first one (Monitoring Forms)
document.addEventListener("DOMContentLoaded", function() {
    toggleCategory('monitoring-forms');
});
