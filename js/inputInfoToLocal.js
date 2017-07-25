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
        let list = document.createElement("li");
        let student = JSON.parse(localStorage[key]);
        // console.log(student)
        list.setAttribute("class","list-group-item");
        list.innerHTML = `姓名：${student[0]}  ，学号：${student[1]}  ，民族：${student[2]}  ，班级：${student[3]}  ，数学:${student[4]}  ，语文：${student[5]}  ，英语：${student[6]}  ，编程：${student[7]}  ，总分：${student[8]}`;
        let showList = document.getElementById('showList');
        showList.appendChild(list);
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
    }
    document.getElementById('hiddenslogan').innerHTML = `学生${student[0]}添加成功`;
    document.getElementById('hiddenslogan').style.display = 'block';
    // console.log(student)

    // console.log(student);
    return true;
}

function inputInfoToLocal() {
    // event.preventDefault();
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
