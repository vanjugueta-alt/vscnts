const SPREADSHEET_ID = "1FUBlwQ4Osxow4-Ne-hQnjviQybcIOdD0F3XvWPapI80";

const STOCK_TEMPLATE = [
  ["Not Your Ordinary", "MEN", "55", 0, "ACTIVE"],
  ["Not Your Ordinary", "MEN", "100", 0, "ACTIVE"],
  ["BLUE ICE", "MEN", "55", 0, "ACTIVE"],
  ["BLUE ICE", "MEN", "100", 0, "ACTIVE"],
  ["T@lisman", "MEN", "55", 0, "ACTIVE"],
  ["T@lisman", "MEN", "100", 0, "ACTIVE"],
  ["Rebellion", "MEN", "55", 0, "ACTIVE"],
  ["Rebellion", "MEN", "100", 0, "ACTIVE"],
  ["Valentine", "MEN", "55", 0, "ACTIVE"],
  ["Valentine", "MEN", "100", 0, "ACTIVE"],
  ["FIREPLACE", "MEN", "55", 0, "ACTIVE"],
  ["FIREPLACE", "MEN", "100", 0, "ACTIVE"],
  ["Erva", "MEN", "55", 0, "ACTIVE"],
  ["Erva", "MEN", "100", 0, "ACTIVE"],
  ["ELECTRIQUE", "MEN", "55", 0, "ACTIVE"],
  ["ELECTRIQUE", "MEN", "100", 0, "ACTIVE"],
  ["Aurora", "MEN", "55", 0, "ACTIVE"],
  ["Aurora", "MEN", "100", 0, "ACTIVE"],
  ["Ultra M@le", "MEN", "55", 0, "ACTIVE"],
  ["Ultra M@le", "MEN", "100", 0, "ACTIVE"],
  ["Elixir", "MEN", "55", 0, "ACTIVE"],
  ["Elixir", "MEN", "100", 0, "ACTIVE"],
  ["Fire", "MEN", "55", 0, "ACTIVE"],
  ["Fire", "MEN", "100", 0, "ACTIVE"],
  ["Wanted", "MEN", "55", 0, "ACTIVE"],
  ["Wanted", "MEN", "100", 0, "ACTIVE"],
  ["Blue Poison", "MEN", "55", 0, "ACTIVE"],
  ["Blue Poison", "MEN", "100", 0, "ACTIVE"],
  ["Rouge", "MEN", "55", 0, "ACTIVE"],
  ["Rouge", "MEN", "100", 0, "ACTIVE"],
  ["Ecl@t", "MEN", "55", 0, "ACTIVE"],
  ["Ecl@t", "MEN", "100", 0, "ACTIVE"],
  ["Sven", "MEN", "55", 0, "ACTIVE"],
  ["Sven", "MEN", "100", 0, "ACTIVE"],
  ["Poseidon", "MEN", "55", 0, "ACTIVE"],
  ["Poseidon", "MEN", "100", 0, "ACTIVE"],
  ["Suit 67", "MEN", "55", 0, "ACTIVE"],
  ["Suit 67", "MEN", "100", 0, "ACTIVE"],
  ["Imagine", "UNISEX", "55", 0, "ACTIVE"],
  ["Imagine", "UNISEX", "100", 0, "ACTIVE"],
  ["PM Vibes", "UNISEX", "55", 0, "ACTIVE"],
  ["PM Vibes", "UNISEX", "100", 0, "ACTIVE"],
  ["Symph", "UNISEX", "55", 0, "ACTIVE"],
  ["Symph", "UNISEX", "100", 0, "ACTIVE"],
  ["Silver", "UNISEX", "55", 0, "ACTIVE"],
  ["Silver", "UNISEX", "100", 0, "ACTIVE"],
  ["Gold", "UNISEX", "55", 0, "ACTIVE"],
  ["Gold", "UNISEX", "100", 0, "ACTIVE"],
  ["INFERNO", "UNISEX", "55", 0, "ACTIVE"],
  ["INFERNO", "UNISEX", "100", 0, "ACTIVE"],
  ["PAPYRÉ", "UNISEX", "55", 0, "ACTIVE"],
  ["PAPYRÉ", "UNISEX", "100", 0, "ACTIVE"],
  ["ETHEREAL", "UNISEX", "55", 0, "ACTIVE"],
  ["ETHEREAL", "UNISEX", "100", 0, "ACTIVE"],
  ["Dark Addiction", "UNISEX", "55", 0, "ACTIVE"],
  ["Dark Addiction", "UNISEX", "100", 0, "ACTIVE"],
  ["NEROLI", "UNISEX", "55", 0, "ACTIVE"],
  ["NEROLI", "UNISEX", "100", 0, "ACTIVE"],
  ["SMOKE No.7", "UNISEX", "55", 0, "ACTIVE"],
  ["SMOKE No.7", "UNISEX", "100", 0, "ACTIVE"],
  ["Player 540", "UNISEX", "55", 0, "ACTIVE"],
  ["Player 540", "UNISEX", "100", 0, "ACTIVE"],
  ["Sahara", "UNISEX", "55", 0, "ACTIVE"],
  ["Sahara", "UNISEX", "100", 0, "ACTIVE"],
  ["Blanc Musk", "UNISEX", "55", 0, "ACTIVE"],
  ["Blanc Musk", "UNISEX", "100", 0, "ACTIVE"],
  ["Ghost", "UNISEX", "55", 0, "ACTIVE"],
  ["Ghost", "UNISEX", "100", 0, "ACTIVE"],
  ["Aura XIII", "UNISEX", "55", 0, "ACTIVE"],
  ["Aura XIII", "UNISEX", "100", 0, "ACTIVE"],
  ["Sant@l 33", "UNISEX", "55", 0, "ACTIVE"],
  ["Sant@l 33", "UNISEX", "100", 0, "ACTIVE"],
  ["Woody sea", "UNISEX", "55", 0, "ACTIVE"],
  ["Woody sea", "UNISEX", "100", 0, "ACTIVE"],
  ["LAYA", "WOMEN", "50", 0, "ACTIVE"],
  ["LAYA", "WOMEN", "100", 0, "ACTIVE"],
  ["LAYA XCLUSIF", "WOMEN", "50", 0, "ACTIVE"],
  ["LAYA XCLUSIF", "WOMEN", "100", 0, "ACTIVE"],
  ["VELVET ROSE", "WOMEN", "50", 0, "ACTIVE"],
  ["VELVET ROSE", "WOMEN", "100", 0, "ACTIVE"],
  ["VELVET DESIRE", "WOMEN", "50", 0, "ACTIVE"],
  ["VELVET DESIRE", "WOMEN", "100", 0, "ACTIVE"],
  ["PURPLE CRYSTAL", "WOMEN", "50", 0, "ACTIVE"],
  ["PURPLE CRYSTAL", "WOMEN", "100", 0, "ACTIVE"],
  ["PRADOXE", "WOMEN", "50", 0, "ACTIVE"],
  ["PRADOXE", "WOMEN", "100", 0, "ACTIVE"],
  ["LIBRE", "WOMEN", "50", 0, "ACTIVE"],
  ["LIBRE", "WOMEN", "100", 0, "ACTIVE"],
  ["SCANDAL", "WOMEN", "50", 0, "ACTIVE"],
  ["SCANDAL", "WOMEN", "100", 0, "ACTIVE"],
  ["AMORE", "WOMEN", "50", 0, "ACTIVE"],
  ["AMORE", "WOMEN", "100", 0, "ACTIVE"],
  ["QUEEN", "WOMEN", "50", 0, "ACTIVE"],
  ["QUEEN", "WOMEN", "100", 0, "ACTIVE"],
  ["BOMB", "WOMEN", "50", 0, "ACTIVE"],
  ["BOMB", "WOMEN", "100", 0, "ACTIVE"],
  ["KISSES", "WOMEN", "50", 0, "ACTIVE"],
  ["KISSES", "WOMEN", "100", 0, "ACTIVE"],
  ["ECLAIRE", "WOMEN", "50", 0, "ACTIVE"],
  ["ECLAIRE", "WOMEN", "100", 0, "ACTIVE"],
  ["CANDY 42", "WOMEN", "50", 0, "ACTIVE"],
  ["CANDY 42", "WOMEN", "100", 0, "ACTIVE"],
  ["PISTACHE 33", "WOMEN", "50", 0, "ACTIVE"],
  ["PISTACHE 33", "WOMEN", "100", 0, "ACTIVE"],
  ["Av3ntus x S@ntal 33", "EMPEROR SERIES", "50", 0, "ACTIVE"],
  ["Av3ntus x GOF", "EMPEROR SERIES", "50", 0, "ACTIVE"],
  ["Av3ntus x GFS", "EMPEROR SERIES", "50", 0, "ACTIVE"],
  ["Aventus x Another 13", "EMPEROR SERIES", "50", 0, "ACTIVE"],
  ["Aventus x Mojave Ghost", "EMPEROR SERIES", "50", 0, "ACTIVE"],
  ["Silver x CANNA", "CANNABIS SERIES", "50", 0, "ACTIVE"],
  ["Aventus x CANNA", "CANNABIS SERIES", "50", 0, "ACTIVE"],
  ["Talisman x CANNA", "CANNABIS SERIES", "50", 0, "ACTIVE"]
];

