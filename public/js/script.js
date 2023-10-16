document.addEventListener('DOMContentLoaded', (event) => {
    // Code goes here
    
    // Example: Event Listener for Form Submission
    const exampleForm = document.querySelector('#exampleForm');
    
    exampleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Example: Fetch API to Submit Data to Server
        fetch('/api/example', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                exampleData1: 'Data 1',
                exampleData2: 'Data 2',
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            // Handle success scenario
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error scenario
        });
    });
});
