const dummy = 'I am sleepy '.repeat(1000);
document.querySelector('#msgBody').innerText=dummy;

document.querySelector('#msgBtn').addEventListener('click', e => {
  document.querySelector('#msgBody').classList.toggle('open');
});