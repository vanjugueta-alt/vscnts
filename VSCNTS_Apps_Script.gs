const SPREADSHEET_ID = "1FUBlwQ4Osxow4-Ne-hQnjviQybcIOdD0F3XvWPapI80";

function setupSheets() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let orders = ss.getSheetByName("ORDERS");
  if (!orders) orders = ss.insertSheet("ORDERS");
  if (orders.getLastRow() === 0) {
    orders.appendRow([
      "Order Ref", "Date/Time", "Name", "Contact Number", "Complete Address",
      "Province", "City", "Barangay", "House Number", "Shipping", "Shipping Fee",
      "Order Total", "Grand Total", "Payment Status", "Order Status"
    ]);
  }

  let items = ss.getSheetByName("ORDER ITEMS");
  if (!items) items = ss.insertSheet("ORDER ITEMS");
  if (items.getLastRow() === 0) {
    items.appendRow([
      "Order Ref", "VSCNTS Scent", "OG Scent", "Category", "Size",
      "Quantity", "Unit Price", "Subtotal"
    ]);
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ok:true, service:"VSCNTS Order Database"}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const raw = e && e.parameter && e.parameter.payload;
    if (!raw) throw new Error("Missing order payload.");
    const body = JSON.parse(raw);
    if (body.action !== "createOrder" || !body.order) throw new Error("Invalid order request.");

    const order = body.order;
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const orders = ss.getSheetByName("ORDERS");
    const items = ss.getSheetByName("ORDER ITEMS");
    if (!orders || !items) throw new Error("Database sheets are missing. Run setupSheets first.");

    const ref = String(order.reference || ("VSC-" + Date.now().toString(36).toUpperCase().slice(-8)));
    const customer = order.customer || {};
    const shipping = order.shipping || {};
    const scentTotal = Number(order.scentTotal || 0);
    const shippingFee = Number(shipping.fee || 0);
    const grandTotal = Number(order.total || (scentTotal + shippingFee));

    orders.appendRow([
      ref,
      new Date(),
      customer.name || "",
      customer.phone || "",
      customer.address || "",
      customer.province || "",
      customer.city || "",
      customer.barangay || "",
      customer.houseNumber || "",
      shipping.method || "Lalamove",
      shippingFee,
      scentTotal,
      grandTotal,
      "UNPAID",
      "PENDING VERIFICATION"
    ]);

    (order.items || []).forEach(function(item) {
      const qty = Number(item.qty || 0);
      const unitPrice = Number(item.unitPrice || 0);
      items.appendRow([
        ref,
        item.name || "",
        item.og || "",
        item.category || "",
        item.size || "",
        qty,
        unitPrice,
        qty * unitPrice
      ]);
    });

    return ContentService.createTextOutput(JSON.stringify({ok:true, orderRef:ref}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err.message || err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
