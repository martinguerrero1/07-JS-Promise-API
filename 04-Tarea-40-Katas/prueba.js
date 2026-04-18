async function topCincoPosts() {
   const responseApiPost = await fetch("https://jsonplaceholder.typicode.com/posts");
   const dataApiPost = await responseApiPost.json();


   const topCincoPosts = dataApiPost.filter(post => post.id <= 5);
   topCincoPosts.forEach(post => {
      console.log(`ID: ${post.id} \nTitle: ${post.title}
            `)
   });
}

topCincoPosts();