"use strict";

document.addEventListener("DOMContentLoaded", async () => {
    loadData();
})

async function loadData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json"

    try {
        const response = await fetch(url);
        const courses = await response.json();
        console.table(courses)
        showCourses(courses)
        sortingButtons(courses)
        search(courses)

    } catch (error) {
        console.error(`fel: ${error}`)
    }
}

//Laddar in och visar kurser.
async function showCourses(courses) {
    const tableEl = document.querySelector("#table")
    tableEl.inneerHTML = "";
    courses.forEach(course => {
        tableEl.innerHTML += `
        <div class="courseRow">
            <p class="courseCode">${course.code}</p>
            <p class="courseName">${course.coursename}</p>
            <p class="courseProg">${course.progression}</p>
        </div`

    })
};

//Funktion för sortering
function sortingButtons(courses) {
    let sorted = false;
    const tableEl = document.querySelector("#table")
    const sortCode = document.querySelector(".sortCode")

    const sortName = document.querySelector(".sortName")
    const sortProg = document.querySelector(".sortProg")

    //Sorterar kurskoder
    sortCode.addEventListener("click", () => {
        tableEl.innerHTML = "";
        if (sorted == false) {
            courses.sort((a, b) => a.code.localeCompare(b.code))
            courses.forEach(course => {
                tableEl.innerHTML += `
        <div class="courseRow">
            <p class="courseCode">${course.code}</p>
            <p class="courseName">${course.coursename}</p>
            <p class="courseProg">${course.progression}</p>
        </div>`
                sorted = true;
            })
        } else if (sorted == true) {
            courses.sort((a, b) => a.code.localeCompare(b.code)).reverse();
            courses.forEach(course => {

                tableEl.innerHTML += `
        <div class="courseRow">
            <p class="courseCode">${course.code}</p>
            <p class="courseName">${course.coursename}</p>
            <p class="courseProg">${course.progression}</p>
        </div>`
                sorted = false;
            })


        }
    })
    //Sorterar kursnamn
    sortName.addEventListener("click", () => {
        tableEl.innerHTML = "";
        if (sorted == false) {
            courses.sort((a, b) => a.coursename.localeCompare(b.coursename))

            courses.forEach(course => {

                tableEl.innerHTML += `
        <div class="courseRow">
            <p class="courseCode">${course.code}</p>
            <p class="courseName">${course.coursename}</p>
            <p class="courseProg">${course.progression}</p>
        </div>`
            })

            sorted = true;
        } else if (sorted == true) {
            courses.sort((a, b) => a.coursename.localeCompare(b.coursename)).reverse();
            courses.forEach(course => {

                tableEl.innerHTML += `
        <div class="courseRow">
            <p class="courseCode">${course.code}</p>
            <p class="courseName">${course.coursename}</p>
            <p class="courseProg">${course.progression}</p>
        </div>`

            })
            sorted = false;
        }

    })
    //Sorterar progression
    sortProg.addEventListener("click", () => {
        tableEl.innerHTML = "";
        if (sorted == false) {
            courses.sort((a, b) => a.progression.localeCompare(b.progression))

            courses.forEach(course => {

                tableEl.innerHTML += `
        <div class="courseRow">
            <p class="courseCode">${course.code}</p>
            <p class="courseName">${course.coursename}</p>
            <p class="courseProg">${course.progression}</p>
        </div>`
            })

            sorted = true;
        } else if (sorted == true) {
            courses.sort((a, b) => a.progression.localeCompare(b.progression)).reverse();
            courses.forEach(course => {

                tableEl.innerHTML += `
        <div class="courseRow">
            <p class="courseCode">${course.code}</p>
            <p class="courseName">${course.coursename}</p>
            <p class="courseProg">${course.progression}</p>
        </div>`

            })
            sorted = false;
        }
    })
}

function search(courses) {
    
}
