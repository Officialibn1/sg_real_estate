export default function formatCurrency(price) {
    // Convert price to a number if it's a string
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;

    // Format the price with commas
    return numericPrice.toLocaleString('en-US', { style: 'currency', currency: 'NGN' });
}