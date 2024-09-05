document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productIdInput = document.getElementById('product-id');
    const productNameInput = document.getElementById('product-name');
    const productPriceInput = document.getElementById('product-price');
    const productImageInput = document.getElementById('product-image');
    const productCategoryInput = document.getElementById('product-category');
    const productDescriptionInput = document.getElementById('product-description');
    const productTable = document.getElementById('product-list').getElementsByTagName('tbody')[0];

    function renderProducts() {
        fetch('get-products.php')
            .then(response => response.json())
            .then(data => {
                productTable.innerHTML = '';
                data.forEach(product => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${product.name}</td>
                        <td>${product.price} บาท</td>
                        <td>${product.category}</td>
                        <td>${product.description}</td>
                        <td>
                            <button class="edit-button" data-id="${product.id}">แก้ไข</button>
                            <button class="delete-button" data-id="${product.id}">ลบ</button>
                        </td>
                    `;
                    productTable.appendChild(row);
                });

                document.querySelectorAll('.edit-button').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const productId = event.target.getAttribute('data-id');
                        fetch(`get-product.php?id=${productId}`)
                            .then(response => response.json())
                            .then(product => {
                                productIdInput.value = product.id;
                                productNameInput.value = product.name;
                                productPriceInput.value = product.price;
                                productImageInput.value = product.image;
                                productCategoryInput.value = product.category;
                                productDescriptionInput.value = product.description;
                            });
                    });
                });

                document.querySelectorAll('.delete-button').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const productId = event.target.getAttribute('data-id');
                        fetch('delete-product.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                            body: new URLSearchParams({ product_id: productId }),
                        })
                            .then(response => response.text())
                            .then(result => {
                                if (result === 'สำเร็จ') {
                                    renderProducts();
                                } else {
                                    alert('เกิดข้อผิดพลาด');
                                }
                            });
                    });
                });
            });
    }

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(productForm);
        fetch('add-product.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.text())
            .then(result => {
                if (result === 'สำเร็จ') {
                    productForm.reset();
                    renderProducts();
                } else {
                    alert('เกิดข้อผิดพลาด');
                }
            });
    });

    renderProducts();
});
