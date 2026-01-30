(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const e of t.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&a(e)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();document.addEventListener("DOMContentLoaded",async()=>{i()});async function i(){const c="https://webbutveckling.miun.se/files/ramschema.json";try{const s=await(await fetch(c)).json();l(s),d(s),document.querySelector("#sök").addEventListener("input",()=>{p(s)})}catch(o){console.error(`fel: ${o}`)}}async function l(c){const o=document.querySelector("#table");o.innerHTML="",c.forEach(s=>{o.innerHTML+=`
        <div class="courseRow">
            <p class="courseCode">${s.code}</p>
            <p class="courseName">${s.coursename}</p>
            <p class="courseProg">${s.progression}</p>
        </div`})}function d(c){let o=!1;const s=document.querySelector("#table"),a=document.querySelector(".sortCode"),r=document.querySelector(".sortName"),t=document.querySelector(".sortProg");a.addEventListener("click",()=>{s.innerHTML="",o==!1?(c.sort((e,n)=>e.code.localeCompare(n.code)),c.forEach(e=>{s.innerHTML+=`
        <div class="courseRow">
            <p class="courseCode">${e.code}</p>
            <p class="courseName">${e.coursename}</p>
            <p class="courseProg">${e.progression}</p>
        </div>`,o=!0})):o==!0&&(c.sort((e,n)=>e.code.localeCompare(n.code)).reverse(),c.forEach(e=>{s.innerHTML+=`
        <div class="courseRow">
            <p class="courseCode">${e.code}</p>
            <p class="courseName">${e.coursename}</p>
            <p class="courseProg">${e.progression}</p>
        </div>`,o=!1}))}),r.addEventListener("click",()=>{s.innerHTML="",o==!1?(c.sort((e,n)=>e.coursename.localeCompare(n.coursename)),c.forEach(e=>{s.innerHTML+=`
        <div class="courseRow">
            <p class="courseCode">${e.code}</p>
            <p class="courseName">${e.coursename}</p>
            <p class="courseProg">${e.progression}</p>
        </div>`}),o=!0):o==!0&&(c.sort((e,n)=>e.coursename.localeCompare(n.coursename)).reverse(),c.forEach(e=>{s.innerHTML+=`
        <div class="courseRow">
            <p class="courseCode">${e.code}</p>
            <p class="courseName">${e.coursename}</p>
            <p class="courseProg">${e.progression}</p>
        </div>`}),o=!1)}),t.addEventListener("click",()=>{s.innerHTML="",o==!1?(c.sort((e,n)=>e.progression.localeCompare(n.progression)),c.forEach(e=>{s.innerHTML+=`
        <div class="courseRow">
            <p class="courseCode">${e.code}</p>
            <p class="courseName">${e.coursename}</p>
            <p class="courseProg">${e.progression}</p>
        </div>`}),o=!0):o==!0&&(c.sort((e,n)=>e.progression.localeCompare(n.progression)).reverse(),c.forEach(e=>{s.innerHTML+=`
        <div class="courseRow">
            <p class="courseCode">${e.code}</p>
            <p class="courseName">${e.coursename}</p>
            <p class="courseProg">${e.progression}</p>
        </div>`}),o=!1)})}function p(c){let o=document.querySelector("#sök").value.toLowerCase(),s=c.filter(r=>r.coursename.toLowerCase().includes(o.toLowerCase())),a=c.filter(r=>r.code.toLowerCase().includes(o.toLowerCase()));if(s.length>0||a.length>0){let r=[...s,...a];l(r)}}
