document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile nav
    const nav = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
  
    nav.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  
    // Back to top
    const backToTop = document.createElement("button");
    backToTop.innerText = "⬆";
    backToTop.id = "backToTop";
    backToTop.style = "position:fixed;bottom:20px;right:20px;padding:10px;display:none;z-index:1000;";
    document.body.appendChild(backToTop);
  
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
  
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Simple form validation
    document.querySelectorAll("form").forEach(form => {
      form.addEventListener("submit", (e) => {
        const inputs = form.querySelectorAll("input[required], textarea[required]");
        let valid = true;
        inputs.forEach(input => {
          if (!input.value.trim()) {
            valid = false;
            input.style.border = "1px solid red";
          } else {
            input.style.border = "1px solid #ccc";
          }
        });
        if (!valid) {
          e.preventDefault();
          alert("Please fill in all required fields.");
        }
      });
    });
  });
  
  const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keyup', function() {
    const query = searchInput.value.toLowerCase();
    const blogPosts = document.querySelectorAll('.blog-post');
    
    blogPosts.forEach(post => {
      const title = post.querySelector('.post-title').textContent.toLowerCase();
      const destination = post.querySelector('.post-destination').textContent.toLowerCase();
      if (title.includes(query) || destination.includes(query)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
}

