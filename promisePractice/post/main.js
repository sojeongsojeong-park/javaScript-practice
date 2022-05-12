function parsingPostIds(post){
  return new Promise((resolve,reject) =>{
      const postIds = [];
      post.map(post =>{
      postIds.push(post.id);
    })
    resolve(postIds);
    console.log(postIds)
  })
}

// function parsingData(data){
//   return new Promise((resolve, reject) => {
//     const page = []
//     data.map( data => {
//         const newPage = {
//         title:data.title,
//         text : data.body
//       }
//       page.push(newPage);
//       })
//   })
// }
function displayPost(postIds){
  return new Promise((resolve,reject) =>{
    let html = `<h2>${postIds.title}</h2>`
    html += `<p>${postIds.body}</p>`
    document.getElementById("post").innerHTML = html;

    resolve();
  })
}


function displayBtns(posts){
  posts.map(postid => {
    let html = `<button onclick="getPost(${postid})">${postid}</button>`
    document.getElementById("button").innerHTML += html;
  });  
}

function getPost(postid){
  fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
  .then(response => response.json())
  .then(displayPost)
  .catch(err => console.log(err));

}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(parsingPostIds)
  .then(displayBtns)