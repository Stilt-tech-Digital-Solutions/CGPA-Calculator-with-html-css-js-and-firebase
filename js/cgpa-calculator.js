const pageTitle = document.querySelector("#title");
const tableBody = document.querySelector("#table-body");
const cgpaResult = document.querySelector("#cgpa-result");

const getGrade = (num) => {
  switch (true) {
    case num >= 70:
      return {
        grade: "A",
        point: 5,
      };
    case num >= 60 && num <= 69:
      return {
        grade: "B",
        point: 4,
      };

    case num >= 55 && num <= 59:
      return {
        grade: "C",
        point: 3,
      };

    case num >= 50 && num <= 54:
      return {
        grade: "D",
        point: 2,
      };

    case num >= 40 && num <= 49:
      return {
        grade: "E",
        point: 1,
      };

    default:
      return {
        grade: "F",
        point: 0,
      };
  }
};

const calculateCGPA = (studentData) => {
  const { regNo, courses = [] } = studentData;
  const pageTitleContent = `The CGPA and details for ${regNo}`;
  const tableContent = courses
    .map(
      (item, index) => `
  
              <tr>
                <th scope="row">${index + 1}</th>
                <td>${item.name}</td>
                <td>${item.unit}</td>
                <td>${item.score}</td>
                <td>${getGrade(item.score).grade}</td>
              </tr>
  `
    )
    .join("");

  const total_units = courses.reduce((total, item) => total + item.unit, 0);
  const total_grades = courses.reduce(
    (total, item) => total + item.unit * getGrade(item.score).point,
    0
  );

  const cgpa = total_grades / total_units;
  pageTitle.innerHTML = pageTitleContent;
  tableBody.innerHTML = tableContent;
  cgpaResult.innerHTML = `CGPA: ${cgpa.toFixed(2)}`;
};
// Note that for grade points
// 70 = A = 5
// 60 - 69 = B = 4
// 50 - 59 = C = 3
// D = 2
// E = 1
// F = 0
