
let itemCount = 0;

function addItem() {
  itemCount++;
  const container = document.getElementById('items-container');

  const itemBlock = document.createElement('div');
  itemBlock.className = 'item-block';
  itemBlock.innerHTML = `
    <h3>Item ${itemCount}</h3>
    <label>Item Name</label>
    <input type="text" name="item${itemCount}_name" required />

    <label>Description</label>
    <textarea name="item${itemCount}_description" rows="2"></textarea>

    <label>Specification</label>
    <textarea name="item${itemCount}_specification" rows="2"></textarea>

    <label>Upload Attachment (PDF)</label>
    <input type="file" name="item${itemCount}_attachment" accept="application/pdf" />

    <label>Quantity</label>
    <input type="number" name="item${itemCount}_quantity" />

    <label>Expected Delivery (Days)</label>
    <input type="number" name="item${itemCount}_delivery" />

    <label>Payment Terms</label>
    <input type="text" name="item${itemCount}_payment_terms" />

    <label>Freight</label>
    <input type="text" name="item${itemCount}_freight" />
  `;
  container.appendChild(itemBlock);
}

document.getElementById('requirementForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Requirement submitted successfully! (Backend integration pending)');
});

// Initialize with one item
window.onload = () => {
  addItem();
};
