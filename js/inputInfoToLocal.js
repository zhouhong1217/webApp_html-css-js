/**
 * Created by zh on 17-7-24.
 */


window.onload = function () {
    // judgeStudentInfo();
    // localStorage.clear();
    // console.log(localStorage)
    let studentInfo = document.getElementById('studentInfo');
    studentInfo.addEventListener("click",inputInfoToLocal);
    for(let key in localStorage){
        let student = JSON.parse(localStorage[key]);
        // console.log(student)
        let html = `<tr id="${student[1]}">
                    <td><input type="text" class="form-control options modify" value="${student[0]}" readonly></td>
                    <td><input type="text" class="form-control modify" value="${student[1]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[2]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[3]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[4]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[5]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[6]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[7]}" readonly></td>
                    <td><input type="text" class="form-control " value="${student[8]}" readonly></td>
                    <td><button now="${student[1]}" class="btn btn-primary btn1" id="modify">修改</button><button now="${student[1]}" class="btn btn-primary btn2" id="delete" style="background-color: red;border:1px solid red">删除</button><button now="${student[1]}" class="btn btn-primary btn2" id="submitInfo" style="display: none">提交</button></td></tr>`;
        let showList = document.getElementById('formbody');
        showList.innerHTML += html;
        console.log(student[1]);
    }
};

$(document).on('click', '#modify', function(e) {
    let studentId = $(e.target).attr('now');
    $('#'+studentId).find('.options').removeAttr("readonly");
    $('#'+studentId).find('#delete').attr("style","display:none");
    $('#'+studentId).find('#submitInfo').attr("style","display:inline");
});
$(document).on('click','#submitInfo',function (e) {
    let studentId = $(e.target).attr('now');
    let student = [];
    $('#'+studentId +' .modify').each(function () {
        student.push($(this).val());
    });
    let gradesum = parseInt(student[4])+parseInt(student[5])+parseInt(student[6])+parseInt(student[7]);
    student.push(gradesum);
    localStorage.setItem(studentId,JSON.stringify(student));
    console.log(localStorage)
    let html = `<tr id="${student[1]}">
                    <td><input type="text" class="form-control options modify" value="${student[0]}" readonly></td>
                    <td><input type="text" class="form-control modify" value="${student[1]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[2]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[3]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[4]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[5]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[6]}" readonly></td>
                    <td><input type="text" class="form-control options modify" value="${student[7]}" readonly></td>
                    <td><input type="text" class="form-control " value="${student[8]}" readonly></td>
                    <td><button now="${student[1]}" class="btn btn-primary btn1" id="modify">修改</button><button now="${student[1]}" class="btn btn-primary btn2" id="delete" style="background-color: red;border:1px solid red">删除</button><button now="${student[1]}" class="btn btn-primary btn2" id="submitInfo" style="display: none">提交</button></td></tr>`;
    $('#'+studentId).replaceWith(html);
    // student.push()
    /*localStorage.setItem(studentId);*/
});
$(document).on('click', '#delete', function(e) {
    let studentId = $(e.target).attr('now');
    localStorage.removeItem(studentId);
    $('#'+studentId).remove();
    console.log(studentId)
});

function judgeStudentInfo() {
    let student = [];
    $('.studentinfo').each(function () {
        student.push($(this).val());
    });
    // console.log(student)
    for (let i = 0; i < student.length; i++) {
        if (student[i] === "") {
            document.getElementById('hiddenslogan').innerHTML = "*所有信息必添";
            document.getElementById('hiddenslogan').style.display = 'block';
            document.getElementById('hiddenslogan').style.color = 'red';
            return false;
        }
    }
    return true;
}

function inputInfoToLocal() {

    if(judgeStudentInfo() === true){
        // console.log(0)
        let storage = window.localStorage;
        let student = [];
        $('.studentinfo').each(function () {
            student.push($(this).val());
        });

        let gradesum = parseInt(student[4])+parseInt(student[5])+parseInt(student[6])+parseInt(student[7]);
        student.push(gradesum);
        storage.setItem(student[1],JSON.stringify(student));
        console.log(storage)
    }
}
