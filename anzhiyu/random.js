var posts=["2024/12/12/C语言入门基础知识-完整版/","2024/12/11/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };