const commentFormHandler = async (event) => {
    event.preventDefault();
    
    console.log('test');
    console.log(post_id);
    const commentText = document.querySelector('#comment-text').value;
    console.log(commentText);

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
            post_id: req.session.post_id,
            commentText,
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    document.location.reload();
};

document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);