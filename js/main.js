console.log(entries);
const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const regNo = searchParams.get("regNo");
const resultElement = document.querySelector("#result");
console.log("regNo: ", regNo);

const notFound = `<div class="alert alert-warning " role="alert">
  <h4 class="alert-heading">Sorry!</h4>
  <p>
    This student's registration number was not found in our system
  </p>
  <hr>
  <p class="mb-0">Please, verify that you input the right information and try again.</p>
</div>`;

const studentDetails = entries.find((entry) => entry.regNo === regNo);
if (studentDetails == null) {
  resultElement.innerHTML = notFound;
} else {
  console.log("proceed");
  calculateCGPA(studentDetails);
}
