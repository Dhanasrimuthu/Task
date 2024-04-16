// cookie check function
window.onload = function() {
    if (document.cookie.trim() == "") {
        window.location.href = "./login.html";
    } else {
        console.log("Allowing  to  access the jobsearch page.");
    }
}
// window.onload = function() {
//     if (!checkCookies()) {
        
//         window.location.href = "./login.html";
//     } else {
        
//         console.log("Cookies are present. Allowing access to the jobsearch page.");
//     }
// };

// function checkCookies() {
//     var cookies = document.cookie.split(';');
//     var usernameFound = false;
//     var passwordFound = false;
//     for (var i = 0; i < cookies.length; i++) {
//         var cookie = cookies[i].trim();
//         if (cookie.startsWith("username=")) {
//             usernameFound = true;
//         }
//         if (cookie.startsWith("password=")) {
//             passwordFound = true;
//         }
//     }
//     return usernameFound && passwordFound;
// }

// delete cookies when logout
function funLogout(){
    document.cookie="username=;"+"expires="+new Date(2021,12,12).toUTCString();
    document.cookie="password=;"+"expires="+new Date(2021,12,12).toUTCString();
    window.location.href="../html/login.html";
}


// =============================================================
let jobcount = document.getElementById("jobcount");
let pageno = document.getElementById("pageno");
pageno.textContent = 1;
let divitem = document.querySelectorAll("#mainchild > div ");
let count = divitem.length;
const jobs = document.querySelectorAll('.item');
console.log(jobs);
// search
var search;

console.log(search);
document.getElementById('search').addEventListener('input', function () {
    const searchValue = this.value.trim().toLowerCase();
    search=searchValue;
    jobs.forEach(job => {
        const jobName = job.querySelector('.para1').textContent.toLowerCase();
        const companyName = job.querySelector('.para2').textContent.toLowerCase();
        // console.log(companyName);
        if (companyName.includes(searchValue) || jobName.includes(searchValue)) {
            job.style.display = 'flex';
        } else {
            job.style.display = 'none';
        }
    });
    jobcount.value = count;
    select=count;
    pageno.textContent = 1;
});

// empty the search bar
function empty() {
    document.getElementById('search').value = "";
    toShowAll(20);
}
function toShowAll(select){
    if (select == count) {
              for (i = 1; i <= select; i++) {
              document.getElementById("item" + i).style.display = "flex";
            }
            jobcount.value = count;
            pageno.textContent = 1;
    }
}
// ===================================================
var benginindex,endindex,check,select;
var page=1;
function pagefun(){
    select = Number(jobcount.value);
        //  To check how many times the next page will come
        check = Math.ceil(count / select);
        console.log(check);
        benginindex=select*(page-1);
        endindex=select*page-1;
        jobs.forEach((job,index)=>{
            const jobName = job.querySelector('.para1').textContent.toLowerCase();
            const companyName = job.querySelector('.para2').textContent.toLowerCase();
            if(benginindex<=index && endindex>=index ){
                if(search==null){
                    job.style.display="flex";
                }else{
                     if (companyName.includes(search) || jobName.includes(search)) {
                    job.style.display = 'flex';
                   }
                }
               
            }else{
                job.style.display="none";
            }
        });
        pageno.textContent = page;
       if(page < check){
        page++;
       }
    //    console.log(page);
    if (select == count) {
        toShowAll(select);
    }
}

function pageFunPrevious(){
   if(page>1){
    page--;
   }

    benginindex=select*(page-1);
    endindex=select*page-1;
        jobs.forEach((job,index)=>{
            const jobName = job.querySelector('.para1').textContent.toLowerCase();
            const companyName = job.querySelector('.para2').textContent.toLowerCase();
            if(benginindex<=index && endindex>=index ){
                if(search==null){
                    job.style.display="flex";
                }else{
                     if (companyName.includes(search) || jobName.includes(search)) {
                    job.style.display = 'flex';
                   }
                }
            }else{
                job.style.display="none";
            }
        })
        pageno.textContent = page;
       page++;
       console.log(page); 
}

// =======================================================================


