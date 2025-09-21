//elementos
const form = document.getElementById('userForm');
const listBtn = document.getElementById('listBtn');
const userList = document.getElementById('usersList');

//Array de usuários
let users = [];
let editIndex = null; // para controlar se estamos editando

//Adicionar ou atualizar usuários
function addUser(name, age, course) {
    if (editIndex === null) {
        // Novo usuário
        users.push({ name, age, course });
    } else {
        // Editando usuário existente
        users[editIndex] = { name, age, course };
        editIndex = null; // reseta o modo edição
    }
}

//display de usuários
function displayUsers() {
    userList.innerHTML = '';
    users.forEach((user, index) => {
        let userHTML = `
            <div class="userItem">
                <h3>${user.name}</h3>
                <p>Age: ${user.age}</p>
                <p>Course: ${user.course}</p>
                <button class="editBtn" onclick="editUser(${index})">Editar</button>
                <button class="deleteBtn" onclick="deleteUser(${index})">Excluir</button>
            </div>
        `;
        userList.insertAdjacentHTML('beforeend', userHTML);
    });
}

// Função delete
function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}

// Função editar
function editUser(index) {
    const user = users[index];
    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    document.getElementById('course').value = user.course;
    editIndex = index; // marca qual usuário está sendo editado
}

//Função lista de usuário
function toggleUsersList() {
    userList.classList.toggle('hidden');
    if (!userList.classList.contains('hidden')) {
        displayUsers();
    }
}

//Formulário para inserir usuário
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;
    addUser(name, age, course);
    displayUsers();
    form.reset();
});

//Botão Listagem
listBtn.addEventListener('click', toggleUsersList);
