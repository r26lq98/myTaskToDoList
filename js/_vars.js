export default function(obj){
  return {
    _task : document.querySelector('table._task'),
    thead : _task.querySelector('tr._thead'),
    menuEdit : document.createElement('div')
  };
}