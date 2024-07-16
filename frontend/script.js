document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetch-products').addEventListener('click', function() {
        fetch('http://104.197.40.85:5001/products')
            .then(response => response.json())
            .then(data => {
                const productsDiv = document.getElementById('products');
                productsDiv.innerHTML = JSON.stringify(data, null, 2);
            });
    });

    document.getElementById('fetch-orders').addEventListener('click', function() {
        fetch('http://104.197.40.85:5002/orders')
            .then(response => response.json())
            .then(data => {
                const ordersDiv = document.getElementById('orders');
                ordersDiv.innerHTML = JSON.stringify(data, null, 2);
            });
    });

    document.getElementById('fetch-users').addEventListener('click', function() {
        fetch('http://104.197.40.85:5003/users')
            .then(response => response.json())
            .then(data => {
                const usersDiv = document.getElementById('users');
                usersDiv.innerHTML = JSON.stringify(data, null, 2);
            });
    });
});
