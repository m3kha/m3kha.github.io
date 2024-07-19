document.addEventListener('DOMContentLoaded', function() {
    var dropdownButtons = document.querySelectorAll('.dropdown-btn');
    dropdownButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});


function toggleAccordion(button) {
    var content = button.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        button.classList.remove("active");
    } else {
        content.style.display = "block";
        button.classList.add("active");
    }
}

document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var questionInput = document.getElementById('question-input');
    var newQuestion = questionInput.value;
    questionInput.value = ''; // Clear the input after submitting

    var newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${newQuestion}</td><td>Waiting for answers...</td>`;

    document.getElementById('qa-body').appendChild(newRow);
});
