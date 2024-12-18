var posts=["2024/12/13/CBbse/","2024/12/14/浏览器的开发者工具/","2024/12/16/Bash介绍/","2024/12/11/hello-world/","2024/12/18/力扣12-17每日一题/","2024/12/16/Javascript基础入门教程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };