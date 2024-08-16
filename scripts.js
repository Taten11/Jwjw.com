// Handle admin panel access
if (document.getElementById('admin-login-form')) {
    document.getElementById('admin-login-form').onsubmit = function(event) {
        event.preventDefault();
        const adminPassword = document.getElementById('admin-password').value;

        if (adminPassword === '123143') {
            document.getElementById('admin-main').innerHTML = `
                <h2>Add Product</h2>
                <form id="product-form">
                    <label for="product-name">Product Name:</label>
                    <input type="text" id="product-name" required>
            
                    <label for="product-price">Price:</label>
                    <input type="number" id="product-price" required>
            
                    <label for="product-image">Image URL:</label>
                    <input type="text" id="product-image" required>
            
                    <button type="submit">Add Product</button>
                </form>
            
                <h2>Manage Products</h2>
                <div id="admin-product-list">
                    <!-- Admin product management list will be displayed here -->
                </div>
            `;
            renderAdminProducts();
        } else {
            alert('Invalid admin password.');
        }
    };
}
