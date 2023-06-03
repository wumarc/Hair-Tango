
document.addEventListener('DOMContentLoaded', function() {
    // Get the content container
    var contentContainer = document.getElementById('content');

    // Get all the navbar options
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    var option3 = document.getElementById('option3');

    // Function to render content based on user selection
    function renderContent(option) {
        // Clear the content container
        contentContainer.innerHTML = '';

        // Render content based on selected option
        if (option === 'option1') {
            contentContainer.innerHTML = '<h2>Option 1 Content</h2><p>This is the content for Option 1.</p>';
        } else if (option === 'option2') {
            contentContainer.innerHTML = '<h2>Option 2 Content</h2><p>This is the content for Option 2.</p>';
        } else if (option === 'option3') {
            contentContainer.innerHTML = '<h2>Option 3 Content</h2><p>This is the content for Option 3.</p>';
        }
    }

    // Add click event listeners to the navbar options
    option1.addEventListener('click', function() {
        renderContent('option1');
    });

    option2.addEventListener('click', function() {
        renderContent('option2');
    });

    option3.addEventListener('click', function() {
        renderContent('option3');
    });
});
