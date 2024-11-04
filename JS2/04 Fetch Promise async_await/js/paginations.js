import { createTag } from "./utils.js";

const RESCOUNT = 36;

export class Pagination {
  url = `https://randomuser.me/api/?results=${RESCOUNT}&inc=name,email,picture,location,gender`;
  usersData = [];
  currentPage = 0;
  pageCount = 1;

  constructor(data_in_page, debugging = false) {
    this.count = data_in_page;
    this.debugging = debugging;
  }

  async load() {
    await this.getData();
    await this.render();
    await this.pagination();
    if (this.debugging) {
      console.log(this.usersData[0]);
    }
  }

  getData() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          this.usersData = data.results;
          this.pageCount = Math.ceil(this.usersData.length / this.count);
          resolve();
        })
        .catch((error) => {
          console.error("Error fatching data", error);
          reject(error);
        });
    });
  }

  render(reRender) {
    return new Promise((resolve, reject) => {
      const containerDiv = createTag("div", "d-flex row p-4");
      containerDiv.id = "containerDiv";
      this.currentData = this.usersData.slice(
        this.count * this.currentPage,
        this.count * this.currentPage + this.count
      );
      for (let i = 0; i < this.currentData.length; i++) {
        const userDiv = createTag(
          "div",
          "col col-sm-6 col-md-4 col-xl-2 d-flex justify-content-center flex-column rounded"
        );
        const userImage = createTag("img", "img-fluid");
        userImage.src = this.currentData[i].picture.large;
        const userName = createTag("h4");
        userName.innerText = `${this.currentData[i].name.first} ${this.currentData[i].name.last}`;
        const userEmail = createTag("span");
        userEmail.innerText = `${this.currentData[i].email}`;
        userDiv.append(userImage, userName, userEmail);
        containerDiv.append(userDiv);
      }
      if (reRender) {
        const oldContainer = document.getElementById("containerDiv");
        if (oldContainer) {
          oldContainer.remove();
        }
        root.prepend(containerDiv);
      } else {
        root.append(containerDiv);
      }
      resolve();
    });
  }

  pagination() {
    return new Promise((resolve, reject) => {
      const paginationContainer = createTag(
        "div",
        "btn-group-toggle d-flex justify-content-center gap-2"
      );
      paginationContainer.setAttribute("data-toggle", "buttons");
      for (let i = 0; i < this.pageCount; i++) {
        const pagbutton = createTag("button", "btn btn-primary");
        pagbutton.innerText = i + 1;
        pagbutton.addEventListener("click", () => {
          this.currentPage = i;
          this.render(true);
        });
        paginationContainer.append(pagbutton);
      }
      root.append(paginationContainer);
      resolve();
    });
  }
}
