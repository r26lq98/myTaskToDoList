export default function(){
  // Tabel_Task_Root
  const _task = document.querySelector('table._task'),
  thead = _task.querySelector('tr._thead'),
  menuEdit = document.createElement('div'),
  [..._tbody] = _task.querySelectorAll('._tbody');
  
  menuEdit.classList.add('tmenu_edit');
  menuEdit.innerHTML = 
  `<ul id="tmenu_edit">
  <li><a href="#newTask"><i class="fas fa-plus"></i>Tugas Baru</a></li>
  <li><a href=""><i class="fas fa-info-circle"></i>Detail</a></li>
  <li><a href=""><i class="fas fa-trash-alt"></i>Hapus</a></li>
  </ul>`;
  
  let  [_edit, _number, _icon, _taskName, _alarmSet] = thead.children;
  
  _tbody.forEach((item, i) => {
    let [edit, number, icon, taskName, ...alarmSet] = item.cells;
    //Cells add id
    edit.id = "edit";
    number.id = "number";
    icon.id = "icon";
    taskName.id = "taskName";
    //Cells add Attributes
    edit.setAttribute("data-title", _edit.textContent);
    number.setAttribute("data-title", _number.textContent);
    icon.setAttribute("data-title", _icon.textContent);
    taskName.setAttribute("data-title", _taskName.textContent);
    alarmSet.map(data => {
      data.id = "alarm-set";
      data.setAttribute("data-title", _alarmSet.textContent);
    });
    //Menu Edit Root
    let [iconEdit] = edit.children;
    iconEdit.addEventListener("click", function(){
      menuEdit.style.display = "block";
      this.offsetParent.appendChild(menuEdit);
      const tabMenu = this.nextElementSibling.children.tmenu_edit,
      [newTask, details, removeTask] = Array.from(tabMenu.children);
      tabMenu.style.top = this.offsetParent.offsetTop + "px";
      //New Task
      newTask.addEventListener('click', function(){
        const tr = _task.insertRow(_task.rows.length),
        $edit = tr.insertCell(0),
        $id = tr.insertCell(1),
        $icon = tr.insertCell(2),
        $taskName = tr.insertCell(3),
        alarm1 = tr.insertCell(4),
        alarmDes1 = tr.insertCell(5),
        alarm2 = tr.insertCell(6),
        alarmDes2 = tr.insertCell(7),
        alarm3 = tr.insertCell(8),
        alarm1Des3 = tr.insertCell(9),
        alarm4 = tr.insertCell(10),
        alarmDes4 = tr.insertCell(11),
        alarm5 = tr.insertCell(12),
        alarmDes5 = tr.insertCell(13),
        alarm6 = tr.insertCell(14),
        alarmDes6 = tr.insertCell(15),
        alarm7 = tr.insertCell(16),
        alarmDes7 = tr.insertCell(17),
        alarm8 = tr.insertCell(18),
        alarmDes8 = tr.insertCell(19),
        alarm9 = tr.insertCell(20),
        alarmDes9 = tr.insertCell(21),
        alarm10 = tr.insertCell(22),
        alarmDes10 = tr.insertCell(23);
        
        tr.classList.add('_tbody');
        
        $edit.id = "edit";
        $id.id = "number";
        $icon.id = "icon";
        $taskName.id = "taskName";
        //Cells add Attributes
        $edit.setAttribute("data-title", _edit.textContent);
        $id.setAttribute("data-title", _number.textContent);
        $icon.setAttribute("data-title", _icon.textContent);
        $taskName.setAttribute("data-title", _taskName.textContent);
        
        $edit.innerHTML = `<a href="#tmenu_edit" class="_tmenu_edit"><i class="fas fa-ellipsis-h"></i></a>`;
        
        $id.textContent = (_task.rows.length-1).toString().padStart(2, '0');
        
        
        $icon.innerHTML = `<i class="fas fa-edit"></i>`;
        $taskName.textContent = "Hello world";
        
        alarm1.textContent = "jam";
        alarm2.textContent = "menit";
        alarm3.textContent = "detik";
        alarm4.textContent = "milidetik";
        alarm5.textContent = "00:00";
        alarm6.textContent = "00:00";
        alarm7.textContent = "00:00";
        alarm8.textContent = "00:00";
        alarm9.textContent = "00:00";
        alarm10.textContent = "00:00";
        
        
      });
    });
    menuEdit.addEventListener('click', function(x){
      x.target === this ? this.style.display = "none" : this.style.display = "block";
    });
    window.innerWidth < 540 ? menuEdit.click() : false; 
  });
}