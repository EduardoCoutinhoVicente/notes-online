const noteTextarea = document.getElementById('note');
const saveButton = document.getElementById('saveBtn');
const loadButton = document.getElementById('loadBtn');

saveButton.addEventListener('click', function() {
    const noteContent = noteTextarea.value;
    localStorage.setItem('note', noteContent);
    alert('Nota salva com sucesso!');
});

loadButton.addEventListener('click', function() {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
        noteTextarea.value = savedNote;
        alert('Nota carregada!');
    } else {
        alert('Nenhuma nota encontrada.');
    }
});