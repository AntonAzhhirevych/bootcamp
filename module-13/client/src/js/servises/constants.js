const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const NOTIFICATION_MESSAGES = {
  NOTE_DELETED_SUCCESS: 'Заметка успешно удалена!!!',
  NOTE_ADDED_SUCCESS: 'Заметка успешно добавлена!!!',
  EDITOR_FIELDS_EMPTY: 'Заполните поля редактора!!!',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

export { PRIORITY_TYPES, NOTIFICATION_MESSAGES, ICON_TYPES, NOTE_ACTIONS };