function setupSheets() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let orders = ss.getSheetByName("ORDERS");
  if (!orders) orders = ss.insertSheet("ORDERS");
  if (orders.getLastRow() === 0) {
    orders.appendRow([
      "Order Ref", "Date/Time", "Name", "Contact Number", "Complete Address",
      "Province", "City", "Barangay", "House Number", "Scent Orders", "Shipping", "Shipping Fee",
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

  let stock = ss.getSheetByName("STOCK") || ss.getSheetByName("STOCKS");
  if (!stock) stock = ss.insertSheet("STOCK");
  if (stock.getLastRow() === 0) {
    stock.appendRow(["Scent Name", "Category", "Size", "Stock", "Status"]);
    stock.getRange(2,1,STOCK_TEMPLATE.length,5).setValues(STOCK_TEMPLATE);
    stock.setFrozenRows(1);
    stock.getRange(1,1,1,5).setFontWeight("bold");
  }
}

function doGet(e) {
  const action = e && e.parameter && e.parameter.action;
  if (action === "getStock") return getStockResponse(e);
  return ContentService.createTextOutput(JSON.stringify({ok:true, service:"VSCNTS Order Database"}))
    .setMimeType(ContentService.MimeType.JSON);
}

function getStockResponse(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("STOCK") || ss.getSheetByName("STOCKS");
  const rows = [];
  if (sheet && sheet.getLastRow() > 1) {
    const values = sheet.getRange(2,1,sheet.getLastRow()-1,5).getValues();
    values.forEach(function(r) {
      if (r[0] && r[2] !== "") rows.push({name:String(r[0]), category:String(r[1]||""), size:String(r[2]), stock:Number(r[3]||0), status:String(r[4]||"")});
    });
  }
  const payload = {ok:true, stock:rows};
  const callback = e && e.parameter && e.parameter.callback;
  if (callback && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(callback)) {
    return ContentService.createTextOutput(callback+"("+JSON.stringify(payload)+");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
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
      ref, new Date(), customer.name || "", customer.phone || "", customer.address || "",
      customer.province || "", customer.city || "", customer.barangay || "", customer.houseNumber || "",
      (order.items || []).map(function(i) { return (i.name||"")+" "+(i.size||"")+"ML x"+(i.qty||0); }).join(" | "),
      shipping.method || "Lalamove", shippingFee, scentTotal, grandTotal, "UNPAID", "PENDING VERIFICATION"
    ]);

    (order.items || []).forEach(function(item) {
      const qty = Number(item.qty || 0);
      const unitPrice = Number(item.unitPrice || 0);
      items.appendRow([ref,item.name||"",item.og||"",item.category||"",item.size||"",qty,unitPrice,qty*unitPrice]);
    });

    return ContentService.createTextOutput(JSON.stringify({ok:true, orderRef:ref})).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err.message || err)})).setMimeType(ContentService.MimeType.JSON);
  }
}
