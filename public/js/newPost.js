const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;
    const postId = document.querySelector('#post-id').value;

    console.log(title);
    console.log(content);
    console.log(postId);

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json'}
    });

    document.location.replace('/dashboard');
    // if (response.ok) {
    //     document.location.replace('/dashboard');
    // } else {
    //     alert(response.statusText);
    // }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);