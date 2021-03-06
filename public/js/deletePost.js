const deleteFormHandler = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ post_id: id }),
    });

    document.location.replace('/dashboard');
};

document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteFormHandler);