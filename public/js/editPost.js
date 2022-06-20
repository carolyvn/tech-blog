const editFormHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('#post-id').value;
    console.log(id);

    const title = document.querySelector('#edit-title').value;
    const content = document.querySelector('#edit-content').value;

    console.log(title);
    console.log(content);

    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id, 
            title, 
            content,
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to edit your post');
    }
    document.location.replace('/dashboard');

};

document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editFormHandler);


