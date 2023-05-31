const dialog = document.querySelector('dialog');
const openDialogBtn = document.querySelector('button');
const bounds = openDialogBtn.getBoundingClientRect();
const miniModalHeight = dialog.clientHeight - 15;
const miniModalWidth = dialog.clientWidth / 2;

let left = bounds.left - miniModalWidth;
if (left < 0) left = 10;

dialog.style.marginTop = bounds.y - miniModalHeight + 'px';
dialog.style.marginLeft = null;
if (innerWidth >= 768) dialog.style.marginLeft = left + 'px';

const lightDismiss = ({ target: dialog }) => {
  if (dialog.nodeName === 'DIALOG') {
    dialog.close('dismiss');
  }
};

dialog.addEventListener('click', lightDismiss);
