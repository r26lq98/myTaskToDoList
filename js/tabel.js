// Tabel_Task_Root
const _task = document.querySelector('table._task'),
menuEdit = document.createElement('div'),
[..._tbody] = _task.querySelectorAll('._tbody');
menuEdit.classList.add('tmenu_edit');
menuEdit.innerHTML = 
  `<ul id="tmenu_edit">
      <li><a href="">item1</a></li>
      <li><a href="">item2</a></li>
      <li><a href="">item3</a></li>
  </ul>`;
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
  let [iconEdit] = edit.children;
  iconEdit.addEventListener("click", function(){
    menuEdit.style.display = "block";
    this.offsetParent.appendChild(menuEdit)
    this.nextElementSibling.children.tmenu_edit.style.top = this.offsetParent.offsetTop + "px";
  });
  menuEdit.addEventListener('click', function(x){
    x.target === this ? this.style.display = "none" : this.style.display = "block";
  });
  window.innerWidth < 540 ? menuEdit.click() : false; 
});
