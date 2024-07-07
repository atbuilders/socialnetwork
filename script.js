<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Toggle search bar visibility
        document.querySelector('.search_bar i').addEventListener('click', function() {
            var searchBar = document.querySelector('.search_bar input');
            searchBar.classList.toggle('active');
        });

        // Toggle dark mode
        document.querySelector('.fa-solid.fa-moon').addEventListener('click', function() {
            var body = document.querySelector('body');
            body.classList.toggle('dark-mode');
        });

        // Load more posts
        document.querySelector('.loard button').addEventListener('click', function() {
            // Simulate loading more posts (replace with actual logic)
            alert('Loading more posts...');
            // For example, you can append more posts dynamically
            var mainContent = document.querySelector('.main .center');
            mainContent.innerHTML += `
                <div class="friends_post">
                    <p>New Post Loaded Here</p>
                </div>
            `;
        });
    });
</script>
