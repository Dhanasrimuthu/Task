let jobcount = document.getElementById("jobcount");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let pageno = document.getElementById("pageno");
pageno.textContent = 1;
let divitem = document.querySelectorAll("#mainchild > div ");
let count = divitem.length;
var pagenoindex = 1;
var check,select,mulvalue=2;
// firstpage and previouspage too
function pagefun() {
    select = Number(jobcount.value);
    //  To check how many times the next page will come
    check = Math.ceil(count / select);
    if (select == 10) {
        //Display flex is needed because we comeback to this again
        for (i = 1; i <= select; i++) {
            document.getElementById("item" + i).style.display = "flex";
        }
        for (i = select + 1; i <= count; i++) {
            document.getElementById("item" + i).style.display = "none";
        }
    } else if (select == 15) {
        for (i = 1; i <= select; i++) {
            document.getElementById("item" + i).style.display = "flex";
        }
        for (i = select + 1; i <= count; i++) {
            document.getElementById("item" + i).style.display = "none";
        }
    } else if (select == count) {
        for (i = 1; i <= select; i++) {
            document.getElementById("item" + i).style.display = "flex";
        }
    }
    pageno.textContent = 1;
}

// Next
function selectNext() {
    // console.log(check);
    var endindex,startindex=1;
        if(select*mulvalue<count){
            endindex=select*mulvalue;
        }else {
            endindex=count;
        }
    if (select == 10 && check > 1) {
        
        for (i = select *startindex; i <= endindex; i++) {
            document.getElementById("item" + i).style.display = "flex";
        }
        for (i = 1; i <= select; i++) {
            document.getElementById("item" + i).style.display = "none";
        }
    } else if (select == 15 && check > 1) {
        for (i = select * startindex; i <= endindex; i++) {
            document.getElementById("item" + i).style.display = "flex";
        }
        for (i = 1; i <= select; i++) {
            document.getElementById("item" + i).style.display = "none";
        }
    }
    // pagenumber
    if ((select == 10 || select == 15) && check > 1) {
        pagenoindex = pagenoindex + 1;
        check = check - 1;
        pageno.textContent = pagenoindex;
        pagenoindex = pagenoindex - 1;
    }
    startindex=startindex+1;
}

// search
const jobs = document.querySelectorAll('.item');

document.getElementById('search').addEventListener('input', function () {
    const searchValue = this.value.trim().toLowerCase();
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
    jobcount.value = 20;
    select=20;
});

// empty the search bar
function empty() {
    document.getElementById('search').value = "";
}
// delete cookies when logout
function funLogout(){
    document.cookie="username=;"+"expires="+new Date(2021,12,12).toUTCString();
    document.cookie="password=;"+"expires="+new Date(2021,12,12).toUTCString();
    window.location.href="../html/login.html";
}