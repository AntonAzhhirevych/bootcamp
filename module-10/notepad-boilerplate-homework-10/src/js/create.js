import { ICON_TYPES, NOTE_ACTIONS } from './utils/constants';

function createListItem(note) {
  const noteListItem = document.createElement('li');
  noteListItem.classList.add('note-list__item');
  noteListItem.dataset.id = note.id;

  const Note = document.createElement('div');
  Note.classList.add('note');
  noteListItem.appendChild(Note);

  Note.appendChild(createNoteContent(note));
  Note.appendChild(createNoteFooter(note.priority));
  return noteListItem;
}

function createNoteContent(note) {
  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');

  const noteTitle = document.createElement('h2');
  noteTitle.classList.add('note__title');
  noteTitle.textContent = note.title;

  const noteBody = document.createElement('p');
  noteBody.classList.add('note__body');
  noteBody.textContent = note.body;

  noteContent.append(noteTitle, noteBody);

  return noteContent;
}

function createActionButton(icon, data) {
  const button = document.createElement('button');
  button.classList.add('action');
  button.dataset.action = data;

  const buttonInner = document.createElement('i');
  buttonInner.classList.add('material-icons');
  buttonInner.classList.add('action__icon');
  buttonInner.textContent = icon;

  button.appendChild(buttonInner);

  return button;
}

function createNoteFooter(Priority) {
  const noteFooter = document.createElement('footer');
  noteFooter.classList.add('note__footer');

  const noteSection = document.createElement('section');
  noteSection.classList.add('note__section');

  const notePriority = document.createElement('span');
  notePriority.classList.add('note__priority');
  notePriority.textContent = `Priority : ${Priority}`;

  const noteSection2 = document.createElement('section');
  noteSection.classList.add('note__section');

  noteFooter.append(noteSection, noteSection2);

  noteSection.append(
    createActionButton(ICON_TYPES.ARROW_DOWN, NOTE_ACTIONS.INCREASE_PRIORITY),
    createActionButton(ICON_TYPES.ARROW_UP, NOTE_ACTIONS.DECREASE_PRIORITY),
  );

  noteSection.appendChild(notePriority);

  noteSection2.append(
    createActionButton(ICON_TYPES.EDIT, NOTE_ACTIONS.EDIT),
    createActionButton(ICON_TYPES.DELETE, NOTE_ACTIONS.DELETE),
  );

  return noteFooter;
}

export { createListItem };
