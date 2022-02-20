const posts = [
    {title: "Post One", body: "This is post 1"},
    {title: "Post Two", body: "This is post 2"}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const err = false;

            if (!err) {
                resolve()
            } else {
                reject("Error: Could not resolve Promise")
            }

        }, 2000);
    });

}

// async await

async function init(){
    await createPost({title: "Post Four", body: "This is Post Four"});
    getPosts()
}

init();

// async await with fetch
async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)

}

fetchUsers()

// call functions

createPost({title: "Post Three", body: "This is Post Three"})
    .then(getPosts)
    .catch(err => console.log(err));

// Promise.all

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise(((resolve, reject) => {
    setTimeout(resolve, 5000, "Goodbye");
}));

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {console.log(values)})


