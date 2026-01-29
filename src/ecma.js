"use strict";

document.addEventListener("DOMContentLoaded", async() => {
    loadData();
})

async function loadData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json"

    try {
        const response = await fetch(url);
        const courses = await response.json ();
        console.table(courses)
        showCourses(courses)

    } catch (error) {
        console.error(`fel: ${error}`)
    }
}

function showCourses(courses) {
    const tableEl = document.querySelector("#table")
    courses.forEach(course => {
        tableEl.innerHTML += `
        <div class="courseRow">
            <p class="courseCode">${course.code}</p>
            <p class="courseName">${course.coursename}</p>
            <p class="courseProg">${course.progression}</p>
        </div`
    
    })
};
