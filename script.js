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
  li.classList.add(`list-group-item`);
  nameList.appendChild(li);
};
nameInput.addEventListener(`keyup`, function (e) {
  if (e.key === `Enter`) {
    addNewList();
    nameInput.value = ``;
  }
  const test = document.querySelector(`.testlist`);
});
btnAdd.addEventListener(`click`, function () {
  addNewList();
  nameInput.value = ``;
});
const teamRow = document.querySelector(`#team-row`);
const teamNumber = document.getElementById(`team-number`);
const btnCreate = document.querySelector(`.btn-create`);
btnCreate.addEventListener(`click`, function () {
  for (let i = 0; i < +teamNumber.value; i++) {
    teamRow.innerHTML += `
    <div class="col-3 team">
    <h4>TEAM ${i + 1}</h4>
      <ul class="list-group testlist">
         
      </ul>
  </div>`;
  }
  // teamNumber.value = ` `;
});
const addNewTeam = function () {
  const randTeam = Math.floor(Math.random() * +teamNumber.value);
  // console.log(randTeam);
  const test = document.querySelector(`.testlist`);
  // console.log(test.children.length);
  const randon = Math.floor(Math.random() * test.children.length);
  // console.log(randon);
  const person = test.children[randon];
  if (!person) return;
  // console.log(person);
  const team = document.querySelectorAll(`.team > ul`);
  // console.log(team);
  team[randTeam].appendChild(person);
  document.querySelector(
    `.name-box > p`
  ).textContent = `WAITING LIST (${test.children.length})`;
};
btnAssign.addEventListener(`click`, addNewTeam);
const reset = document.querySelector(`.btn-reset`);

const resetAll = function () {
  teamRow.innerHTML = ``;
  nameList.innerHTML = ``;
  teamNumber.value = ` `;
};
reset.addEventListener(`click`, resetAll);
