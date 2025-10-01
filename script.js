// Mobile Menu Toggle
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Blog Loader
const blogContainer = document.getElementById("blog-container");
if(blogContainer){
  fetch("posts.json")
    .then(res => res.json())
    .then(posts => {
      posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("blog-post");
        div.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <a href="${post.link}">Read More →</a>
        `;
        blogContainer.appendChild(div);
      });
    });
}
