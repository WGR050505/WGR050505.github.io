var posts=["2024/12/11/hello-world/","2024/12/13/CBbse/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };