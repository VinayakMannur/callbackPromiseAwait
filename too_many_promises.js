const posts = [{title: 'POST1'}];

// function printPost() {
//     posts.forEach((post) => {
//         console.log(post.title)
//     })
// }

const promise1 = new Promise((resolve,reject)=>{
    posts.forEach((post) => {
        // console.log(post.title)
        resolve(post.title);
    })
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout( () => {
        posts.push({title: 'POST3'});
        resolve();
    }, 1000)
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout( () => {
        if(posts.length > 0){
            const poppedElement  = posts.pop();
            // console.log(poppedElement)
            resolve(poppedElement);
        } else {
            reject("ERROR: ARRAY IS EMPTY")
        }
    }, 1000)
})

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const date = Date();
        // console.log(date)
        resolve(date);
    },1000);
})

// function createPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             const date = updateLastUserActivityTime();
//             resolve(date);
//         }, 1000)
//     }) 
// }

// function deletePost(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(posts.length > 0){
//                 const poppedElement  = posts.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })
// }

// function updateLastUserActivityTime(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const date = console.log(Date())
//             resolve(date);
//         },1000);
//     })
// }

Promise.all([promise2,promise4,promise1,promise3,promise4]).then(values=>console.log(values))

// console.log(Date())