  // Tabel_Task_Root
const _task = document.querySelector('table._task'),
  thead = _task.querySelector('tr._thead'),
  menuEdit = document.createElement('div'),
  [..._tbody] = _task.querySelectorAll('._tbody');
  menuEdit.classList.add('tmenu_edit');
  menuEdit.innerHTML = 
  `<ul id="tmenu_edit">
  <li><a href="">Tugas Baru</a></li>
  <li><a href="">Detail</a></li>
  <li><a href="">Hapus</a></li>
  </ul>`;
  let  [_edit, _number, _icon, _taskName, _alarmSet] = thead.children;
_tbody.forEach((item, i) => {
    let edits = item.insertCell(0),
    numbers = item.insertCell(1),
    [edit, number, icon, taskName, ...alarmSet] = item.cells;
    edits.innerHTML = `<a href="#tmenu_edit" class="_tmenu_edit"><i class="fas fa-ellipsis-h"></i></a>`;
    numbers.textContent = (i+1).toString().padStart(2, '0');
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
      data.setAttribute("data-title", _alarmSet.textContent)
    });
    //Menu Edit Root
    let [iconEdit] = edit.children;
    iconEdit.addEventListener("click", function(){
      menuEdit.style.display = "block";
      this.offsetParent.appendChild(menuEdit);
      this.nextElementSibling.children.tmenu_edit.style.top = this.offsetParent.offsetTop + "px";
    });
    menuEdit.addEventListener('click', function(x){
      x.target === this ? this.style.display = "none" : this.style.display = "block";
    });
    window.innerWidth < 540 ? menuEdit.click() : false; 
  });
