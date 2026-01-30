"use strict";
//Väntar på DOMContentloaded.
document.addEventListener("DOMContentLoaded", async () => {
    loadData();
})
//Async funktion som hämtar API data och catchar fel om fel uppstår.
async function loadData() {
    const url = "https://webbutveckling.miun.se/files/ramschema.json"

    try {
        const response = await fetch(url);
        const courses = await response.json();
        showCourses(courses)
        sortingButtons(courses)
        document.querySelector("#sök").addEventListener("input", () => {
            search(courses);
        });

    } catch (error) {
        console.error(`fel: ${error}`)
    }
}

//Laddar in och visar kurser.
async function showCourses(courses) {
    const tableEl = document.querySelector("#table")
    tableEl.innerHTML = "";
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

//Sökfunktion. Jag fick inte till sökning efter progression, så sökningen tar endast hänsyn till kursnamn och kurskod.
function search(courses) {

        let searchQuery = document.querySelector("#sök").value.toLowerCase();
        let searchName = courses.filter((course) => course.coursename.toLowerCase().includes(searchQuery.toLowerCase()));
        let searchCode = courses.filter((course) => course.code.toLowerCase().includes(searchQuery.toLowerCase()));
        if(searchName.length > 0 || searchCode.length > 0)
        {   
            let searchResult = [...searchName, ...searchCode];
            showCourses(searchResult);
        }
   
    }
