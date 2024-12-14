var posts=["2024/12/13/CBbse/","2024/12/14/浏览器的开发者工具/","2024/12/11/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };