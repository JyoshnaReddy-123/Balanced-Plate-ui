
        // Tab functionality
        function showTab(tabId) {
          
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
          
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            
            document.getElementById(tabId).classList.add('active');
            
           
            const clickedBtn = [...document.querySelectorAll('.tab-btn')].find(btn => 
                btn.textContent.toLowerCase().includes(tabId)
            );
            if (clickedBtn) clickedBtn.classList.add('active');
        }
        
        // Toast notifications

function showToast() {
    const toast = document.getElementById("toast");
    toast.style.display = "block";
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    
    setTimeout(() => {
        hideToast();
    }, 4000);
}

function hideToast() {
    const toast = document.getElementById("toast");
    toast.classList.remove("show");
    setTimeout(() => {
        toast.style.display = "none";
    }, 300);
}

function showAddToast() {
    const toast = document.getElementById("add-toast");
    toast.style.display = "block";
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    
    setTimeout(() => {
        hideAddToast();
    }, 4000);
}

function hideAddToast() {
    const toast = document.getElementById("add-toast");
    toast.classList.remove("show");
    setTimeout(() => {
        toast.style.display = "none";
    }, 300);
}

function showLikeToast() {
    const toast = document.getElementById("like-toast");
    toast.style.display = "block";
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    
    setTimeout(() => {
        hideLikeToast();
    }, 4000);
}

function hideLikeToast() {
    const toast = document.getElementById("like-toast");
    toast.classList.remove("show");
    setTimeout(() => {
        toast.style.display = "none";
    }, 300);
}

function showCommentToast() {
    const toast = document.getElementById("comment-toast");
    toast.style.display = "block";
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    
    setTimeout(() => {
        hideCommentToast();
    }, 4000);
}

function hideCommentToast() {
    const toast = document.getElementById("comment-toast");
    toast.classList.remove("show");
    setTimeout(() => {
        toast.style.display = "none";
    }, 300);
}

function showShareToast() {
    const toast = document.getElementById("share-toast");
    toast.style.display = "block";
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    
    setTimeout(() => {
        hideShareToast();
    }, 4000);
}

function hideShareToast() {
    const toast = document.getElementById("share-toast");
    toast.classList.remove("show");
    setTimeout(() => {
        toast.style.display = "none";
    }, 300);
}

// Update your likePost function
function likePost(el) {
    const countSpan = el.querySelector(".like-count");
    let current = parseInt(countSpan.textContent) || 0;
    
    if (el.classList.contains("liked")) {
        countSpan.textContent = current - 1;
        el.classList.remove("liked");
        el.innerHTML = '♡ <span class="like-count">' + (current - 1) + '</span>';
    } else {
        countSpan.textContent = current + 1;
        el.classList.add("liked");
        el.innerHTML = '♥ <span class="like-count">' + (current + 1) + '</span>';
        showLikeToast();
    }
}


function commentFeature() {
    showCommentToast();
}

function sharePost() {
    showShareToast();
}

        // Bookmark functionality
       // Bookmark functionality
function toggleBookmark(btn) {
    btn.classList.toggle('filled');
    btn.textContent = btn.classList.contains('filled') ? '★' : '☆';
    
   
    const card = btn.closest(".post-card");
    
    
    if (!card.id) {
        card.id = 'post-' + Math.random().toString(36).substr(2, 9);
    }
    
    
    const postData = {
        id: card.id,
        user: card.querySelector(".post-user strong").textContent,
        username: card.querySelector(".post-user span").textContent,
        content: card.querySelector(".post-content p").textContent,
        tags: card.querySelector(".post-content .tags").textContent,
        imageSrc: card.querySelector(".post-image").src,
        ingredients: card.querySelector(".ingredients").innerHTML,
        likes: card.querySelector(".like-count").textContent,
        comments: card.querySelector(".comment-count").textContent
    };
    
    
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || {};
    
    if (btn.classList.contains('filled')) {
        
        bookmarks[card.id] = postData;
        showToastMessage('Post bookmarked!');
    } else {
       
        delete bookmarks[card.id];
        showToastMessage('Bookmark removed');
    }
    
    
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
        
      
        // Helper function to show temporary messages
        function showToastMessage(message) {
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.backgroundColor = '#333';
            toast.style.color = 'white';
            toast.style.padding = '12px 24px';
            toast.style.borderRadius = '4px';
            toast.style.zIndex = '1000';
            toast.style.animation = 'fadeIn 0.3s';
            toast.textContent = message;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'fadeOut 0.3s';
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 2000);
        }
        


// Toast notification system
function showToast(title, message) {
    const toast = document.getElementById("toast");
    const toastTitle = document.getElementById("toast-title");
    const toastMessage = document.getElementById("toast-message");
    
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    
    toast.style.display = "block";
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);
    
    setTimeout(() => {
        hideToast();
    }, 4000);
}

function hideToast() {
    const toast = document.getElementById("toast");
    toast.classList.remove("show");
    setTimeout(() => {
        toast.style.display = "none";
    }, 300);
}

function loadMorePosts() {
   
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `
        <strong>Loading more posts</strong>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        <br/>
        More community posts will be loaded in the next update
    `;
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function showUploadToast() {
    showToast("Upload coming soon!", "You'll be able to share your own balanced plates in the next update.");
}



function showAddToast() {
    showToast("Plate selected!", "This balanced meal has been added to your plate");
}

function likePost(el) {
    const countSpan = el.querySelector(".like-count");
    let current = parseInt(countSpan.textContent) || 0;
    
    if (el.classList.contains("liked")) {
        countSpan.textContent = current - 1;
        el.classList.remove("liked");
        el.innerHTML = '♡ <span class="like-count">' + (current - 1) + '</span>';
    } else {
        countSpan.textContent = current + 1;
        el.classList.add("liked");
        el.innerHTML = '♥ <span class="like-count">' + (current + 1) + '</span>';
        showToast("Post liked!", "You've liked this community post");
    }
}


function commentFeature() {
    showToast("Comments feature", "Comments will be available in the next update!");
}


function sharePost() {
    showToast("Sharing post", "You're sharing this balanced plate with your friends");
}


function loadMorePosts() {
    showToast("Loading more posts", "More community posts will be loaded in the next update");
}


        
 
