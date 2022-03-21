`use strict`;

const btnAssign = document.querySelector(`.btn-assign`);
const btnAdd = document.querySelector(`.btn-add`);
const nameInput = document.querySelector(`#name-input`);
const nameList = document.getElementById(`name-list`);
const row = document.querySelector(`.row`);
const addNewList = function () {
  const li = document.createElement(`li`);
  const text = nameInput.value;
  li.innerHTML = text;
  li.classList.add(`list-item`);
  nameList.appendChild(li);
};
nameInput.addEventListener(`keyup`, function (e) {
  if (e.key === `Enter`) {
    addNewList();
    nameInput.value = ``;
  }
});
btnAdd.addEventListener(`click`, function () {
  addNewList();
  nameInput.value = ``;
});
const teamNumber = document.getElementById(`team-number`);
const btnCreate = document.querySelector(`.btn-create`);
btnCreate.addEventListener(`click`, function () {
  for (let i = 0; i < +teamNumber.value; i++) {
    const div = document.createElement(`div`);
    div.classList.add(`col-4`);
    div.classList.add(`team${i}`);
    div.innerText = `Team ${i + 1} `;
    row.appendChild(div);
  }
  // teamNumber.value = ` `;
});
const addNewTeam = function () {
  const randTeam = Math.floor(Math.random() * +teamNumber.value);
  console.log(randTeam);
  const test = document.querySelector(`.testlist`);
  console.log(test.children.length);
  const randon = Math.floor(Math.random() * test.children.length);
  console.log(randon);
  const person = test.children[randon];
  console.log(person);
  const team = document.querySelector(`.team${randTeam}`);
  console.log(team);
  team.appendChild(person);
};
btnAssign.addEventListener(`click`, addNewTeam);
