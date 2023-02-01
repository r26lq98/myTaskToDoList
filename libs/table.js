export default function(){
  // Tabel_Task_Root
  const _task = document.querySelector('table._task'),
  thead = _task.insertRow(0),
  tfbody = document.getElementById('tfbody'),
  menuEdit = document.createElement('div'),
  // thead = document.createElement('tr');
  newTask = document.getElementById('newTask'),
  [..._tbody] = _task.querySelectorAll('._tbody');
  
  
  thead.classList.add('_thead');
  thead.innerHTML = `
        <th>edit</th>
        <th>Id</th>
        <th>icon</th>
        <th class="taskName">Nama Tugas</th>
        <th id="alarm-set">Alarm Set 1</th>
        <th id="alarm-desc">Deskripsi 1</th>
        <th id="alarm-set">Alarm Set 2</th>
        <th id="alarm-desc">Deskripsi 2</th>
        <th id="alarm-set">Alarm Set 3</th>
        <th id="alarm-desc">Deskripsi 3</th>
        <th id="alarm-set">Alarm Set 4</th>
        <th id="alarm-desc">Deskripsi 4</th>
        <th id="alarm-set">Alarm Set 5</th>
        <th id="alarm-desc">Deskripsi 5</th>
        <th id="alarm-set">Alarm Set 6</th>
        <th id="alarm-desc">Deskripsi 6</th>
        <th id="alarm-set">Alarm Set 7</th>
        <th id="alarm-desc">Deskripsi 7</th>
        <th id="alarm-set">Alarm Set 8</th>
        <th id="alarm-desc">Deskripsi 8</th>
        <th id="alarm-set">Alarm Set 9</th>
        <th id="alarm-desc">Deskripsi 9</th>
        <th id="alarm-set">Alarm Set 10</th>
        <th id="alarm-desc">Deskripsi 10</th>
  `;
  
  menuEdit.classList.add('tmenu_edit');
  menuEdit.innerHTML = 
  `<ul id="tmenu_edit" class="tmenu_edit">
  <li><a href="#newTask" id="newTask"><i class="fas fa-plus"></i>Tugas Baru</a></li>
  <li><a href="#_edit" id="_edit"><i class="fas fa-pen"></i>Edit</a></li>
  <li><a href="#"><i class="fas fa-info-circle"></i>Detail</a></li>
  <li><a href="#"><i class="fas fa-trash-alt"></i>Hapus</a></li>
  </ul>`;
  
  let  [_edit, _number, _icon, _taskName, ..._alarms] = thead.children;
  
  _tbody.forEach((item, i) => {
    let [edit, number] = item.cells;
    edit.id = "edit";
    number.id = "number";
    
    //Menu Edit Root
    let [iconEdit] = edit.children;
    iconEdit.addEventListener("click", function(){
      this.offsetParent.appendChild(menuEdit);
      const tabMenu = this.nextElementSibling.children.tmenu_edit,
      [newTask, edetTb, details, removeTask] = Array.from(tabMenu.children);
      edetTb.hidden = true;
      details.hidden = true;
      removeTask.hidden = true;
      tabMenu.style.top = this.offsetParent.offsetTop + "px";
      tabMenu.style.left = this.offsetLeft + "px";
      //New Task
      newTask.addEventListener('click', function(){
        
        const tr = _task.insertRow(_task.rows.length),
        $edit = tr.insertCell(0),
        $id = tr.insertCell(1),
        $icon = tr.insertCell(2),
        $taskName = tr.insertCell(3),
        alarm1 = tr.insertCell(4),
        alarmDesc1 = tr.insertCell(5),
        alarm2 = tr.insertCell(6),
        alarmDesc2 = tr.insertCell(7),
        alarm3 = tr.insertCell(8),
        alarmDesc3 = tr.insertCell(9),
        alarm4 = tr.insertCell(10),
        alarmDesc4 = tr.insertCell(11),
        alarm5 = tr.insertCell(12),
        alarmDesc5 = tr.insertCell(13),
        alarm6 = tr.insertCell(14),
        alarmDesc6 = tr.insertCell(15),
        alarm7 = tr.insertCell(16),
        alarmDesc7 = tr.insertCell(17),
        alarm8 = tr.insertCell(18),
        alarmDesc8 = tr.insertCell(19),
        alarm9 = tr.insertCell(20),
        alarmDesc9 = tr.insertCell(21),
        alarm10 = tr.insertCell(22),
        alarmDesc10 = tr.insertCell(23);
        tr.classList.add('_tbody');
        
        $edit.id = "edit";
        $edit.setAttribute("data-title", _edit.textContent);
        $id.id = "number";
        $icon.id = "icon";
        $taskName.id = "taskName";
        //Cells add Attributes
        $edit.setAttribute("data-title", _edit.textContent);
        $id.setAttribute("data-title", _number.textContent);
        $icon.setAttribute("data-title", _icon.textContent);
        $taskName.setAttribute("data-title", _taskName.textContent);
        
        $edit.innerHTML = `<a href="#tmenu_edit" class="_tmenu_edit"><i class="fas fa-ellipsis-h"></i></a>`;
        
        $edit.addEventListener('click', function(){
          $edit.appendChild(menuEdit)
        });
        
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
        
        alarm1.classList.add('alarm-set');
        alarm2.classList.add('alarm-set');
        alarm3.classList.add('alarm-set');
        alarm4.classList.add('alarm-set');
        alarm5.classList.add('alarm-set');
        alarm6.classList.add('alarm-set');
        alarm7.classList.add('alarm-set');
        alarm8.classList.add('alarm-set');
        alarm9.classList.add('alarm-set');
        alarm10 .classList.add('alarm-set');
        
        alarmDesc1.textContent = "Contoh deskripsi 1";
        alarmDesc2.textContent = "Contoh deskripsi 2";
        alarmDesc3.textContent = "Contoh deskripsi 3";
        alarmDesc4.textContent = "Contoh deskripsi 4";
        alarmDesc5.textContent = "Contoh deskripsi 5";
        alarmDesc6.textContent = "Contoh deskripsi 6";
        alarmDesc7.textContent = "Contoh deskripsi 7";
        alarmDesc8.textContent = "Contoh deskripsi 8";
        alarmDesc9.textContent = "Contoh deskripsi 9";
        alarmDesc10.textContent = "Contoh deskripsi 10";
        tfbody.remove();
        edetTb.hidden = false;
        details.hidden = false;
        removeTask.hidden = false;
        $id.textContent = (tr.rowIndex).toString().padStart(2, '0');
      });
    });
  });
  document.body.addEventListener('click', function(x){
    if(x.target.classList.contains('_tmenu_edit') || x.target.className === 'fas fa-ellipsis-h'){
      menuEdit.style.display = "block";
      if(window.innerWidth > 540){
        menuEdit.children.tmenu_edit.style.top = x.target.offsetParent.offsetTop + "px";
        menuEdit.children.tmenu_edit.style.left = x.target.offsetParent.offsetLeft+20 + "px";
      } else if (window.innerWidth < 540) {
        menuEdit.children.tmenu_edit.style.left = x.target.offsetParent.offsetLeft-50 + "px";
      }
    } else {
      menuEdit.style.display = "none";
    }
  });
}