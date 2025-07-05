// var state={
//    taskList :[
//   {
//     imageUrl: "",
//     taskTitle: "",
//     taskType: "",
//     taskDescription: "",
//   },
//   {
//     imageUrl: "",
//     taskTitle: "",
//     taskType: "",
//     taskDescription: "",
//   },
//   {
//     imageUrl: "",
//     taskTitle: "",
//     taskType: "",
//     taskDescription: "",
//   },
//   {
//     imageUrl: "",
//     taskTitle: "",
//     taskType: "",
//     taskDescription: "",
//   },
//   {
//     imageUrl: "",
//     taskTitle: "",
//     taskType: "",
//     taskDescription: "",
//   },
// ],

// };

const state = {
  taskList: [],
};

//Dom operation
const taskContents = document.querySelector("task_contents");
const taskModal = document.querySelector("task_modal_body");

// console.log(taskContents);
// console.log("taskModal");

// template for the card on screen
const htmlTaskcontent = ({ id, title, description, type, url }) => `
<div class='col-md-6 col-lg-4 mt-3' id=${id}>
  <div class='card shadow-sm task_card'>
    <div class="card-header d-flex justify-content-end task_card_header'>
      <button type='button' class="btn btn-outline-primary mr-1.5" name="${id}>
        <i class="fas fa-pencil-alt name="${id}"></i>
      </button>
       <button type='button' class="btn btn-outline-danger mr-1.5" name="${id}>
        <i class="fas fa-trash-alt name="${id}"></i>
      </button>
    </div>
    <div class="card-body">
      ${
        url &&
        `<img width="100%" src="${url} alt="card image" class="card-img-top md-3 rounded-lg"/>`
      }
      <h4 class="card-title task_card_title>${title}</h4>
      <p class="description trim-3-lines text-muted">${description}</p>
    </div>
  </div>
</div>
`;
