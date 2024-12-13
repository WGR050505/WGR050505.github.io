var posts=["2024/12/11/hello-world/","2024/12/12/C Base/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };