/**
 * Created by zh on 17-7-19.
 */
function printStudentId() {
    // console.log(document.myform2.studentId.value)
    if(document.myform2.studentId.value == ""){
        document.getElementById('hiddenId').innerHTML = "*请输入学生学号";
        document.getElementById('hiddenId').style.color = "red";
        return false
    }else {
        document.getElementById('hiddenId').style.display = "none"  ;
        return true
    }
}

document.getElementById('studentIdsub').addEventListener("click",function () {

    if(printStudentId() === true){
        let studentId = document.myform2.studentId.value.split(",");
        console.log(studentId)
        for(let i = 0;i<studentId.length;i++){
            for(let key in localStorage){
                if(studentId[i] == key){
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
                    let showList = document.getElementById('printstudent');
                    list.appendChild(item9);
                    list.insertBefore(item8,item9);
                    list.insertBefore(item7,item8);
                    list.insertBefore(item6,item7);
                    list.insertBefore(item5,item6);
                    list.insertBefore(item4,item5);
                    list.insertBefore(item3,item4);
                    list.insertBefore(item2,item3);
                    list.insertBefore(item1,item2);
                    showList.appendChild(list);
                }
            }
        }
    }
    // event.preventDefault();
},false);

module.exports = {
    printStudentInfo
};