const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#edit-title').value.trim();
    const content = document.querySelector('#edit-content').value.trim();
    console.log(title);
    console.log(content);

    const response = await fetch(`/api/post/${id}`, {
        methond: 'POST',
        body: JSON.stringify({ title, content }),
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
  .querySelector()
  .addEventListener('submit', editFormHandler);

