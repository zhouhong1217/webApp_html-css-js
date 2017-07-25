/**
 * Created by zh on 17-7-21.
 */
function toAddStudentForm() {
    document.getElementById('printstudentinfo').style.display = 'none';
    document.getElementById('checkstudent').style.display = 'none';
    document.getElementById('addstudentinfo').style.display = 'block';
    document.getElementById('showList').style.display = 'block';
}
function toPrintStudentForm() {
    document.getElementById('addstudentinfo').style.display = 'none';
    document.getElementById('checkstudent').style.display = 'none';
    document.getElementById('printstudentinfo').style.display = 'block';
    document.getElementById('showList').style.display = 'none';
}
function toCheckStudentForm() {
    document.getElementById('printstudentinfo').style.display = 'none';
    document.getElementById('checkstudent').style.display = 'block';
    document.getElementById('addstudentinfo').style.display = 'none';
    document.getElementById('showList').style.display = 'none';
}
