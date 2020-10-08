const submitForm = document.querySelector('form');





submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = new FormData(submitForm);
    const id = input.get('id');
    const name = input.get('name');
    const crafter = input.get('crafter');
    const image = input.get('image');
    const description = input.get('description');
    const price = input.get(price);

    const newItem = {

        id: id,
        name: name,
        crafter: crafter,
        image: image,
        description: description,
        price: price,
    };

    






})