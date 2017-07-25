/**
 * Created by zh on 17-7-24.
 */


window.onload = function () {
    // judgeStudentInfo();
    // localStorage.clear();
    console.log(localStorage)
    let studentInfo = document.getElementById('studentInfo');
    studentInfo.addEventListener("click",inputInfoToLocal);
    for(let key in localStorage){
        let list = document.createElement("tr");
        let item1 = document.createElement("td");
        let item2 = document.createElement("td");
        let item3 = document.createElement("td");
        let item4 = document.createElement("td");
        let item5 = document.createElement("td");
        let item6 = document.createElement("td");
        let item7 = document.createElement("td");
        let item8 = document.createElement("td");
        let item9 = document.createElement("td");
        let item10 = document.createElement("td");
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");

        let student = JSON.parse(localStorage[key]);
        // console.log(student)

        item1.innerHTML = `${student[0]}`;
        item2.innerHTML = `${student[1]}`;
        item3.innerHTML = `${student[2]}`;
        item4.innerHTML = `${student[3]}`;
        item5.innerHTML = `${student[4]}`;
        item6.innerHTML = `${student[5]}`;
        item7.innerHTML = `${student[6]}`;
        item8.innerHTML = `${student[7]}`;
        item9.innerHTML = `${student[8]}`;
        btn1.innerText = '修改';
        btn2.innerText = '删除';
        btn1.setAttribute("data-id",student[1]);
        btn1.setAttribute("data-id",student[1]);
        btn1.setAttribute("class","btn btn-primary");
        btn2.setAttribute("class","btn btn-primary");
        let showList = document.getElementById('allstudentinfo');
        list.appendChild(item10);
        list.insertBefore(item9,item10);
        list.insertBefore(item8,item9);
        list.insertBefore(item7,item8);
        list.insertBefore(item6,item7);
        list.insertBefore(item5,item6);
        list.insertBefore(item4,item5);
        list.insertBefore(item3,item4);
        list.insertBefore(item2,item3);
        list.insertBefore(item1,item2);
        item10.appendChild(btn2);
        item10.insertBefore(btn1,btn2);
        showList.appendChild(list);
        btn1.addEventListener("click",function () {
            
        });
        btn2.addEventListener("click",function () {
            
        })
    }

};

function judgeStudentInfo() {
    let student = [];
    console.log(document.myform1.studentName.value)
    student.push(document.myform1.studentName.value);
    student.push(document.myform1.studentId.value);
    student.push(document.myform1.studentNative.value);
    student.push(document.myform1.studentClass.value);
    student.push(document.myform1.studentMath.value);
    student.push(document.myform1.studentChinese.value);
    student.push(document.myform1.studentEnglish.value);
    student.push(document.myform1.studentProgram.value);
    // console.log(student)
    for (let i = 0; i < student.length; i++) {
        if (student[i] === "") {
            document.getElementById('hiddenslogan').innerHTML = "*所有信息必添";
            document.getElementById('hiddenslogan').style.display = 'block';
            document.getElementById('hiddenslogan').style.color = 'red';
            return false;
        }
    }// console.log(student)

    // console.log(student);
    return true;
}

function inputInfoToLocal() {

    if(judgeStudentInfo() === true){
        // console.log(0)
        let storage = window.localStorage;
        let student = [];
        // console.log(document.myform1.studentName.value)
        student.push(document.myform1.studentName.value);
        student.push(document.myform1.studentId.value);
        student.push(document.myform1.studentNative.value);
        student.push(document.myform1.studentClass.value);
        student.push(document.myform1.studentMath.value);
        student.push(document.myform1.studentChinese.value);
        student.push(document.myform1.studentEnglish.value);
        student.push(document.myform1.studentProgram.value);
        let gradesum = parseInt(student[4])+parseInt(student[5])+parseInt(student[6])+parseInt(student[7]);
        student.push(gradesum);
        storage.setItem(student[1],JSON.stringify(student));
        console.log(storage)
    }
}
