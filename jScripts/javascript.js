// Define toggleNav function globally
function toggleNav() {
    const nav = document.getElementById("main-nav");
    nav.classList.toggle("show"); // Toggle the 'show' class on the navigation menu
}

document.addEventListener('DOMContentLoaded', function()
{
    document.getElementById('dark-mode-button').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // פונקציה למעבר למצב לילה
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode'); // מוסיף/מסיר את המחלקה dark-mode
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode); // שמירת ההעדפה במקומה
    }

// שמירת ההגדרה בטעינת הדף
    document.addEventListener('DOMContentLoaded', function() {
        // הגדרת מצב לילה לפי ההעדפה שנשמרה ב-localStorage
        const darkModePreference = localStorage.getItem('darkMode');
        if (darkModePreference === 'true') {
            document.body.classList.add('dark-mode');
        }
        // הוספת מאזין לאירוע עבור כפתור מצב לילה
        const darkModeButton = document.getElementById('dark-mode-button');
        darkModeButton.addEventListener('click', toggleDarkMode);
    });

    // Your existing JavaScript code for filtering and other actions
    function filterList() {
        const filter = document.getElementById('search-input').value.toLowerCase();
        const listItems = document.querySelectorAll('.subjects-container li');

        listItems.forEach(function(item) {
            const headingText = item.querySelector('h1').textContent.toLowerCase();

            if (headingText.includes(filter)) {
                item.style.display = ''; // Show the list item if it matches the filter
            } else {
                item.style.display = 'none'; // Hide the list item if it doesn't match the filter
            }
        });
    }

// סגירת התפריט באופן אוטומטי במעבר לדסקטופ
    window.addEventListener("resize", () => {
        const nav = document.getElementById("main-nav");
        if (window.innerWidth >= 768) {
            nav.classList.remove("show"); // הסר את הקלאס 'show' כשעוברים לדסקטופ
        }
    });


    // Attach event listener to search input
    document.getElementById('search-input').addEventListener('input', filterList);
});

document.addEventListener('DOMContentLoaded', function() {
    const subjectItems = document.querySelectorAll('.subject-item');

    // כל פריט ברשימה פותח את המודל
    subjectItems.forEach(item => {
        item.addEventListener('click', function() {
            const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();  // פותח את המודל
        });
    });
});

