const posts = [
    {title:'one',body:'one'},
    {title:'two',body:'two'}
];

const sharp = async()=>{

    const updateLastUserActivityTime = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(Date())
        },1000)
    })

    const createPost = new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push('post');
            console.log('post create')   
            resolve(updateLastUserActivityTime)

        },2000)
    })

    const pos = new Promise((resolve, reject) => {
        let arr = []
        posts.forEach((post)=>{
            
            arr.push(post)
        })
        resolve(arr)
    })

    const deletew = new Promise((resolve, reject) => {
        let po = posts.pop()
        resolve(po.title);
    })

    let time = await updateLastUserActivityTime;
    console.log(time)
    let update = await createPost;
    console.log(update)

    let post = await pos;
    console.log(post)

    let dele = await deletew;
    console.log(dele)

    let post1 = await pos;
    console.log(post1)


    return updateLastUserActivityTime
}

sharp().then((n) => console.log(n))