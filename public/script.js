const getData = () => ({
  problem: document.querySelector('#problem').value,

  error_text: document.querySelector('#error_text').value,

  commit: document.querySelector('#commit').value,
});

const postData = (inputData) => {
  console.log(inputData);
  axios
    .post('/', inputData);
};

const newDiv = document.createElement('div');
const newBtn = document.createElement('button');

newBtn.innerText = 'Create a Bug';
newBtn.addEventListener('click', () => {
  const newDiv2 = document.createElement('div');
  const input1 = document.createElement('input');
  const input2 = document.createElement('input');
  const input3 = document.createElement('input');

  input1.setAttribute('type', 'text');
  input1.setAttribute('name', 'problem');
  input1.setAttribute('id', 'problem');

  input2.setAttribute('type', 'text');
  input2.setAttribute('name', 'error_text');
  input2.setAttribute('id', 'error_text');

  input3.setAttribute('type', 'text');
  input3.setAttribute('name', 'commit');
  input3.setAttribute('id', 'commit');

  const label1 = document.createElement('label');
  const label2 = document.createElement('label');
  const label3 = document.createElement('label');

  label1.innerText = 'Problem:';
  label1.setAttribute('for', 'problem');

  label2.innerText = 'Error Text:';
  label1.setAttribute('for', 'error_text');

  label3.innerText = 'Commit:';
  label1.setAttribute('for', 'commit');

  newDiv2.appendChild(label1);
  newDiv2.appendChild(input1);

  newDiv2.appendChild(label2);
  newDiv2.appendChild(input2);

  newDiv2.appendChild(label3);
  newDiv2.appendChild(input3);

  const newBtn2 = document.createElement('button');
  newBtn2.innerText = 'Submit';
  newBtn2.addEventListener('click', () => {
    postData(getData()); });

  newDiv2.appendChild(newBtn2);
  document.body.appendChild(newDiv2);
});

newDiv.appendChild(newBtn);
document.body.appendChild(newDiv);
