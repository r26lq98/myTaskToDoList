// Tabel_Task_Root
const _task = document.querySelector('table._task'),
[..._tbody] = _task.querySelectorAll('._tbody');
_tbody.forEach(item => {
  let [edit, number, icon, taskName, ...alarmSet] = item.cells;
  //Cells add id
  edit.id = "edit";
  number.id = "number";
  icon.id = "icon";
  taskName.id = "taskName";
  //Cells add Attributes
  edit.setAttribute("data-title", "Edit");
  number.setAttribute("data-title", "Id");
  icon.setAttribute("data-title", "icon");
  taskName.setAttribute("data-title", "Task Name");
  alarmSet.map(data => {
    data.id = "alarm-set";
    data.setAttribute("data-title", "Alarm Set")
  });
  //Menu Edit Root
  let [icn_edit, tmenu_edit] = edit.children;
  icn_edit.addEventListener("click", function(){
    this.nextElementSibling.style.display = "block";
  });
  tmenu_edit.addEventListener('click', function(x){
    x.target === this ? this.style.display = "none" : this.style.display = "block";
  });
});

