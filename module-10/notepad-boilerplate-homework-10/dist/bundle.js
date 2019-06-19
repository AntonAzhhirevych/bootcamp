!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";var o,r,s,i=n(4),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function a(){s=!1}function u(t){if(t){if(t!==o){if(t.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,n){return e!==n.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+e.join(", "));o=t,a()}}else o!==c&&(o=c,a())}function d(){return s||(s=function(){o||u(c);for(var t,e=o.split(""),n=[],r=i.nextValue();e.length>0;)r=i.nextValue(),t=Math.floor(r*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return o||c},characters:function(t){return u(t),o},seed:function(t){i.seed(t),r!==t&&(a(),r=t)},lookup:function(t){return d()[t]},shuffled:d}},function(t,e,n){},function(t,e,n){"use strict";t.exports=n(3)},function(t,e,n){"use strict";var o=n(0),r=n(5),s=n(9),i=n(10)||0;function c(){return r(i)}t.exports=c,t.exports.generate=c,t.exports.seed=function(e){return o.seed(e),t.exports},t.exports.worker=function(e){return i=e,t.exports},t.exports.characters=function(t){return void 0!==t&&o.characters(t),o.shuffled()},t.exports.isValid=s},function(t,e,n){"use strict";var o=1;t.exports={nextValue:function(){return(o=(9301*o+49297)%233280)/233280},seed:function(t){o=t}}},function(t,e,n){"use strict";var o,r,s=n(6),i=(n(0),1459707606518),c=6;t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-i));return n===r?o++:(o=0,r=n),e+=s(c),e+=s(t),o>0&&(e+=s(o)),e+=s(n)}},function(t,e,n){"use strict";var o=n(0),r=n(7),s=n(8);t.exports=function(t){for(var e,n=0,i="";!e;)i+=s(r,o.get(),1),e=t<Math.pow(16,n+1),n++;return i}},function(t,e,n){"use strict";var o,r="object"==typeof window&&(window.crypto||window.msCrypto);o=r&&r.getRandomValues?function(t){return r.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=o},function(t,e){t.exports=function(t,e,n){var o=(2<<Math.log(e.length-1)/Math.LN2)-1,r=Math.ceil(1.6*o*n/e.length);n=+n;for(var s="";;)for(var i=t(r),c=0;c<r;c++){var a=i[c]&o;if(e[a]&&(s+=e[a]).length===n)return s}}},function(t,e,n){"use strict";var o=n(0);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6||new RegExp("[^"+o.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t))}},function(t,e,n){"use strict";t.exports=0},function(t,e,n){"use strict";n.r(e);n(1);const o=1,r={EDIT:"edit",DELETE:"delete",ARROW_DOWN:"expand_more",ARROW_UP:"expand_less"},s={DELETE:"delete-note",EDIT:"edit-note",INCREASE_PRIORITY:"increase-priority",DECREASE_PRIORITY:"decrease-priority"};function i(t){const e=document.createElement("li");e.classList.add("note-list__item"),e.dataset.id=t.id;const n=document.createElement("div");return n.classList.add("note"),e.appendChild(n),n.appendChild(function(t){const e=document.createElement("div");e.classList.add("note__content");const n=document.createElement("h2");n.classList.add("note__title"),n.textContent=t.title;const o=document.createElement("p");return o.classList.add("note__body"),o.textContent=t.body,e.append(n,o),e}(t)),n.appendChild(function(t){const e=document.createElement("footer");e.classList.add("note__footer");const n=document.createElement("section");n.classList.add("note__section");const o=document.createElement("span");o.classList.add("note__priority"),o.textContent=`Priority : ${t}`;const i=document.createElement("section");return n.classList.add("note__section"),e.append(n,i),n.append(c(r.ARROW_DOWN,s.INCREASE_PRIORITY),c(r.ARROW_UP,s.DECREASE_PRIORITY)),n.appendChild(o),i.append(c(r.EDIT,s.EDIT),c(r.DELETE,s.DELETE)),e}(t.priority)),e}function c(t,e){const n=document.createElement("button");n.classList.add("action"),n.dataset.action=e;const o=document.createElement("i");return o.classList.add("material-icons"),o.classList.add("action__icon"),o.textContent=t,n.appendChild(o),n}const a=t=>{d.deleteNote(t.dataset.id),t.remove()};function u(t,e){const n=e.map(t=>i(t));return t.innerHTML="",t.append(...n),t}const d=new class{constructor(t=[]){this._notes=t}get notes(){return this._notes}generatorId(){return n(2)}findNoteById(t){this.notes.find(e=>e.id===t)}saveNote(t){return this.notes.push(t)}deleteNote(t){this.notes.filter(e=>e.id!==t)}updateNoteContent(t,e){const n=this.notes.find(e=>e.id===t);n&&Object.assign(n,e)}updateNotePriority(t,e){this.notes.find(n=>n.id===t?n.priority=e:null)}filterNotesByQuery(t){const e=[];return this.notes.filter(n=>{const o=n.title.toLowerCase(),r=n.body.toLowerCase();(o.includes(t.toLowerCase())||r.includes(t.toLowerCase()))&&e.push(n)}),e}filterNotesByPriority(t){const e=[];return this.notes.filter(n=>{n.priority===t&&e.push(n)}),e}}([{id:"id-1",title:"JavaScript essentials",body:"Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",priority:2},{id:"id-2",title:"Refresh HTML and CSS",body:"Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",priority:o},{id:"id-3",title:"Get comfy with Frontend frameworks",body:"First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",priority:o},{id:"id-4",title:"Winter clothes",body:"Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",priority:0}]),l={noteList:document.querySelector(".note-list"),form:document.querySelector(".note-editor"),titleInput:document.querySelector(".note_title"),bodyInput:document.querySelector(".note_body"),searchForm:document.querySelector(".search-form__input"),deleteNote:document.querySelector('button[data-action="edit-note"]')};l.searchForm.addEventListener("input",function(t){const e=d.filterNotesByQuery(t.target.value);u(l.noteList,e),t.preventDefault()}),l.form.addEventListener("submit",function(t){t.preventDefault();const e=l.titleInput.value.trim(),n=l.bodyInput.value.trim();""!==e&&""!==n?(l.form.reset(),function(t,e){let n=i({id:d.generatorId(),title:t,body:e,priority:0});l.noteList.append(n)}(e,n)):alert("Для добавления заметки необходимо заполнить все поля!!!")}),l.noteList.addEventListener("click",function(t){"delete-note"===t.target.parentNode.dataset.action&&a(t.target.closest("li"))}),u(l.noteList,d.notes)}]);
//# sourceMappingURL=bundle.js.map