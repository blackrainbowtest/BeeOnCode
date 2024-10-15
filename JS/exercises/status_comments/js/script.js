renderStatus();
btn_status.addEventListener("click", function () {
  this.setAttribute("disabled", "");
  addCmtWnd.classList.remove("disabled");

  // Ստատուսի ավելացնելու պատուհանից դուր քլիկի դեպքում այն փակել
  document.addEventListener("click", outsideClickListener);
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    if (!(textStatus.value == "")) {
      saveToLocalStorage(textStatus.value);
      closeAddCommentWindow();
    }
  }
});

// ստատուս ավելացնելու պատուհանը հնարավորություն լինի փակել X կոճակով։
btn_close.addEventListener("click", function () {
  closeAddCommentWindow();
});

save.addEventListener("click", function () {
  // Save սեղմելիս, ստուգել եթե դաշտը լրացված է տվյալը պահել localStorage-ում :
  if (!(textStatus.value == "")) {
    saveToLocalStorage(textStatus.value);
  }
  closeAddCommentWindow();
});

function closeAddCommentWindow() {
  addCmtWnd.classList.add("disabled");
  btn_status.removeAttribute("disabled");
  let temp = document.querySelector("#addCmtWnd>div>textarea");
  temp.value = "";
  renderStatus();

  document.removeEventListener("click", outsideClickListener);
}

function outsideClickListener(event) {
  // Քլիկը բլոկից դուրս էր թե ոչ
  if (!addCmtWnd.contains(event.target) && !btn_status.contains(event.target)) {
    closeAddCommentWindow();
  }
}

function saveToLocalStorage(text) {
  statusGroup = [];
  let data = localStorage.getItem("statusBase");
  if (data) {
    data = JSON.parse(data);
    statusGroup = [...data];
    let obj = { status: text, comments: [] };
    statusGroup.push(obj);
    localStorage.setItem("statusBase", JSON.stringify(statusGroup));
  } else {
    let obj = { status: text, comments: [] };
    statusGroup.push(obj);
    localStorage.setItem("statusBase", JSON.stringify(statusGroup));
  }
}
// Գլխավոր էջում ցուցադրել  բոլոր ստատուսները:
function renderStatus() {
  statusGroup = [];
  let data = localStorage.getItem("statusBase");
  if (data) {
    data = JSON.parse(data);
    statusGroup = [...data];
    statusArea.innerHTML = "";
    for (let i = statusGroup.length - 1; i > -1; i--) {
      createStatus(statusGroup[i], i + 1);
    }
  }
}

function createStatus(value, index) {
  const div = document.createElement("div");
  const divTop = document.createElement("div");
  const button = document.createElement("button");
  const h3 = document.createElement("h3");
  const hr = document.createElement("hr");

  div.classList.add("card", "mb-3", "py-3", "px-4");
  div.style = "border-radius: 15px; min-width: 100%; cursor: pointer;";
  div.addEventListener("click", function (e) {
    if (
      (e.target == this ||
        e.target == this.querySelector("h3") ||
        e.target == this.querySelector("hr") ||
        e.target == this.querySelector(`p`)) &&
      this.children[4]
    ) {
      this.children[4].classList.toggle("disabled");
    }
  });

  h3.classList.add("my-1", "d-inline");
  h3.innerHTML = "user status N " + index;

  divTop.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  button.classList.add("btn-close");
  button.setAttribute("aria-label", "Close");
  button.setAttribute("data-index", index - 1);

  button.addEventListener("click", function (event) {
    event.stopPropagation();
    deleteStatus(this.getAttribute("data-index"));
  });
  const p = document.createElement("p");
  p.classList.add("text-secondary");
  p.innerHTML = value.status;
  const input = document.createElement("input");
  input.type = "text";
  input.setAttribute("id", index);
  input.classList.add("form-control");
  input.placeholder = "Enter comment";
  input.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      if (this.value != "") {
        createComment(this.id, this.value);
        renderStatus();
      }
    }
  });
  let temp2 = getComments(value);
  divTop.append(h3, button);
  div.append(divTop, hr, p, input);
  if (temp2) {
    div.append(divTop, hr, p, input, temp2);
  } else {
    div.append(divTop, hr, p, input);
  }
  statusArea.append(div);
}
// Յուրաքանչյուր ստատուսի համար ստեղծել հնարավորություն comment գրելու: Enter սեղմելիս Comment-ը ավելացնել  տվյալ ստատուսի comments զանգվածում։
function createComment(index, comment) {
  statusGroup = [];
  let data = localStorage.getItem("statusBase");
  if (data) {
    data = JSON.parse(data);
    statusGroup = [...data];
    statusGroup[index - 1].comments.push(comment);
    localStorage.setItem("statusBase", JSON.stringify(statusGroup));
  }
}
// Յուրաքանչյուր ստատուսի վրա սեղմելիս ցուցադրել իր commentները։ Վերջին գրված comment - ը ցուցադրված պետք է լինի սկզբում.
function getComments(value) {
  if (value.comments.length) {
    const ul = document.createElement("ul");
    ul.classList.add("list-group", "py-1", "disabled");
    for (let i in value.comments.reverse()) {
      const li = document.createElement("li");
      li.innerHTML = value.comments[i];
      li.classList.add(
        "text-secondary",
        "mb-1",
        "border",
        "rounded",
        "px-3",
        "py-1",
        "list-group-item"
      );
      ul.append(li);
    }
    return ul;
  }
}

function deleteStatus(index) {
  let data = localStorage.getItem("statusBase");
  if (data) {
    let statusGroup = JSON.parse(data);
    statusGroup.splice(index, 1);
    localStorage.setItem("statusBase", JSON.stringify(statusGroup));
    renderStatus();
  }
}
