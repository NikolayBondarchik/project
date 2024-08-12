document.addEventListener("DOMContentLoaded", function () {
  // Dropdown toggle
  document.querySelector(".profile-img").addEventListener("click", function () {
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

  // Hide dropdown when clicking outside
  document.addEventListener("click", function (event) {
    const dropdown = document.querySelector(".dropdown");
    if (
      !dropdown.contains(event.target) &&
      !document.querySelector(".profile-img").contains(event.target)
    ) {
      dropdown.style.display = "none";
    }
  });

  // Bookmark toggle
  const bookmark = document.getElementById("bookmark");
  const sidebar = document.getElementById("sidebar");
  const bookmarkImg = document.querySelector(".bookmark-img");
  const navTextElements = document.querySelectorAll(".nav-text");

  bookmark.addEventListener("click", function () {
    sidebar.classList.toggle("close");
    bookmarkImg.classList.toggle("active");
  });
});

// Pagination
let link = document.getElementsByClassName("link");

let currentValue = 1;

function activeLink(event) {
  for (let l of link) {
    l.classList.remove("active");
  }
  event.target.classList.add("active");
  currentValue = parseInt(event.target.getAttribute("data-value"));
}

function backBtn() {
  if (currentValue > 1) {
    for (let l of link) {
      l.classList.remove("active");
    }
    currentValue--;
    link[currentValue - 1].classList.add("active");
  }
}

function nextBtn() {
  if (currentValue < link.length) {
    for (let l of link) {
      l.classList.remove("active");
    }
    currentValue++;
    link[currentValue - 1].classList.add("active");
  }
}

// Ваше расписание
const schedule = {
  Понедельник: [
    {
      group: "П-18-46к",
      subject: "Математика",
      startTime: "18:10",
      endTime: "19:10",
      room: "854",
      syllabus: "",
    },
  ],
  Вторник: [
    {
      group: "П-18-46к",
      subject: "Физика",
      startTime: "18:10",
      endTime: "19:10",
      room: "854",
      syllabus: "",
    },
  ],
  Среда: [
    {
      group: "П-18-46к",
      subject: "Физика",
      startTime: "18:10",
      endTime: "19:10",
      room: "854",
      syllabus: "",
    },
  ],
  Четверг: [
    {
      group: "П-18-46к",
      subject: "Физика",
      startTime: "18:10",
      endTime: "19:10",
      room: "854",
      syllabus: "",
    },
  ],
  Пятница: [
    {
      group: "П-18-46к",
      subject: "Физика",
      startTime: "18:10",
      endTime: "19:10",
      room: "854",
      syllabus: "",
    },
  ],
  Суббота: [
    {
      group: "П-18-46к",
      subject: "Физика",
      startTime: "18:10",
      endTime: "19:10",
      room: "854",
      syllabus: "",
    },
  ],
  Воскресенье: [
    {
      group: "П-18-46к",
      subject: "Физика",
      startTime: "18:10",
      endTime: "19:10",
      room: "854",
      syllabus: "",
    },
  ],
  // Добавьте другие дни недели и уроки
};

function createTable(day, lessons) {
  const table = document.createElement("table");
  table.className = "responsive-table";

  const thead = document.createElement("thead");
  const trHeader = document.createElement("tr");
  const thDay = document.createElement("th");
  thDay.colSpan = 6;
  thDay.textContent = day;
  trHeader.appendChild(thDay);
  thead.appendChild(trHeader);

  const trLabels = document.createElement("tr");
  [
    "Группа",
    "Предмет",
    "Начало урока",
    "Конец урока",
    "Кабинет",
    "Силлабус",
  ].forEach((label) => {
    const th = document.createElement("th");
    th.textContent = label;
    trLabels.appendChild(th);
  });
  thead.appendChild(trLabels);

  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  lessons.forEach((lesson) => {
    const tr = document.createElement("tr");
    ["group", "subject", "startTime", "endTime", "room", "syllabus"].forEach(
      (key) => {
        const td = document.createElement("td");
        td.textContent = lesson[key];
        tr.appendChild(td);
      }
    );
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  return table;
}

const scheduleContainer = document.getElementById("schedule-container");
Object.keys(schedule).forEach((day) => {
  const table = createTable(day, schedule[day]);
  scheduleContainer.appendChild(table);
});
