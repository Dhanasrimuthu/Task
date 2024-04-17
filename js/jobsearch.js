// cookie check function
window.onload = function() {
    if (document.cookie.trim() == "") {
        window.location.href = "./login.html";
    } else {
        console.log("Allowing  to  access the jobsearch page.");
    }
}
// delete cookies when logout
function funLogout(){
    document.cookie="username=;"+"expires="+new Date(2021,12,12).toUTCString();
    document.cookie="password=;"+"expires="+new Date(2021,12,12).toUTCString();
    window.location.href="../html/login.html";
}
// ==========
let jobcount = document.getElementById("jobcount");
let pageno = document.getElementById("pageno");
pageno.textContent = 1;
let divitem = document.querySelectorAll("#mainchild > div ");
let count = divitem.length;
const jobs = document.querySelectorAll('.item');
// console.log(jobs);
var btn=document.querySelectorAll(".btn");
for(i=0;i<btn.length;i++){
    btn[i].style.display="none";
}
// search
var searchValue;
var search;
var searchCount=0;
let shownJobs = new Set();
console.log(shownJobs);
// console.log(search);
document.getElementById('search').addEventListener('input', function () {
    searchValue = this.value.trim().toLowerCase();
    search=searchValue;
    searchCount=0;
    shownJobs = new Set();
//    array= searchFunction();
searchFunction();
});
function searchFunction(){
    jobs.forEach(job => {
        const jobName = job.querySelector('.para1').textContent.toLowerCase();
        const companyName = job.querySelector('.para2').textContent.toLowerCase();
        // console.log(companyName);
        if (companyName.includes(searchValue) || jobName.includes(searchValue)) {
            job.style.display = 'flex';
            searchCount=searchCount+1;
            shownJobs.add(job); 
        } else {
            job.style.display = 'none';
        }
    });
    console.log(shownJobs);
    jobcount.value = count;
    select=count;
    pageno.textContent = 1;
    // console.log(searchCount);
}
// empty the search bar
function empty() {
    search=undefined;
    document.getElementById('search').value = "";
    searchCount=0;
    toShowAll(20);
    shownJobs = new Set();
}
function toShowAll(){
              for (i = 1; i <= count; i++) {
              document.getElementById("item" + i).style.display = "flex";
            }
            jobcount.value = count;
            pageno.textContent = 1;
            for(i=0;i<btn.length;i++){
                btn[i].style.display="none";
            }
}
// ===================================================
var benginindex,endindex,check,select;
var page=1;
function pagefun(){
    select = Number(jobcount.value);
        //  To check how many times the next page will come
        page=1;
        if(search == undefined || searchCount>select){
            check = Math.ceil(count / select);
            console.log(check);
            benginindex=select*(page-1);
            endindex=select*page-1;
           console.log(page);
        if (select == count) {
            toShowAll(select);
            for(i=0;i<btn.length;i++){
                btn[i].style.display="none"
            }
        }else{
            for(i=0;i<btn.length;i++){
                btn[i].style.display="";
            }
            toShowSelect();
        }
    }else{
        searchByOrder();
    }
}
var checkselect;
function toShowSelect(){
    if(shownJobs.size === 0){
        jobs.forEach((job,index)=>{
            if(benginindex<=index && endindex>=index){
                    job.style.display="flex";
                }else{
                job.style.display="none";
            }
        });
    }else{
        const shownJobsArray = Array.from(shownJobs);
    jobs.forEach(job => {
    const index = shownJobsArray.indexOf(job);
    if (index !== -1 && benginindex <= index && endindex >= index) {
        job.style.display = "flex";
    } else {
        job.style.display = "none";
    }
});
    }
    pageno.textContent = page;
    // nextPageNo();
}
function nextPageNo(){
    if(page < check){
        page++;
       }
       console.log("netn"+page);
       console.log(check);
       benginindex=select*(page-1);
       endindex=select*page-1;
}
function previousPageNo(){
    if(page>1){
        page--;
       }
       console.log("netp"+page);
       console.log(check);
       benginindex=select*(page-1);
       endindex=select*page-1;
}
function pageFunNext(){
    nextPageNo();
    toShowSelect();
}
function pageFunPrevious(){
    previousPageNo();
      if(shownJobs.size === 0){
        jobs.forEach((job,index)=>{
            if(benginindex<=index && endindex>=index ){
                    job.style.display="flex";
                }else{
                job.style.display="none";
            }
        })
    }else{
        const shownJobsArray = Array.from(shownJobs);
        jobs.forEach(job => {
        const index = shownJobsArray.indexOf(job);
        if (index !== -1 && benginindex <= index && endindex >= index) {
            job.style.display = "flex";
        } else {
            job.style.display = "none";
        }
    });
    }
        pageno.textContent = page;
    //    page++;
    //    console.log(page); 
}

function searchByOrder(){
    if(searchCount<=select){
        for(i=0;i<btn.length;i++){
            btn[i].style.display="none"
        }
        console.log(searchCount)
        searchCount=0;
        jobcount.value = select;
        searchFunction(); 
    } else{
        for(i=0;i<btn.length;i++){
            btn[i].style.display=""
        }
    }
}


