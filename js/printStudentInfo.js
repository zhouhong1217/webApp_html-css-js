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

document.getElementById('studentIdsub').addEventListener("click",function (event) {
    $('.printstudentto').remove();
    if(printStudentId() === true){
        let studentId = document.myform2.studentId.value.split(",");
        console.log(studentId)
        let arr = [];
        for(let i = 0;i<studentId.length;i++){
            if(Object.keys(localStorage).indexOf(studentId[i])===-1){
                arr.push(studentId[i]);
            }else {
                for(let key in localStorage){
                    if(studentId[i] === key){
                        let student = JSON.parse(localStorage[key]);
                        // console.log(student)
                        let html = `<tr class="printstudentto">
<td>${student[0]}</td>
<td>${student[1]}</td>
<td>${student[2]}</td>
<td>${student[3]}</td>
<td>${student[4]}</td>
<td>${student[5]}</td>
<td>${student[6]}</td>
<td>${student[7]}</td>
<td>${student[8]}</td>
</tr>`;

                        let showList = document.getElementById('printstudent');
                        showList.innerHTML += html;
                    }
                }
            }
        }
        if(arr.length !== 0){
            let s = "";
            for(let i = 0;i<arr.length;i++){
                if(i>0) s+=',';
                s += arr[i];
            }
            alert(s+" is not exist!");
        }
    }
    event.preventDefault();
},false);

