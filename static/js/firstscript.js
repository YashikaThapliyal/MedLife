document.getElementById('infoButton').addEventListener('click', function() {
    window.location.href = '/info';
});

document.getElementById('symptom-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const symptoms = document.getElementById('symptoms').value;
    const responseBox = document.getElementById('response-box');

    if (symptoms.trim()) {
        // For demonstration, we'll use a dummy response. 
        // Replace this with an actual backend request if needed.
        const dummyResponse = 'Here is some information based on your symptoms: ... I LOVE YASKIKA by aks.';
        responseBox.textContent = dummyResponse;
        responseBox.style.display = 'block'; // Show the response box
    } 
    else {
        alert('Please enter some symptoms.');
        responseBox.style.display = 'none'; // Hide the response box if no symptoms are entered
    }
});

document.getElementById('symptomForm').onsubmit = function(event) {
    event.preventDefault(); 

    setTimeout(function() {
        var predictedDisease = "Example Disease"; 

        if (predictedDisease) {
            document.getElementById('resultContainer').style.display = 'block';

            document.getElementById('predictedDisease').textContent = predictedDisease;
        }
    }, 0); 
};



