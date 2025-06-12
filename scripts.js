 document.addEventListener('DOMContentLoaded', () => {
            // Restore bookmark states on page load
            document.querySelectorAll('.post-card').forEach(postCard => {
                const postId = postCard.dataset.postId;
                if (localStorage.getItem(`bookmarked_${postId}`) === 'true') {
                    const bookmarkBtn = postCard.querySelector('.bookmark-btn');
                    if (bookmarkBtn) {
                        bookmarkBtn.classList.add('filled');
                        bookmarkBtn.innerHTML = '★'; // Filled star
                    }
                }
            });
        });

        function showTab(tabId) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Deactivate all tab buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Show the selected tab content
            document.getElementById(tabId).classList.add('active');

            // Activate the clicked tab button
            document.querySelector(`.tab-btn[onclick="showTab('${tabId}')"]`).classList.add('active');
        }

        // --- Toast functions ---
        function showToast(title, message) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-title').innerText = title;
            document.getElementById('toast-message').innerText = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000); // Hide after 3 seconds
        }

        function hideToast() {
            document.getElementById('toast').classList.remove('show');
        }

        function showUploadToast() {
            showToast('Upload Feature', 'The upload feature will be available soon!');
        }

        function showAddToast() {
            showToast('Plate Selected!', 'This balanced meal has been added to your plate.');
        }

        function commentFeature() {
            showToast('Comments Feature', 'Comments will be available in the next update!');
        }

        function sharePost() {
            showToast('Sharing Post', "You're sharing this balanced plate with your friends!");
        }

        function likePost(button) {
            const likeCountSpan = button.querySelector('.like-count');
            const heartIcon = button.querySelector('.heart-icon'); // Get the heart icon element
            let currentLikes = parseInt(likeCountSpan.innerText);

            if (button.classList.contains('liked')) {
                // Unlike
                button.classList.remove('liked');
                heartIcon.innerText = '♡'; // Change to empty heart
                likeCountSpan.innerText = currentLikes - 1;
                showToast('Unliked!', 'You have unliked this post.');
            } else {
                // Like
                button.classList.add('liked');
                heartIcon.innerText = '♥'; // Change to filled heart
                likeCountSpan.innerText = currentLikes + 1;
                showToast('Liked!', 'You have liked this post!');
            }
        }

        function toggleBookmark(button) {
            const postCard = button.closest('.post-card');
            const postId = postCard.dataset.postId;
            const postContent = {
                id: postId,
                avatarSrc: postCard.querySelector('.avatar').src,
                userName: postCard.querySelector('.post-user strong').innerText,
                userHandle: postCard.querySelector('.post-user span').innerText,
                text: postCard.querySelector('.post-content p:first-of-type').innerText,
                tags: postCard.querySelector('.tags').innerText,
                imageSrc: postCard.querySelector('.post-image').src,
                ingredients: Array.from(postCard.querySelectorAll('.ingredients .tag')).map(tag => tag.innerText),
                likes: parseInt(postCard.querySelector('.like-count').innerText),
                comments: parseInt(postCard.querySelector('.comment-count').innerText)
            };

            if (button.classList.contains('filled')) {
                // Unbookmark
                button.classList.remove('filled');
                button.innerHTML = '☆'; // Empty star
                localStorage.removeItem(`bookmarked_${postId}`);
                showToast('Bookmark Removed', 'This post has been removed from your bookmarks.');
            } else {
                // Bookmark
                button.classList.add('filled');
                button.innerHTML = '★'; // Filled star
                localStorage.setItem(`bookmarked_${postId}`, 'true');
                localStorage.setItem(`post_${postId}`, JSON.stringify(postContent)); // Store the entire post data
                showToast('Bookmarked!', 'This post has been added to your bookmarks.');
            }
        }

        function loadMorePosts() {
            // In a real application, you'd fetch more posts from a server here.
            // For this example, we'll just show a toast.
            showToast('No More Posts', 'You have reached the end of the trending posts!');
        }
