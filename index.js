const arr = [
  {
    title: "post one",
    body: "body of post one",
    timestamp: new Date().getSeconds(),
  },
  {
    title: "post two",
    body: "body of post two",
    timestamp: new Date().getSeconds(),
  },
  {
    title: "post three",
    body: "body of post three",
    timestamp: new Date().getSeconds(),
  },
];

function getpost() {
  setTimeout(() => {
    let inner = "";
    console.log(arr.length);
    if (arr.length > 0) {
      arr.forEach((post) => {
        inner += `<li>${post.title} created  ${
          new Date().getSeconds() - post.timestamp
        } secoends ago</li>`;
        document.body.innerHTML = inner;
      });
    } else {
      document.body.innerHTML = inner;
    }
  }, 0);
}
let timer = 0;
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      timer += 1000;
      arr.push({ ...post, timestamp: new Date().getSeconds() });
      console.log("created at ", new Date());
      console.log(arr);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("error");
      }
    }, 0);
  });
}
const post = {
  title: "post four",
  body: "body of post four",
};
function updatePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("updated at", new Date());
      resolve();
    }, 2000);
  });
}

/*createPost(post)
  .then(getpost)
  .catch((err) => console.log(err));*/

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let ele = arr.pop();
      console.log(arr);
      if (ele) {
        resolve();
      } else {
        clearInterval(id);

        reject("error");
      }
    }, 1000);
  });
}
/*let id = setInterval(() => {
  deletePost()
    .then(getpost)
    .catch((err) => {
      console.log(err);
    });

}, 1000);*/
Promise.all([createPost(post), updatePost(), deletePost()]).then((msg) => {});
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hi");
  }, 2000);
});
const promise2 = 444;
const promise3 = Promise.resolve("hello");
Promise.all([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
