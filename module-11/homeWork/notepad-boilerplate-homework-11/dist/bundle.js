!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t,e,n){"use strict";var o,i,r,a=n(4),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){r=!1}function u(t){if(t){if(t!==o){if(t.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,n){return e!==n.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+e.join(", "));o=t,c()}}else o!==s&&(o=s,c())}function l(){return r||(r=function(){o||u(s);for(var t,e=o.split(""),n=[],i=a.nextValue();e.length>0;)i=a.nextValue(),t=Math.floor(i*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return o||s},characters:function(t){return u(t),o},seed:function(t){a.seed(t),i!==t&&(c(),i=t)},lookup:function(t){return l()[t]},shuffled:l}},function(t,e,n){},function(t,e,n){"use strict";t.exports=n(3)},function(t,e,n){"use strict";var o=n(0),i=n(5),r=n(9),a=n(10)||0;function s(){return i(a)}t.exports=s,t.exports.generate=s,t.exports.seed=function(e){return o.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&o.characters(t),o.shuffled()},t.exports.isValid=r},function(t,e,n){"use strict";var o=1;t.exports={nextValue:function(){return(o=(9301*o+49297)%233280)/233280},seed:function(t){o=t}}},function(t,e,n){"use strict";var o,i,r=n(6),a=(n(0),1459707606518),s=6;t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-a));return n===i?o++:(o=0,i=n),e+=r(s),e+=r(t),o>0&&(e+=r(o)),e+=r(n)}},function(t,e,n){"use strict";var o=n(0),i=n(7),r=n(8);t.exports=function(t){for(var e,n=0,a="";!e;)a+=r(i,o.get(),1),e=t<Math.pow(16,n+1),n++;return a}},function(t,e,n){"use strict";var o,i="object"==typeof window&&(window.crypto||window.msCrypto);o=i&&i.getRandomValues?function(t){return i.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=o},function(t,e){t.exports=function(t,e,n){var o=(2<<Math.log(e.length-1)/Math.LN2)-1,i=Math.ceil(1.6*o*n/e.length);n=+n;for(var r="";;)for(var a=t(i),s=0;s<i;s++){var c=a[s]&o;if(e[c]&&(r+=e[c]).length===n)return r}}},function(t,e,n){"use strict";var o=n(0);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6||new RegExp("[^"+o.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t))}},function(t,e,n){"use strict";t.exports=0},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1);var o,i,r,a,s,c,u=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),d=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},f=(o=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],i=function(){function t(e){var n=e.targetModal,o=e.triggers,i=void 0===o?[]:o,r=e.onShow,a=void 0===r?function(){}:r,s=e.onClose,c=void 0===s?function(){}:s,l=e.openTrigger,f=void 0===l?"data-micromodal-trigger":l,p=e.closeTrigger,h=void 0===p?"data-micromodal-close":p,v=e.disableScroll,m=void 0!==v&&v,y=e.disableFocus,g=void 0!==y&&y,b=e.awaitCloseAnimation,w=void 0!==b&&b,N=e.debugMode,E=void 0!==N&&N;u(this,t),this.modal=document.getElementById(n),this.config={debugMode:E,disableScroll:m,openTrigger:f,closeTrigger:h,onShow:a,onClose:c,awaitCloseAnimation:w,disableFocus:g},i.length>0&&this.registerTriggers.apply(this,d(i)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return l(t,[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];n.filter(Boolean).forEach(function(e){e.addEventListener("click",function(){return t.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var t=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function e(){t.classList.remove("is-open"),t.removeEventListener("animationend",e,!1)},!1):t.classList.remove("is-open")}},{key:"closeModalById",value:function(t){this.modal=document.getElementById(t),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(t){if(this.config.disableScroll){var e=document.querySelector("body");switch(t){case"enable":Object.assign(e.style,{overflow:"",height:""});break;case"disable":Object.assign(e.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(t){t.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),t.preventDefault())}},{key:"onKeydown",value:function(t){27===t.keyCode&&this.closeModal(t),9===t.keyCode&&this.maintainFocus(t)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(o);return Array.apply(void 0,d(t))}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var t=this.getFocusableNodes();t.length&&t[0].focus()}}},{key:"maintainFocus",value:function(t){var e=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var n=e.indexOf(document.activeElement);t.shiftKey&&0===n&&(e[e.length-1].focus(),t.preventDefault()),t.shiftKey||n!==e.length-1||(e[0].focus(),t.preventDefault())}else e[0].focus()}}]),t}(),r=null,a=function(t){if(!document.getElementById(t))return console.warn("MicroModal v0.3.2: ❗Seems like you have missed %c'"+t+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+t+'"></div>'),!1},s=function(t,e){if(function(t){if(t.length<=0)console.warn("MicroModal v0.3.2: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')}(t),!e)return!0;for(var n in e)a(n);return!0},{init:function(t){var e=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),n=[].concat(d(document.querySelectorAll("["+e.openTrigger+"]"))),o=function(t,e){var n=[];return t.forEach(function(t){var o=t.attributes[e].value;void 0===n[o]&&(n[o]=[]),n[o].push(t)}),n}(n,e.openTrigger);if(!0!==e.debugMode||!1!==s(n,o))for(var r in o){var a=o[r];e.targetModal=r,e.triggers=[].concat(d(a)),new i(e)}},show:function(t,e){var n=e||{};n.targetModal=t,!0===n.debugMode&&!1===a(t)||(r=new i(n)).showModal()},close:function(t){t?r.closeModalById(t):r.closeModal()}}),p=function(){return(p=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},h=function(){return function(t){this.options=t}}();!function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove"}(c||(c={}));var v=function(){function t(){this.notifications=[]}return t.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,c.Add,this.notifications)},t.prototype.splice=function(t,e){var n=this.notifications.splice(t,e)[0];this.updateFn(n,c.Remove,this.notifications)},t.prototype.indexOf=function(t){return this.notifications.indexOf(t)},t.prototype.onupdate=function(t){this.updateFn=t},t}(),m={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0},y=function(){function t(){this.notifications=[];var t=document.createDocumentFragment(),e=this._createHTLMElement({tagName:"div",className:"notyf"});t.appendChild(e),document.body.appendChild(t),this.container=e,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return t.prototype.update=function(t,e){e===c.Add?this.addNotification(t):e===c.Remove&&this.removeNotification(t)},t.prototype.removeNotification=function(t){var e,n,o=this,i=this._popRenderedNotification(t);i&&((e=i.node).classList.add("notyf__toast--disappear"),e.addEventListener(this.animationEndEventName,n=function(t){t.target===e&&(e.removeEventListener(o.animationEndEventName,n),o.container.removeChild(e))}))},t.prototype.addNotification=function(t){var e=this._renderNotification(t);this.notifications.push({notification:t,node:e}),this._announce(t.options.message||"Notification")},t.prototype._renderNotification=function(t){var e=this._buildNotificationCard(t),n=t.options.className;return n&&e.classList.add(n),this.container.appendChild(e),e},t.prototype._popRenderedNotification=function(t){for(var e=-1,n=0;n<this.notifications.length&&e<0;n++)this.notifications[n].notification===t&&(e=n);if(-1!==e)return this.notifications.splice(e,1)[0]},t.prototype._buildNotificationCard=function(t){var e=t.options,n=e.icon,o=this._createHTLMElement({tagName:"div",className:"notyf__toast"}),i=this._createHTLMElement({tagName:"div",className:"notyf__ripple"}),r=this._createHTLMElement({tagName:"div",className:"notyf__wrapper"}),a=this._createHTLMElement({tagName:"div",className:"notyf__message"});a.innerHTML=e.message||"";var s=e.backgroundColor;if(n&&"object"==typeof n){var c=this._createHTLMElement({tagName:"div",className:"notyf__icon"}),u=this._createHTLMElement({tagName:n.tagName||"i",className:n.className,text:n.text});s&&(u.style.color=s),c.appendChild(u),r.appendChild(c)}return r.appendChild(a),o.appendChild(r),s&&(e.ripple?(i.style.backgroundColor=s,o.appendChild(i)):o.style.backgroundColor=s),o},t.prototype._createHTLMElement=function(t){var e=t.tagName,n=t.className,o=t.text,i=document.createElement(e);return n&&(i.className=n),i.textContent=o||null,i},t.prototype._createA11yContainer=function(){var t=this._createHTLMElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},t.prototype._announce=function(t){var e=this;this.a11yContainer.textContent="",setTimeout(function(){e.a11yContainer.textContent=t},100)},t.prototype._getAnimationEndEventName=function(){var t,e=document.createElement("_fake"),n={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(t in n)if(void 0!==e.style[t])return n[t];return"animationend"},t}(),g=function(){function t(t){var e=this;this.notifications=new v,this.view=new y;var n=this.registerTypes(t);this.options=p({},m,t),this.options.types=n,this.notifications.onupdate(function(t,n){e.view.update(t,n)})}return t.prototype.error=function(t){var e=this.normalizeOptions("error",t);this.open(e)},t.prototype.success=function(t){var e=this.normalizeOptions("success",t);this.open(e)},t.prototype.open=function(t){var e=this.options.types.find(function(e){return e.type===t.type})||{},n=p({},e,t);n.ripple=void 0===n.ripple?this.options.ripple:n.ripple;var o=new h(n);this._pushNotification(o)},t.prototype._pushNotification=function(t){var e=this;this.notifications.push(t);var n=t.options.duration||this.options.duration;setTimeout(function(){var n=e.notifications.indexOf(t);e.notifications.splice(n,1)},n)},t.prototype.normalizeOptions=function(t,e){var n={type:t};return"string"==typeof e?n.message=e:"object"==typeof e&&(n=p({},n,e)),n},t.prototype.registerTypes=function(t){var e=(t&&t.types||[]).slice();return m.types.map(function(t){var n=e.findIndex(function(e){return e.type===t.type}),o=-1!==n?e.splice(n,1)[0]:{};return p({},t,o)}).concat(e)},t}();function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._notes=e}var e,o,i;return e=t,(o=[{key:"generatorId",value:function(){return n(2).generate()}},{key:"findNoteById",value:function(t){this.notes.find(function(e){return e.id===t})}},{key:"saveNote",value:function(t){var e=this;return new Promise(function(n){e.notes.push(t),n(t),localStorage.setItem("notes",JSON.stringify(e.notes))})}},{key:"deleteNote",value:function(t){var e=this;return new Promise(function(n){e.notes.filter(function(o){o.id===t&&(e.notes.splice(e.notes.indexOf(o),1),n(t),localStorage.setItem("notes",JSON.stringify(e.notes)))})})}},{key:"updateNoteContent",value:function(t,e){var n=this;return new Promise(function(o){var i=n.notes.find(function(e){return e.id===t});i&&o(Object.assign(i,e))})}},{key:"updateNotePriority",value:function(t,e){var n=this;return new Promise(function(o){o(n.notes.find(function(n){return n.id===t?n.priority=e:null}))})}},{key:"filterNotesByQuery",value:function(t){var e=this;return new Promise(function(n){var o=[];e.notes.filter(function(e){var i=e.title.toLowerCase(),r=e.body.toLowerCase();(i.includes(t.toLowerCase())||r.includes(t.toLowerCase()))&&o.push(e),n(o)})})}},{key:"filterNotesByPriority",value:function(t){var e=this;return new Promise(function(n){var o=[];e.notes.filter(function(e){e.priority===t&&o.push(e)}),n(o)})}},{key:"notes",get:function(){return this._notes}}])&&b(e.prototype,o),i&&b(e,i),t}();var N=function(t){_.deleteNote(t.dataset.id),t.remove(),k.success("Заметка успешно удалена!!!")};function E(t,e){var n=e.map(function(t){return x(t)});return t.innerHTML="",L.noteList.insertAdjacentHTML("beforeend",n.join(" ")),t}n(11);var _=new w(JSON.parse(localStorage.getItem("notes")));f.init();var k=new g,L={noteList:document.querySelector(".note-list"),noteListLi:document.querySelector("note-list__item"),form:document.querySelector(".note-editor"),titleInput:document.querySelector(".note_title"),bodyInput:document.querySelector(".note_body"),searchForm:document.querySelector(".search-form__input"),button:document.querySelector('button[data-action="open-editor"]')};L.button.addEventListener("click",function(){f.show("note-editor-modal")}),L.searchForm.addEventListener("input",function(t){_.filterNotesByQuery(t.target.value).then(function(e){E(L.noteList,e),t.preventDefault()})}),L.form.addEventListener("submit",function(t){t.preventDefault();var e,n,o,i,r=L.titleInput.value.trim(),a=L.bodyInput.value.trim();""!==r&&""!==a?(L.form.reset(),e=r,n=a,o=x({id:_.generatorId(),title:e,body:n,priority:0}),i={id:_.generatorId(),title:e,body:n,priority:0},_.saveNote(i).then(function(){L.noteList.insertAdjacentHTML("beforeend",o),k.success("Заметка добавленна!!!")}),f.close("note-editor-modal")):k.error("Для добавления заметки необходимо заполнить все поля!!!")}),L.noteList.addEventListener("click",function(t){"delete-note"===t.target.parentNode.dataset.action&&N(t.target.closest("li"))});var C=document.querySelector("#template").innerHTML.trim(),x=Handlebars.compile(C);E(L.noteList,_.notes)}]);
//# sourceMappingURL=bundle.js.map