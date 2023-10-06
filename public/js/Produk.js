const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Cleanser', price: 200000, image: 'IMG/CLEANSER.jpg' },
                { name: 'Serum', price: 350000, image: 'IMG/SERUM.jpg' },
                { name: 'Moisturizer', price: 300000, image:'img/MOISTORAIZER.jpg' },
                { name: 'Sunscreen', price: 280000, image: 'IMG/SUNSCREEN.jpg' },
                { name: 'Face Mask', price: 100000, image: 'IMG/FACE MASK.jpg' },
                { name: 'Eye Cream', price: 250000, image: 'IMG/AYE CREAM.jpg' },
            ],
            cart: [],
            wallet: '',
            addWallet: [
                { amount: 100000 },
                { amount: 200000 },
                { amount: 500000 },
                { amount: 1000000 },
                { amount: 2000000 },
                { amount: 5000000 },
                { amount: 10000000 },
            ]
        };
    },
    methods: {
        clearCart() {
            // Mengosongkan keranjang dengan menghapus semua item di dalamnya
            this.cart = [];
        },
        
        addToCart(product, isDuplicate = false) {
            const existingItem = this.cart.find(item => item.name === product.name);
        

            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ name: product.name, price: product.price, quantity: 1, image: product.image });
            }
        
        },
        formatNumber(number) {
            return number.toLocaleString('id-ID');
        },
        addAmount(amount) {
            this.wallet = (parseFloat(this.wallet || 0) + amount);
        },
        removeFromCart(index) {
            const item = this.cart[index];

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                // hapus jika sisa 1
                this.cart.splice(index, 1);
            } 
        },
        getTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        resetWallet() {
            // Reset nilai wallet menjadi 0
            this.wallet = '0';
        }
    }
});

app.mount('#app');