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
  if (action === "getProductImages") return getProductImagesResponse(e);
  if (action === "getProductImage") return getProductImageResponse(e);
  return ContentService.createTextOutput(JSON.stringify({ok:true, service:"VSCNTS Order Database", actions:["getStock","getProductImages"]}))
    .setMimeType(ContentService.MimeType.JSON);
}

function getStockResponse(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName("STOCK") || ss.getSheetByName("STOCKS");

    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({ok:false,error:"STOCK sheet not found"}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const values = sheet.getDataRange().getValues();
    if (values.length < 2) {
      return ContentService.createTextOutput(JSON.stringify({ok:true,stock:[]}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const headers = values[0].map(function(header){ return String(header).trim(); });
    const internalNameIndex = headers.indexOf("NAME");
    const scentNameIndex = headers.indexOf("Scent Name");
    const priceIndex = headers.indexOf("PRICES");
    const categoryIndex = headers.indexOf("Category");
    const sizeIndex = headers.indexOf("Size");
    const stockIndex = headers.indexOf("Stock");
    const statusIndex = headers.indexOf("Status");

    if ([internalNameIndex,scentNameIndex,priceIndex,categoryIndex,sizeIndex,stockIndex,statusIndex].some(function(i){ return i === -1; })) {
      return ContentService.createTextOutput(JSON.stringify({
        ok:false,
        error:"STOCK sheet must have these headers: NAME, Scent Name, PRICES, Category, Size, Stock, Status"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const mainAccordsIndex = headers.indexOf("MAIN ACCORDS");
    const keyNotesIndex = headers.indexOf("KEY NOTES");
    const howCloseIndex = headers.indexOf("How close to OG");

    // The three scent-detail columns may be vertically merged across the
    // 55ML/100ML rows. Google Sheets returns the value only on the top-left
    // row of a merged range, so carry the last non-empty detail value forward
    // within each NAME/product group.
    let productIndex = -1;
    let previousInternalKey = null;
    let currentMainAccords = "";
    let currentKeyNotes = "";
    let currentHowCloseToOG = "";

    function displayHowCloseToOG(value) {
      if (value === null || value === undefined || value === "") return "";
      if (typeof value === "number" && Number.isFinite(value)) {
        if (value >= 0 && value <= 1) return Math.round(value * 100) + "% close to OG";
        return Math.round(value) + "% close to OG";
      }
      const text = String(value).trim();
      if (!text) return "";
      if (/own\s*twist/i.test(text)) return "Own twist";
      if (/%/.test(text)) return text.toLowerCase().includes("close to og") ? text : text + " close to OG";
      const numeric = Number(text);
      if (Number.isFinite(numeric)) {
        return (numeric <= 1 ? Math.round(numeric * 100) : Math.round(numeric)) + "% close to OG";
      }
      return text;
    }

    const stock = values.slice(1).filter(function(row){
      return row[scentNameIndex] !== "" && row[sizeIndex] !== "";
    }).map(function(row){
      const internalName = String(row[internalNameIndex] || "").trim();
      const internalKey = internalName.toLowerCase().replace(/[®™]/g, "").replace(/\s+/g, " ").trim();

      // Product groups are kept in the same order as the website catalog.
      // NAME remains the reference field and product-group key.
      if (internalKey !== previousInternalKey) {
        productIndex++;
        previousInternalKey = internalKey;
        currentMainAccords = "";
        currentKeyNotes = "";
        currentHowCloseToOG = "";
      }

      if (mainAccordsIndex !== -1 && String(row[mainAccordsIndex] || "").trim()) {
        currentMainAccords = String(row[mainAccordsIndex]).trim();
      }
      if (keyNotesIndex !== -1 && String(row[keyNotesIndex] || "").trim()) {
        currentKeyNotes = String(row[keyNotesIndex]).trim();
      }
      if (howCloseIndex !== -1 && String(row[howCloseIndex] || "").trim()) {
        currentHowCloseToOG = row[howCloseIndex];
      }

      return {
        name: String(row[scentNameIndex] || "").trim(),
        internalName: internalName,
        productIndex: productIndex,
        price: Number(row[priceIndex] || 0),
        category: String(row[categoryIndex] || "").trim(),
        size: String(row[sizeIndex]).trim(),
        stock: Number(row[stockIndex] || 0),
        status: String(row[statusIndex] || "ACTIVE").trim(),
        mainAccords: currentMainAccords,
        keyNotes: currentKeyNotes,
        howCloseToOG: currentHowCloseToOG,
        howCloseDisplay: displayHowCloseToOG(currentHowCloseToOG)
      };
    });

    const payload = {ok:true,stock:stock, detailsSource:'STOCK', detailsHeaders:{mainAccords:mainAccordsIndex !== -1, keyNotes:keyNotesIndex !== -1, howCloseToOG:howCloseIndex !== -1}, generatedAt:new Date().toISOString()};
    const callback = e && e.parameter && e.parameter.callback;
    if (callback && /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(callback)) {
      return ContentService.createTextOutput(callback+"("+JSON.stringify(payload)+");")
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return ContentService.createTextOutput(JSON.stringify(payload))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err.message || err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  let lock = null;
  try {
    const raw = e && e.parameter && e.parameter.payload;
    if (!raw) throw new Error("Missing order payload.");

    const body = JSON.parse(raw);
    if (body.action !== "createOrder" || !body.order) {
      throw new Error("Invalid order request.");
    }

    const order = body.order;
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const orders = ss.getSheetByName("ORDERS");
    const items = ss.getSheetByName("ORDER ITEMS");

    if (!orders || !items) {
      throw new Error("Database sheets are missing. Run setupSheets first.");
    }

    // Prevent two buyers from changing the same inventory at the same time.
    lock = LockService.getScriptLock();
    lock.waitLock(30000);

    const ref = String(
      order.reference ||
      ("VSC-" + Date.now().toString(36).toUpperCase().slice(-8))
    ).trim();

    // Prevent the same order reference from being submitted twice.
    const orderValues = orders.getDataRange().getValues();
    const headers = orderValues.length ? orderValues[0].map(String) : [];
    const refCol = headers.indexOf("Order Ref");

    if (refCol >= 0) {
      for (let r = 1; r < orderValues.length; r++) {
        if (String(orderValues[r][refCol] || "").trim() === ref) {
          return ContentService
            .createTextOutput(JSON.stringify({ok:true, orderRef:ref, duplicate:true}))
            .setMimeType(ContentService.MimeType.JSON);
        }
      }
    }

    const customer = order.customer || {};
    const shipping = order.shipping || {};
    const orderItems = Array.isArray(order.items) ? order.items : [];
    const scentTotal = Number(order.scentTotal || 0);
    const shippingFee = Number(shipping.fee || 0);
    const grandTotal = Number(order.total || (scentTotal + shippingFee));

    // Deduct directly from the same Scent Name + Size + Stock rows
    // that getStockResponse() sends to the website. This keeps the database
    // stock and website stock on one source of truth.
    deductStockFromLiveStock_(orderItems);

    // Keep the SUMMARY section synchronized with the live inventory rows.
    // 50/55ML deducts from Bottle; 100ML deducts from titimplahin.
    // TOTAL is recalculated automatically when it is a formula, otherwise
    // it is decremented directly.
    deductStockFromSummary_(orderItems);

    // Find the first empty row directly below the existing order data.
    const orderRowNumber = findFirstAvailableOrderRow_(orders);

    const orderRow = [
      ref,
      new Date(),
      customer.name || "",
      customer.phone || "",
      customer.address || "",
      customer.province || "",
      customer.city || "",
      customer.barangay || "",
      customer.houseNumber || "",
      orderItems.map(function(i) {
        return (i.name || "") + " " + (i.size || "") + "ML x" + (i.qty || 0);
      }).join(" | "),
      shipping.method || "Lalamove",
      shippingFee,
      scentTotal,
      grandTotal,
      "UNPAID",
      "PENDING VERIFICATION"
    ];

    orders.getRange(orderRowNumber, 1, 1, orderRow.length).setValues([orderRow]);

    // Keep the new order centered like the rest of the ORDERS sheet.
    orders.getRange(orderRowNumber, 1, 1, Math.max(orderRow.length, orders.getLastColumn()))
      .setHorizontalAlignment("center")
      .setVerticalAlignment("middle")
      .setWrap(true);

    orderItems.forEach(function(item) {
      const qty = Number(item.qty || 0);
      const unitPrice = Number(item.unitPrice || 0);
      const itemRowNumber = findFirstAvailableRow_(items, 1);

      items.getRange(itemRowNumber, 1, 1, 8).setValues([[
        ref,
        item.name || "",
        item.og || "",
        item.category || "",
        item.size || "",
        qty,
        unitPrice,
        qty * unitPrice
      ]]);

      items.getRange(itemRowNumber, 1, 1, 8)
        .setHorizontalAlignment("center")
        .setVerticalAlignment("middle")
        .setWrap(true);
    });

    SpreadsheetApp.flush();

    // Create the invoice and turn the Order Ref into a clickable link.
    createInvoiceForOrder_(ref);

    return ContentService
      .createTextOutput(JSON.stringify({ok:true, orderRef:ref}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false,error:String(err.message || err)}))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    if (lock) {
      try { lock.releaseLock(); } catch (e) {}
    }
  }
}

/**
 * Finds the first empty row directly after the existing data.
 * Header row is preserved.
 */
function findFirstAvailableOrderRow_(sheet) {
  return findFirstAvailableRow_(sheet, 1);
}

function findFirstAvailableRow_(sheet, keyColumn) {
  const lastRow = Math.max(sheet.getLastRow(), 1);
  if (lastRow <= 1) return 2;

  const values = sheet.getRange(2, keyColumn, lastRow - 1, 1).getDisplayValues();

  for (let i = 0; i < values.length; i++) {
    if (String(values[i][0] || "").trim() === "") {
      return i + 2;
    }
  }

  return lastRow + 1;
}

/**
 * Deduct inventory directly from the LIVE STOCK rows.
 *
 * This is the same table used by getStockResponse():
 *   Scent Name | Category | Size | Stock | Status
 *
 * The website reads these Stock cells, so orders must deduct from these
 * exact cells. The function validates the complete order first, then applies
 * all deductions. A Script Lock in doPost() prevents simultaneous orders
 * from consuming the same stock.
 */
function deductStockFromLiveStock_(orderItems) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("STOCK") || ss.getSheetByName("STOCKS");

  if (!sheet) throw new Error("STOCK sheet not found.");

  const values = sheet.getDataRange().getValues();
  if (values.length < 2) throw new Error("STOCK sheet has no inventory records.");

  const headers = values[0].map(function(value) {
    return String(value == null ? "" : value).trim();
  });

  // Match the same fields used by getStockResponse(), but case-insensitively.
  const lowerHeaders = headers.map(function(value) { return value.toLowerCase(); });
  const scentNameCol = lowerHeaders.indexOf("scent name");
  const sizeCol = lowerHeaders.indexOf("size");
  const stockCol = lowerHeaders.indexOf("stock");

  if (scentNameCol === -1 || sizeCol === -1 || stockCol === -1) {
    throw new Error('STOCK sheet must have "Scent Name", "Size", and "Stock" headers.');
  }

  function normalizeName(value) {
    return String(value == null ? "" : value)
      .toLowerCase()
      .replace(/[®™]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function numericSize(value) {
    const text = String(value == null ? "" : value).trim();
    const match = text.match(/\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : NaN;
  }

  // Build a direct lookup using the exact same Scent Name + Size combination
  // that the website receives from getStockResponse().
  const liveRows = {};
  for (let r = 1; r < values.length; r++) {
    const scent = normalizeName(values[r][scentNameCol]);
    const size = numericSize(values[r][sizeCol]);
    if (!scent || !Number.isFinite(size)) continue;
    liveRows[scent + "|" + size] = r + 1;
  }

  // Aggregate duplicate items in one order so the same stock row is only
  // changed once.
  const requested = {};
  (orderItems || []).forEach(function(item) {
    const scentName = String(item && item.name || "").trim();
    const qty = Math.floor(Number(item && item.qty || 0));
    const size = numericSize(item && item.size);

    if (!scentName || qty <= 0) return;

    if (!Number.isFinite(size)) {
      throw new Error('Invalid size "' + String(item && item.size || "") + '" for "' + scentName + '".');
    }

    const key = normalizeName(scentName) + "|" + size;
    if (!requested[key]) {
      requested[key] = {scentName:scentName, size:size, qty:0};
    }
    requested[key].qty += qty;
  });

  const changes = [];

  Object.keys(requested).forEach(function(key) {
    const req = requested[key];
    const rowNumber = liveRows[key];

    if (!rowNumber) {
      throw new Error(
        'Stock record not found for "' + req.scentName + '" ' + req.size + 'ML.'
      );
    }

    const stockCell = sheet.getRange(rowNumber, stockCol + 1);
    const currentStock = Number(stockCell.getValue());

    if (!Number.isFinite(currentStock)) {
      throw new Error(
        'Invalid Stock value for "' + req.scentName + '" ' + req.size + 'ML.'
      );
    }

    if (currentStock < req.qty) {
      throw new Error(
        'Not enough stock for "' + req.scentName + '" ' + req.size + 'ML. ' +
        'Available: ' + currentStock + ', requested: ' + req.qty + '.'
      );
    }

    changes.push({
      stockCell: stockCell,
      oldStock: currentStock,
      qty: req.qty
    });
  });

  // Apply only after the entire order has passed validation.
  changes.forEach(function(change) {
    change.stockCell.setValue(change.oldStock - change.qty);
  });

  SpreadsheetApp.flush();

  return changes;
}

/**
 * Synchronize the SUMMARY section of the STOCK sheet after an order.
 *
 * 50ML / 55ML -> Bottle - quantity
 * 100ML       -> titimplahin - quantity
 * TOTAL       -> formula is preserved; manual TOTAL is decremented
 *
 * This operates on the SUMMARY table shown at the top of the STOCK sheet,
 * using the exact Scent Name rows. It does not replace the live STOCK-row
 * deduction; it keeps the two views synchronized.
 */
function deductStockFromSummary_(orderItems) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("STOCK") || ss.getSheetByName("STOCKS");
  if (!sheet) throw new Error("STOCK sheet not found.");

  const data = sheet.getDataRange().getValues();
  if (!data.length) throw new Error("STOCK sheet is empty.");

  function norm(value) {
    return String(value == null ? "" : value)
      .toLowerCase()
      .replace(/[®™]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function numericSize(value) {
    const text = String(value == null ? "" : value).trim();
    const match = text.match(/\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : NaN;
  }

  // Find the SUMMARY header row by the actual labels in the sheet.
  let headerRow = -1;
  let scentCol = -1;
  let bottleCol = -1;
  let titimplahinCol = -1;
  let totalCol = -1;

  for (let r = 0; r < data.length; r++) {
    const row = data[r].map(norm);
    const s = row.indexOf("scent name");
    const b = row.indexOf("bottle");
    const t = row.indexOf("titimplahin");
    const total = row.indexOf("total");
    if (s !== -1 && b !== -1 && t !== -1 && total !== -1) {
      headerRow = r;
      scentCol = s;
      bottleCol = b;
      titimplahinCol = t;
      totalCol = total;
      break;
    }
  }

  if (headerRow === -1) {
    throw new Error('SUMMARY headers not found. Expected "Scent Name", "Bottle", "titimplahin", and "TOTAL".');
  }

  // Map each scent to its SUMMARY row.
  const summaryRows = {};
  for (let r = headerRow + 1; r < data.length; r++) {
    const scent = norm(data[r][scentCol]);
    if (scent && scent !== "total" && !summaryRows[scent]) {
      summaryRows[scent] = r + 1;
    }
  }

  // Aggregate by scent + component so multiple cart lines are handled once.
  const requested = {};
  (orderItems || []).forEach(function(item) {
    const scent = String(item && item.name || "").trim();
    const qty = Math.floor(Number(item && item.qty || 0));
    const size = numericSize(item && item.size);
    if (!scent || qty <= 0) return;
    if (!Number.isFinite(size)) {
      throw new Error('Invalid size "' + String(item && item.size || "") + '" for "' + scent + '".');
    }

    let bucket;
    if (size === 50 || size === 55) {
      bucket = "bottle";
    } else if (size === 100) {
      bucket = "titimplahin";
    } else {
      throw new Error('Unsupported size "' + String(item && item.size || "") + '" for "' + scent + '".');
    }

    const key = norm(scent) + "|" + bucket;
    if (!requested[key]) requested[key] = {scent:scent, bucket:bucket, qty:0};
    requested[key].qty += qty;
  });

  const changes = [];

  // Validate the complete SUMMARY update before changing any SUMMARY cells.
  Object.keys(requested).forEach(function(key) {
    const req = requested[key];
    const rowNumber = summaryRows[norm(req.scent)];
    if (!rowNumber) {
      throw new Error('SUMMARY row not found for "' + req.scent + '".');
    }

    const componentCol = req.bucket === "bottle" ? bottleCol + 1 : titimplahinCol + 1;
    const componentCell = sheet.getRange(rowNumber, componentCol);
    const totalCell = sheet.getRange(rowNumber, totalCol + 1);

    const componentValue = Number(componentCell.getValue() || 0);
    const totalValue = Number(totalCell.getValue() || 0);
    const totalHasFormula = Boolean(totalCell.getFormula());

    if (!Number.isFinite(componentValue)) {
      throw new Error('Invalid SUMMARY ' + (req.bucket === "bottle" ? "Bottle" : "titimplahin") + ' value for "' + req.scent + '".');
    }
    if (!totalHasFormula && !Number.isFinite(totalValue)) {
      throw new Error('Invalid SUMMARY TOTAL value for "' + req.scent + '".');
    }
    if (componentValue < req.qty) {
      throw new Error('Insufficient SUMMARY ' + (req.bucket === "bottle" ? "Bottle" : "titimplahin") + ' stock for "' + req.scent + '". Available: ' + componentValue + ', requested: ' + req.qty + '.');
    }

    changes.push({
      componentCell: componentCell,
      componentOld: componentValue,
      totalCell: totalCell,
      totalOld: totalValue,
      totalHasFormula: totalHasFormula,
      qty: req.qty
    });
  });

  // Apply all SUMMARY deductions after validation succeeds.
  changes.forEach(function(change) {
    change.componentCell.setValue(change.componentOld - change.qty);
    if (!change.totalHasFormula) {
      change.totalCell.setValue(change.totalOld - change.qty);
    }
  });

  SpreadsheetApp.flush();
  return changes;
}

/**
 * Creates/refreshes one invoice sheet for an Order Ref and makes the ORDERS
 * Order Ref cell clickable. Sheet name format: INV-<Order Ref>
 */
function createInvoiceForOrder_(orderRef) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const orders = ss.getSheetByName("ORDERS");
  const items = ss.getSheetByName("ORDER ITEMS");

  if (!orders || !items) {
    throw new Error("ORDERS or ORDER ITEMS sheet is missing.");
  }

  // =========================================================
  // FIND ORDER
  // =========================================================
  const orderValues = orders.getDataRange().getValues();

  if (orderValues.length < 2) {
    throw new Error("No orders found.");
  }

  const headers = orderValues[0].map(String);
  const refCol = headers.indexOf("Order Ref");

  if (refCol < 0) {
    throw new Error("Order Ref column not found.");
  }

  let orderRow = null;
  let orderSheetRow = -1;

  for (let r = 1; r < orderValues.length; r++) {
    if (String(orderValues[r][refCol]).trim() === String(orderRef).trim()) {
      orderRow = orderValues[r];
      orderSheetRow = r + 1;
      break;
    }
  }

  if (!orderRow) {
    throw new Error("Order Ref not found: " + orderRef);
  }

  // Helper for ORDERS headers
  const get = function(name) {
    const idx = headers.indexOf(name);
    return idx >= 0 ? orderRow[idx] : "";
  };

  // =========================================================
  // CUSTOMER / ORDER INFORMATION
  // =========================================================
  const customerName = get("Name");
  const contactNumber = get("Contact Number");
  const completeAddress = get("Complete Address");
  const province = get("Province");
  const city = get("City");
  const barangay = get("Barangay");
  const houseNumber = get("House Number");

  const shippingMethod = get("Shipping");
  const shippingFeeRaw = get("Shipping Fee");

  const shippingFee = parseInvoiceAmount_(shippingFeeRaw);

  const paymentStatus = get("Payment Status") || "UNPAID";
  const orderStatus = get("Order Status") || "PENDING VERIFICATION";

  const dateTime = get("Date/Time") || new Date();

  // =========================================================
  // FIND / CREATE INVOICE SHEET
  // =========================================================
  const invoiceName = sanitizeInvoiceSheetName_("INV-" + orderRef);

  let inv = ss.getSheetByName(invoiceName);

  if (!inv) {
    inv = ss.insertSheet(invoiceName);
  }

  // Remove protection created by this script before rebuilding
  inv.getProtections(SpreadsheetApp.ProtectionType.SHEET).forEach(function(p) {
    try {
      p.remove();
    } catch (e) {}
  });

  // =========================================================
  // RESET SHEET
  // =========================================================
  // Remove ALL old merged cells first.
// This is important because invoice layouts are rebuilt
// with different merged-cell structures.
inv.getRange(
  1,
  1,
  inv.getMaxRows(),
  inv.getMaxColumns()
).breakApart();

inv.clear();
inv.clearFormats();
inv.clearConditionalFormatRules();

inv.setHiddenGridlines(true);
inv.setFrozenRows(0);
inv.setTabColor("#C9A24A");
  inv.setFrozenRows(0);
  inv.setTabColor("#C9A24A");

  // Make sure we only use A:G
  if (inv.getMaxColumns() < 7) {
    inv.insertColumnsAfter(
      inv.getMaxColumns(),
      7 - inv.getMaxColumns()
    );
  }

  // =========================================================
  // COLORS
  // =========================================================
  const GOLD = "#C9A24A";
  const DARK_GOLD = "#8B6B25";
  const BLACK = "#0B0B0B";
  const CHARCOAL = "#151515";
  const CREAM = "#F6F1E7";
  const WHITE = "#FFFFFF";
  const MUTED = "#777777";
  const LIGHT_GOLD = "#E8D7A6";
  const PALE = "#FBF8F1";
  const BORDER = "#D8D0C0";

  // =========================================================
  // COLUMN WIDTHS
  // =========================================================
  inv.setColumnWidth(1, 145); // A
  inv.setColumnWidth(2, 180); // B
  inv.setColumnWidth(3, 120); // C
  inv.setColumnWidth(4, 120); // D
  inv.setColumnWidth(5, 90);  // E
  inv.setColumnWidth(6, 110); // F
  inv.setColumnWidth(7, 120); // G

  // =========================================================
  // HEADER
  // =========================================================
  inv.getRange("A1:G5")
    .setBackground(BLACK)
    .setFontColor(WHITE);

  inv.getRange("A1:C2").merge();

  inv.getRange("A1")
    .setValue("VSCNTS")
    .setFontFamily("Georgia")
    .setFontSize(26)
    .setFontWeight("bold")
    .setFontColor(GOLD)
    .setHorizontalAlignment("left")
    .setVerticalAlignment("middle");

  inv.getRange("A3:C3").merge();

  inv.getRange("A3")
    .setValue("WE DON'T JUST SELL PERFUMES. WE SELL CONFIDENCE.")
    .setFontFamily("Arial")
    .setFontSize(8)
    .setFontWeight("bold")
    .setFontColor(LIGHT_GOLD)
    .setHorizontalAlignment("left")
    .setVerticalAlignment("middle");

  inv.getRange("D1:G2").merge();

  inv.getRange("D1")
    .setValue("ORDER INVOICE")
    .setFontFamily("Georgia")
    .setFontSize(20)
    .setFontWeight("bold")
    .setFontColor(WHITE)
    .setHorizontalAlignment("right")
    .setVerticalAlignment("middle");

  inv.getRange("D3:G3").merge();

  inv.getRange("D3")
    .setValue("VSCNTS — PREMIUM FRAGRANCE")
    .setFontFamily("Arial")
    .setFontSize(8)
    .setFontWeight("bold")
    .setFontColor(GOLD)
    .setHorizontalAlignment("right");

  inv.getRange("D4:E4").merge();
  inv.getRange("F4:G4").merge();

  inv.getRange("D4")
    .setValue("ORDER REFERENCE")
    .setFontSize(8)
    .setFontWeight("bold")
    .setFontColor(GOLD)
    .setHorizontalAlignment("right");

  inv.getRange("F4")
    .setValue(String(orderRef))
    .setFontSize(10)
    .setFontWeight("bold")
    .setFontColor(WHITE)
    .setHorizontalAlignment("right");

  inv.getRange("D5:E5").merge();
  inv.getRange("F5:G5").merge();

  inv.getRange("D5")
    .setValue("DATE / TIME")
    .setFontSize(8)
    .setFontWeight("bold")
    .setFontColor(GOLD)
    .setHorizontalAlignment("right");

  inv.getRange("F5")
    .setValue(formatInvoiceDate_(dateTime))
    .setFontSize(10)
    .setFontWeight("bold")
    .setFontColor(WHITE)
    .setHorizontalAlignment("right");

  // =========================================================
  // CUSTOMER DETAILS
  // =========================================================
  inv.getRange("A7:G7").merge();

  inv.getRange("A7")
    .setValue("CUSTOMER DETAILS")
    .setBackground(CHARCOAL)
    .setFontColor(GOLD)
    .setFontFamily("Georgia")
    .setFontSize(12)
    .setFontWeight("bold")
    .setVerticalAlignment("middle");

  // Row 8
  inv.getRange("A8").setValue("NAME");
  inv.getRange("B8:C8").merge();
  inv.getRange("B8").setValue(customerName);

  inv.getRange("D8").setValue("CONTACT NUMBER");
  inv.getRange("E8:G8").merge();
  inv.getRange("E8").setValue(contactNumber);

  // Row 9
  inv.getRange("A9").setValue("COMPLETE ADDRESS");
  inv.getRange("B9:G9").merge();
  inv.getRange("B9").setValue(completeAddress);

  // Row 10
  inv.getRange("A10").setValue("PROVINCE");
  inv.getRange("B10:C10").merge();
  inv.getRange("B10").setValue(province);

  inv.getRange("D10").setValue("CITY");
  inv.getRange("E10:G10").merge();
  inv.getRange("E10").setValue(city);

  // Row 11
  inv.getRange("A11").setValue("BARANGAY");
  inv.getRange("B11:C11").merge();
  inv.getRange("B11").setValue(barangay);

  inv.getRange("D11").setValue("HOUSE NUMBER");
  inv.getRange("E11:G11").merge();
  inv.getRange("E11").setValue(houseNumber);

  // Customer formatting
  inv.getRange("A8:G11")
    .setBackground(PALE)
    .setFontColor(BLACK)
    .setVerticalAlignment("middle")
    .setWrap(true)
    .setBorder(
      true, true, true, true, true, true,
      BORDER,
      SpreadsheetApp.BorderStyle.SOLID
    );

  inv.getRange("A8:A11")
    .setFontSize(8)
    .setFontWeight("bold")
    .setFontColor(DARK_GOLD);

  inv.getRange("D8:D11")
    .setFontSize(8)
    .setFontWeight("bold")
    .setFontColor(DARK_GOLD);

  inv.getRange("B8:C11")
    .setFontSize(9)
    .setFontWeight("bold");

  inv.getRange("E8:G11")
    .setFontSize(9)
    .setFontWeight("bold");

  // =========================================================
  // ORDER DETAILS
  // =========================================================
  inv.getRange("A13:G13").merge();

  inv.getRange("A13")
    .setValue("ORDER DETAILS")
    .setBackground(CHARCOAL)
    .setFontColor(GOLD)
    .setFontFamily("Georgia")
    .setFontSize(12)
    .setFontWeight("bold")
    .setVerticalAlignment("middle");

  // Get ORDER ITEMS
  const itemValues = items.getDataRange().getValues();

  if (itemValues.length < 1) {
    throw new Error("ORDER ITEMS data not found.");
  }

  const itemHeaders = itemValues[0].map(String);

  const itemRefCol = itemHeaders.indexOf("Order Ref");
  const itemNameCol = itemHeaders.indexOf("VSCNTS Scent");
  const itemCatCol = itemHeaders.indexOf("Category");
  const itemSizeCol = itemHeaders.indexOf("Size");
  const itemQtyCol = itemHeaders.indexOf("Quantity");
  const itemUnitCol = itemHeaders.indexOf("Unit Price");
  const itemSubCol = itemHeaders.indexOf("Subtotal");

  const rows = [];

  if (itemRefCol >= 0) {
    for (let r = 1; r < itemValues.length; r++) {

      if (
        String(itemValues[r][itemRefCol]).trim() !==
        String(orderRef).trim()
      ) {
        continue;
      }

      rows.push([
        itemNameCol >= 0 ? itemValues[r][itemNameCol] : "",
        itemCatCol >= 0 ? itemValues[r][itemCatCol] : "",
        itemSizeCol >= 0 ? itemValues[r][itemSizeCol] : "",
        itemQtyCol >= 0 ? itemValues[r][itemQtyCol] : "",
        itemUnitCol >= 0 ? itemValues[r][itemUnitCol] : "",
        itemSubCol >= 0 ? itemValues[r][itemSubCol] : ""
      ]);
    }
  }

  // If no items were found, still create a clean invoice
  if (rows.length === 0) {
    rows.push(["", "", "", "", "", ""]);
  }

  // =========================================================
  // ITEM TABLE
  // NO OG SCENT COLUMN
  // =========================================================
  const itemStart = 14;

  const itemHeadersDisplay = [
    "VSCNTS SCENT",
    "CATEGORY",
    "SIZE (ML)",
    "QTY",
    "UNIT PRICE",
    "SUBTOTAL",
    ""
  ];

  inv.getRange(itemStart, 1, 1, 7)
    .setValues([itemHeadersDisplay])
    .setBackground(DARK_GOLD)
    .setFontColor(WHITE)
    .setFontWeight("bold")
    .setFontSize(8)
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle");

  // Merge final blank column into subtotal area
  inv.getRange(itemStart, 6, 1, 2).merge();

  const displayRows = rows.map(function(row) {
    return [
      row[0],
      row[1],
      row[2],
      row[3],
      row[4],
      row[5],
      ""
    ];
  });

  const dataStart = itemStart + 1;

  inv.getRange(dataStart, 1, displayRows.length, 7)
    .setValues(displayRows)
    .setBackground(PALE)
    .setFontColor(BLACK)
    .setVerticalAlignment("middle")
    .setWrap(true)
    .setBorder(
      true, true, true, true, true, true,
      BORDER,
      SpreadsheetApp.BorderStyle.SOLID
    );

  inv.getRange(dataStart, 1, displayRows.length, 1)
    .setFontWeight("bold");

  inv.getRange(dataStart, 4, displayRows.length, 1)
    .setHorizontalAlignment("center");

  inv.getRange(dataStart, 5, displayRows.length, 2)
    .setNumberFormat('₱#,##0.00')
    .setHorizontalAlignment("right");

  // =========================================================
  // CALCULATE SUBTOTAL + SHIPPING = TOTAL
  // =========================================================
  let scentTotal = 0;

  rows.forEach(function(row) {
    scentTotal += parseInvoiceAmount_(row[5]);
  });

  const totalPayment = scentTotal + shippingFee;

  const summaryStart = dataStart + displayRows.length + 2;

  // =========================================================
  // SHIPPING DETAILS
  // =========================================================
  inv.getRange(
    "A" + summaryStart + ":D" + summaryStart
  ).merge();

  inv.getRange("A" + summaryStart)
    .setValue("SHIPPING DETAILS")
    .setBackground(CHARCOAL)
    .setFontColor(GOLD)
    .setFontFamily("Georgia")
    .setFontSize(12)
    .setFontWeight("bold");

  inv.getRange(
    "A" + (summaryStart + 1) + ":D" + (summaryStart + 3)
  ).setValues([
    ["SHIPPING METHOD", shippingMethod || "", "", ""],
    ["SHIPPING FEE", shippingFee, "", ""],
    ["NOTE", "Shipping fee is confirmed separately based on delivery area.", "", ""]
  ]);

  inv.getRange(
    "B" + (summaryStart + 1) + ":D" + (summaryStart + 1)
  ).merge();

  inv.getRange(
    "B" + (summaryStart + 2) + ":D" + (summaryStart + 2)
  ).merge();

  inv.getRange(
    "B" + (summaryStart + 3) + ":D" + (summaryStart + 3)
  ).merge();

  inv.getRange(
    "A" + (summaryStart + 1) + ":D" + (summaryStart + 3)
  )
    .setBackground(PALE)
    .setVerticalAlignment("middle")
    .setWrap(true)
    .setBorder(
      true, true, true, true, true, true,
      BORDER,
      SpreadsheetApp.BorderStyle.SOLID
    );

  inv.getRange(
    "A" + (summaryStart + 1) + ":A" + (summaryStart + 3)
  )
    .setFontSize(8)
    .setFontWeight("bold")
    .setFontColor(DARK_GOLD);

  inv.getRange(
    "B" + (summaryStart + 1) + ":D" + (summaryStart + 2)
  )
    .setFontSize(9)
    .setFontWeight("bold");

  inv.getRange(
    "B" + (summaryStart + 2)
  ).setNumberFormat('₱#,##0.00');

  inv.getRange(
    "B" + (summaryStart + 3)
  )
    .setFontSize(8)
    .setFontColor(MUTED);

  // =========================================================
  // PAYMENT SUMMARY
  // ONLY ONE SHIPPING FEE
  // =========================================================
// =========================================================
// PAYMENT SUMMARY
// TOTAL PAYMENT IS LIVE:
// SCENT ORDERS + SHIPPING FEE
// =========================================================

inv.getRange(
  "E" + summaryStart + ":G" + summaryStart
).merge();

inv.getRange("E" + summaryStart)
  .setValue("PAYMENT SUMMARY")
  .setBackground(CHARCOAL)
  .setFontColor(GOLD)
  .setFontFamily("Georgia")
  .setFontSize(12)
  .setFontWeight("bold")
  .setHorizontalAlignment("left")
  .setVerticalAlignment("middle");

// Payment summary rows
inv.getRange(
  "E" + (summaryStart + 1) +
  ":F" + (summaryStart + 4)
).setValues([
  ["SCENT ORDERS", scentTotal],
  ["TOTAL PAYMENT", ""],
  ["PAYMENT STATUS", paymentStatus],
  ["ORDER STATUS", orderStatus]
]);

// Merge value area
for (let i = 1; i <= 4; i++) {
  inv.getRange(
    "F" + (summaryStart + i) +
    ":G" + (summaryStart + i)
  ).merge();
}

// Overall formatting
inv.getRange(
  "E" + (summaryStart + 1) +
  ":G" + (summaryStart + 4)
)
  .setBackground(PALE)
  .setVerticalAlignment("middle")
  .setWrap(true)
  .setBorder(
    true, true, true, true, true, true,
    BORDER,
    SpreadsheetApp.BorderStyle.SOLID
  );

// Labels
inv.getRange(
  "E" + (summaryStart + 1) +
  ":E" + (summaryStart + 4)
)
  .setFontSize(8)
  .setFontWeight("bold")
  .setFontColor(DARK_GOLD);

// Currency formatting
inv.getRange(
  "F" + (summaryStart + 1)
)
  .setNumberFormat('₱#,##0.00')
  .setFontSize(10)
  .setFontWeight("bold")
  .setHorizontalAlignment("right");

// =========================================================
// LIVE TOTAL FORMULA
// F19 + B20 = F20
// =========================================================

inv.getRange(
  "F" + (summaryStart + 2)
).setFormula(
  "=F" + (summaryStart + 1) +
  "+B" + (summaryStart + 2)
);

inv.getRange(
  "F" + (summaryStart + 2) +
  ":G" + (summaryStart + 2)
)
  .setNumberFormat('₱#,##0.00')
  .setHorizontalAlignment("right")
  .setFontWeight("bold");

// Highlight TOTAL PAYMENT
inv.getRange(
  "E" + (summaryStart + 2) +
  ":G" + (summaryStart + 2)
)
  .setBackground(GOLD)
  .setFontColor(BLACK)
  .setFontWeight("bold")
  .setFontSize(11);

// Status rows
inv.getRange(
  "F" + (summaryStart + 3) +
  ":G" + (summaryStart + 4)
)
  .setFontWeight("bold")
  .setHorizontalAlignment("right");

  // =========================================================
  // FOOTER
  // =========================================================
  const footerRow = summaryStart + 7;

  inv.getRange(
    "A" + footerRow + ":G" + (footerRow + 2)
  ).merge();

  inv.getRange("A" + footerRow)
    .setValue(
      "THANK YOU FOR CHOOSING VSCNTS\n" +
      "WE DON'T JUST SELL PERFUMES. WE SELL CONFIDENCE."
    )
    .setBackground(BLACK)
    .setFontColor(GOLD)
    .setFontFamily("Georgia")
    .setFontSize(11)
    .setFontWeight("bold")
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle")
    .setWrap(true);

  // =========================================================
  // ROW HEIGHTS
  // =========================================================
  inv.setRowHeights(1, 5, 24);
  inv.setRowHeight(1, 34);
  inv.setRowHeight(2, 34);

  inv.setRowHeights(8, 4, 24);
  inv.setRowHeight(9, 30);

  inv.setRowHeight(itemStart, 26);
  inv.setRowHeights(
    dataStart,
    displayRows.length,
    28
  );

  inv.setRowHeight(summaryStart, 25);
  inv.setRowHeights(summaryStart + 1, 5, 24);

  inv.setRowHeights(footerRow, 3, 25);

  // =========================================================
  // MAKE ORDER REF CLICKABLE
  // =========================================================
  if (orderSheetRow > 0) {

    const refCell = orders.getRange(
      orderSheetRow,
      refCol + 1
    );

    const targetUrl =
      ss.getUrl() +
      "#gid=" +
      inv.getSheetId();

    const richText =
      SpreadsheetApp.newRichTextValue()
        .setText(String(orderRef))
        .setLinkUrl(targetUrl)
        .build();

    refCell.setRichTextValue(richText);
    refCell.setFontWeight("bold");
    refCell.setFontColor("#1155CC");
    refCell.setFontLine("underline");
  }

  // =========================================================
  // PROTECT INVOICE
  // =========================================================
  protectInvoiceSheet_(inv);

  SpreadsheetApp.flush();

  return invoiceName;
}


/**
 * Converts currency / numeric values safely into a number.
 */
function parseInvoiceAmount_(value) {
  if (value === null || value === undefined || value === "") {
    return 0;
  }

  if (typeof value === "number") {
    return isNaN(value) ? 0 : value;
  }

  const cleaned = String(value)
    .replace(/[₱,\s]/g, "")
    .replace(/[^\d.-]/g, "");

  const number = parseFloat(cleaned);

  return isNaN(number) ? 0 : number;
}


/**
 * Formats invoice date/time.
 */
function formatInvoiceDate_(value) {
  if (!value) return "";

  try {
    const date =
      value instanceof Date
        ? value
        : new Date(value);

    if (isNaN(date.getTime())) {
      return String(value);
    }

    return Utilities.formatDate(
      date,
      Session.getScriptTimeZone(),
      "MM/dd/yyyy"
    );

  } catch (e) {
    return String(value);
  }
}

function protectInvoiceSheet_(sheet) {
  const protections = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  protections.forEach(function(p) {
    try { p.remove(); } catch (e) {}
  });

  const protection = sheet.protect();
  protection.setDescription("VSCNTS Invoice — protected system sheet. Edit via ORDERS/Apps Script.");
  protection.setWarningOnly(false);

  // Keep the current script owner as an allowed editor where possible.
  try {
    const email = Session.getEffectiveUser().getEmail();
    if (email) protection.addEditor(email);
  } catch (e) {}
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("VSCNTS Tools")
    .addItem("Refresh / Create All Invoices", "createInvoicesForExistingOrders")
    .addItem("Repair Order Ref Links", "repairOrderRefLinks")
    .addSeparator()
    .addItem("Restore Missing Invoices", "restoreMissingInvoices")
    .addItem("Archive Selected Invoice", "archiveSelectedInvoice")
    .addItem("Restore Selected Invoice", "restoreSelectedInvoice")
    .addItem("Show All Invoice Tabs", "showAllInvoiceTabs")
    .addToUi();
}


/**
 * Safety system for invoice tabs.
 * Invoices are never meant to be manually deleted. Use Archive Selected Invoice
 * instead; this hides the tab while keeping the sheet and Order Ref link intact.
 * If an invoice tab is missing, this function recreates it from ORDERS + ORDER ITEMS.
 */
function restoreMissingInvoices() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const orders = ss.getSheetByName("ORDERS");
  if (!orders || orders.getLastRow() < 2) return;

  const values = orders.getDataRange().getValues();
  const headers = values[0].map(String);
  const refCol = headers.indexOf("Order Ref");
  if (refCol < 0) throw new Error("Order Ref column not found.");

  let restored = 0;
  let alreadyThere = 0;

  for (let r = 1; r < values.length; r++) {
    const ref = String(values[r][refCol] || "").trim();
    if (!ref) continue;

    const invoiceName = sanitizeInvoiceSheetName_("INV-" + ref);
    const existing = ss.getSheetByName(invoiceName);

    if (existing) {
      alreadyThere++;
      continue;
    }

    createInvoiceForOrder_(ref);
    const restoredSheet = ss.getSheetByName(sanitizeInvoiceSheetName_("INV-" + ref));

if (restoredSheet) {
  restoredSheet.showSheet();
  ss.setActiveSheet(restoredSheet);
  restoredSheet.setActiveSelection("A1");
}
    restored++;
  }

  // Rebuild all Order Ref links, including newly recreated invoices.
  repairOrderRefLinks();
  SpreadsheetApp.getUi().alert(
    "VSCNTS Invoice Safety",
    "Restored " + restored + " missing invoice(s).\n" +
    alreadyThere + " invoice(s) were already present.",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

/**
 * Archive an invoice safely by hiding its tab instead of deleting it.
 * The invoice remains intact and its Order Ref link continues to work.
 */
function archiveSelectedInvoice() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  const name = sheet.getName();

  if (name.indexOf("INV-") !== 0) {
    SpreadsheetApp.getUi().alert(
      "VSCNTS Invoice Safety",
      "Please select an invoice tab whose name starts with INV-.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  if (ss.getSheets().length <= 1) return;

  sheet.hideSheet();
  SpreadsheetApp.getUi().alert(
    "Invoice Archived",
    name + " has been safely archived. It was hidden, not deleted.",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

/** Restore the currently selected invoice tab. */
function restoreSelectedInvoice() {
  const sheet = SpreadsheetApp.getActive().getActiveSheet();
  const name = sheet.getName();

  if (name.indexOf("INV-") !== 0) {
    SpreadsheetApp.getUi().alert(
      "VSCNTS Invoice Safety",
      "Please select an invoice tab whose name starts with INV-.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  sheet.showSheet();
  SpreadsheetApp.getUi().alert(
    "Invoice Restored",
    name + " is visible again.",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

/** Show every existing invoice tab without deleting anything. */
function showAllInvoiceTabs() {
  const ss = SpreadsheetApp.getActive();
  let shown = 0;

  ss.getSheets().forEach(function(sheet) {
    if (sheet.getName().indexOf("INV-") === 0 && sheet.isSheetHidden()) {
      sheet.showSheet();
      shown++;
    }
  });

  SpreadsheetApp.getUi().alert(
    "VSCNTS Invoice Safety",
    "Shown " + shown + " archived invoice tab(s).",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}

/**
 * One-time migration helper: creates invoice sheets and clickable Order Refs
 * for all existing rows in ORDERS.
 */
function createInvoicesForExistingOrders() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const orders = ss.getSheetByName("ORDERS");
  if (!orders || orders.getLastRow() < 2) return;

  const values = orders.getDataRange().getValues();
  const refCol = values[0].map(String).indexOf("Order Ref");
  if (refCol < 0) throw new Error("Order Ref column not found.");

  let created = 0;
  for (let r = 1; r < values.length; r++) {
    const ref = String(values[r][refCol] || "").trim();
    if (!ref) continue;
    createInvoiceForOrder_(ref);
    created++;
  }
  Logger.log("Created/refreshed " + created + " invoice(s).");
}

/**
 * One-time repair/helper: refresh clickable links for all existing invoices.
 * Run this if invoices already exist but the Order Ref cells are not clickable.
 */
function repairOrderRefLinks() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const orders = ss.getSheetByName("ORDERS");
  if (!orders || orders.getLastRow() < 2) return;

  const values = orders.getDataRange().getValues();
  const headers = values[0].map(String);
  const refCol = headers.indexOf("Order Ref");
  if (refCol < 0) throw new Error("Order Ref column not found.");

  let fixed = 0;
  for (let r = 1; r < values.length; r++) {
    const ref = String(values[r][refCol] || "").trim();
    if (!ref) continue;

    const invoiceName = sanitizeInvoiceSheetName_("INV-" + ref);
    const inv = ss.getSheetByName(invoiceName);
    if (!inv) continue;

    const refCell = orders.getRange(r + 1, refCol + 1);
    const targetUrl = ss.getUrl() + "#gid=" + inv.getSheetId();
    const richText = SpreadsheetApp.newRichTextValue()
      .setText(ref)
      .setLinkUrl(targetUrl)
      .build();

    refCell.setRichTextValue(richText);
    refCell.setFontWeight("bold");
    fixed++;
  }

  Logger.log("Repaired " + fixed + " clickable Order Ref link(s).");
}

function sanitizeInvoiceSheetName_(name) {
  // Google Sheets disallows: \ / ? * [ ] :
  let safe = String(name || "INV").replace(/[\\\/\?\*\[\]\:]/g, "-");
  if (safe.length > 90) safe = safe.substring(0, 90);
  return safe;
}


// V32 IMAGE URL DATABASE
// Google Sheet tab: Product images
// Column A = Scent Name | Column B = Category | Column C = IMAGE - 50/55ml | Column D = IMAGE - 100ml | Column E = BEST SELLER | Column F = DISCOUNT
const PRODUCT_IMAGES_SHEET = "Product images";

function getProductImagesResponse(e) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(PRODUCT_IMAGES_SHEET);
  const callback = e && e.parameter && e.parameter.callback;
  if (!sheet) {
    return jsonOrJsonp({ok:false,error:"Sheet not found: " + PRODUCT_IMAGES_SHEET}, callback);
  }
  const values = sheet.getDataRange().getDisplayValues();
  const images = {};
  for (let i = 1; i < values.length; i++) {
    const name = String(values[i][0] || "").trim();
    const image50_55 = String(values[i][2] || "").trim();
    const image100 = String(values[i][3] || "").trim();
    const bestSeller = String(values[i][4] || "").trim();
    const discount = String(values[i][5] || "").trim();
    if (name && (image50_55 || image100 || bestSeller || discount)) {
      images[name] = {
        image50_55: normalizeProductImageUrl(image50_55),
        image100: normalizeProductImageUrl(image100),
        bestSeller: bestSeller,
        badge: bestSeller,
        discount: discount
      };
    }
  }
  return jsonOrJsonp({ok:true,images:images}, callback);
}
function jsonOrJsonp(payload, callback) {
  const json = JSON.stringify(payload);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + json + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function normalizeProductImageUrl(url) {
  // Keep the exact URL entered in Product images!C.
  // The website handles the URL directly and has a Drive thumbnail fallback.
  return String(url || "").trim();
}


// V34 IMAGE PROXY
// The browser no longer tries to display Google Drive directly.
// Apps Script reads the Drive file and returns a browser-safe data URL.
function getProductImageResponse(e) {
  try {
    const id = String((e && e.parameter && e.parameter.id) || "").trim();
    if (!id) throw new Error("Missing Drive file ID.");
    const file = DriveApp.getFileById(id);
    const blob = file.getBlob();
    const mime = blob.getContentType() || "image/jpeg";
    const base64 = Utilities.base64Encode(blob.getBytes());
    return ContentService.createTextOutput(JSON.stringify({ok:true,dataUrl:"data:" + mime + ";base64," + base64}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err.message || err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================
// VSCNTS INVOICE SAFETY SYSTEM
// Added after the existing VSCNTS code.
// ============================================================

/**
 * Archive the currently selected invoice instead of deleting it.
 * This HIDES the invoice tab. The invoice itself is preserved.
 */
function vscntsArchiveSelectedInvoice() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();
  const name = sheet.getName();

  if (name.indexOf("INV-") !== 0) {
    SpreadsheetApp.getUi().alert(
      "VSCNTS Invoice Safety",
      "Please select an invoice tab starting with INV-.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  if (ss.getSheets().length <= 1) {
    SpreadsheetApp.getUi().alert(
      "Cannot Archive",
      "Google Sheets requires at least one visible sheet.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  sheet.hideSheet();

  SpreadsheetApp.getUi().alert(
    "Invoice Archived",
    name + " was safely archived.\n\n" +
    "The invoice was NOT deleted. You can restore it anytime.",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}


/**
 * Restore the currently selected invoice.
 */
function vscntsRestoreSelectedInvoice() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const activeSheet = ss.getActiveSheet();
  const activeName = activeSheet.getName();

  let orderRef = "";

  // CASE 1:
  // If the selected sheet is already an invoice tab,
  // simply make it visible and open it.
  if (activeName.indexOf("INV-") === 0) {
    activeSheet.showSheet();
    ss.setActiveSheet(activeSheet, true);
    activeSheet.setActiveSelection("A1");
    SpreadsheetApp.flush();

    SpreadsheetApp.getUi().alert(
      "Invoice Restored",
      activeName + " is now visible and open.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  // CASE 2:
  // If the invoice tab was deleted, select the Order Ref
  // in ORDERS column A and recreate ONLY that invoice.
  if (activeName !== "ORDERS") {
    SpreadsheetApp.getUi().alert(
      "VSCNTS Invoice Safety",
      "Please go to the ORDERS sheet and select the Order Ref of the invoice you want to restore.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  const cell = activeSheet.getActiveCell();

  if (cell.getColumn() !== 1 || cell.getRow() < 2) {
    SpreadsheetApp.getUi().alert(
      "VSCNTS Invoice Safety",
      "Please select ONE Order Ref in Column A of the ORDERS sheet.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  orderRef = String(cell.getDisplayValue() || "").trim();

  if (!orderRef) {
    SpreadsheetApp.getUi().alert(
      "VSCNTS Invoice Safety",
      "The selected Order Ref is empty.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  try {
    // Recreate ONLY the selected invoice.
    const invoiceName = createInvoiceForOrder_(orderRef);

    const restoredSheet = ss.getSheetByName(invoiceName);

    if (!restoredSheet) {
      throw new Error(
        "The invoice was recreated but the invoice tab could not be found."
      );
    }

    // Make sure the restored invoice is visible.
    restoredSheet.showSheet();

    // Automatically open the restored invoice.
    ss.setActiveSheet(restoredSheet, true);
    restoredSheet.setActiveSelection("A1");

    SpreadsheetApp.flush();

    SpreadsheetApp.getUi().alert(
      "Invoice Restored",
      invoiceName + " has been restored and opened.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );

  } catch (err) {
    SpreadsheetApp.getUi().alert(
      "Restore Failed",
      String(err.message || err),
      SpreadsheetApp.getUi().ButtonSet.OK
    );
  }
}


/**
 * Restore every missing invoice based on the ORDERS sheet.
 *
 * If an invoice was accidentally deleted, the order data remains
 * in ORDERS, so this function recreates the invoice.
 */
function vscntsRestoreMissingInvoices() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const orders = ss.getSheetByName("ORDERS");

  if (!orders || orders.getLastRow() < 2) {
    SpreadsheetApp.getUi().alert(
      "VSCNTS Invoice Safety",
      "No order records were found.",
      SpreadsheetApp.getUi().ButtonSet.OK
    );
    return;
  }

  const values = orders.getDataRange().getValues();
  const headers = values[0].map(function(v) {
    return String(v).trim();
  });

  const refCol = headers.indexOf("Order Ref");

  if (refCol < 0) {
    throw new Error("Order Ref column not found.");
  }

  let restored = 0;
  let existing = 0;

  for (let r = 1; r < values.length; r++) {

    const ref = String(values[r][refCol] || "").trim();

    if (!ref) continue;

    const invoiceName =
      typeof sanitizeInvoiceSheetName_ === "function"
        ? sanitizeInvoiceSheetName_("INV-" + ref)
        : "INV-" + ref;

    const invoice = ss.getSheetByName(invoiceName);

    if (invoice) {
      existing++;
      continue;
    }

    // Use your existing invoice creation system.
    if (typeof createInvoiceForOrder_ === "function") {
      createInvoiceForOrder_(ref);
      restored++;
    } else {
      Logger.log(
        "Invoice creator function not found for " + ref
      );
    }
  }

  // Rebuild clickable Order Ref links if the existing function exists.
  if (typeof repairOrderRefLinks === "function") {
    repairOrderRefLinks();
  }

  SpreadsheetApp.getUi().alert(
    "VSCNTS Invoice Safety",
    "Restored: " + restored + " invoice(s)\n" +
    "Already existing: " + existing + " invoice(s)",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}


/**
 * Show all archived invoice tabs.
 */
function vscntsShowAllInvoiceTabs() {
  const ss = SpreadsheetApp.getActive();
  let shown = 0;

  ss.getSheets().forEach(function(sheet) {

    if (
      sheet.getName().indexOf("INV-") === 0 &&
      sheet.isSheetHidden()
    ) {
      sheet.showSheet();
      shown++;
    }

  });

  SpreadsheetApp.getUi().alert(
    "VSCNTS Invoice Safety",
    "Restored visibility of " + shown + " invoice tab(s).",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}


/**
 * Protect all existing invoice sheets against accidental editing.
 *
 * IMPORTANT:
 * Sheet protection does not prevent the spreadsheet owner
 * from deleting a sheet. The recovery function above is what
 * protects the invoice system from permanent data loss.
 */
function vscntsProtectAllInvoices() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let protectedCount = 0;

  ss.getSheets().forEach(function(sheet) {

    if (sheet.getName().indexOf("INV-") !== 0) {
      return;
    }

    const protections =
      sheet.getProtections(
        SpreadsheetApp.ProtectionType.SHEET
      );

    // Remove old protections created by this system.
    protections.forEach(function(protection) {
      try {
        if (
          protection.getDescription() ===
          "VSCNTS Invoice Protection"
        ) {
          protection.remove();
        }
      } catch (e) {}
    });

    try {
      const protection = sheet.protect();

      protection.setDescription(
        "VSCNTS Invoice Protection"
      );

      protection.setWarningOnly(false);

      protectedCount++;

    } catch (e) {
      Logger.log(
        "Could not protect " +
        sheet.getName() +
        ": " +
        e
      );
    }

  });

  SpreadsheetApp.getUi().alert(
    "VSCNTS Invoice Protection",
    "Protected " +
      protectedCount +
      " invoice sheet(s).",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}


/**
 * AUTOMATIC INVOICE CREATION FOR NEW / UPDATED ORDERS
 *
 * This is an installable onEdit trigger. When an order row is added or
 * edited directly in the ORDERS sheet, it automatically creates/refreshes
 * that order's invoice and makes Column A clickable.
 *
 * Website orders are still handled by doPost() -> createInvoiceForOrder_().
 * This trigger is mainly for orders entered/edited manually in ORDERS.
 */
function vscntsAutoInvoiceOnEdit(e) {
  if (!e || !e.range) return;

  const range = e.range;
  const sheet = range.getSheet();

  if (sheet.getName() !== "ORDERS") return;
  if (range.getRow() < 2) return;

  // ORDERS currently uses columns A:P. Ignore edits outside the order data.
  if (range.getColumn() > 16) return;

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(15000);

    const lastColumn = Math.min(16, sheet.getLastColumn());
    if (lastColumn < 1) return;

    const firstRow = range.getRow();
    const rowCount = range.getNumRows();
    const values = sheet.getRange(firstRow, 1, rowCount, lastColumn).getValues();
    const headers = sheet.getRange(1, 1, 1, lastColumn).getDisplayValues()[0]
      .map(function(v) { return String(v).trim(); });

    const refCol = headers.indexOf("Order Ref");
    const nameCol = headers.indexOf("Name");
    const scentOrdersCol = headers.indexOf("Scent Orders");

    if (refCol < 0) return;

    for (let i = 0; i < values.length; i++) {
      const row = values[i];
      const orderRef = String(row[refCol] || "").trim();

      if (!orderRef) continue;

      // Do not try to build an invoice from an incomplete blank/test row.
      // A valid order should at least have Order Ref + customer name + scent orders.
      if (nameCol >= 0 && !String(row[nameCol] || "").trim()) continue;
      if (scentOrdersCol >= 0 && !String(row[scentOrdersCol] || "").trim()) continue;

      try {
        // createInvoiceForOrder_() is intentionally used even if the invoice
        // already exists, so edits such as Shipping Fee, Payment Status, or
        // Order Status are reflected automatically in the invoice.
        createInvoiceForOrder_(orderRef);
      } catch (err) {
        console.error(
          "Automatic invoice creation failed for " + orderRef + ": " +
          String(err.message || err)
        );
      }
    }

    SpreadsheetApp.flush();
  } catch (err) {
    console.error("VSCNTS automatic invoice trigger error: " + String(err.message || err));
  } finally {
    try { lock.releaseLock(); } catch (err) {}
  }
}


/**
 * Install the automatic invoice trigger once.
 * Safe to run again: existing copies of this trigger are removed first.
 */
function vscntsInstallAutoInvoiceTrigger() {
  const functionName = "vscntsAutoInvoiceOnEdit";

  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    if (trigger.getHandlerFunction() === functionName) {
      ScriptApp.deleteTrigger(trigger);
    }
  });

  ScriptApp.newTrigger(functionName)
    .forSpreadsheet(SpreadsheetApp.getActive())
    .onEdit()
    .create();

  SpreadsheetApp.getUi().alert(
    "VSCNTS Automatic Invoice",
    "Automatic invoice creation is now ON.\n\n" +
    "New or edited orders in ORDERS will automatically get an invoice tab and a clickable Order Ref.",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}


/**
 * Create a VSCNTS Invoice Safety menu.
 *
 * This can be run once manually from Apps Script.
 */
function vscntsInstallInvoiceSafetyMenu() {

  const ss = SpreadsheetApp.getActive();

  SpreadsheetApp.getUi()
    .createMenu("VSCNTS Invoice Safety")
    .addItem(
      "Archive Selected Invoice",
      "vscntsArchiveSelectedInvoice"
    )
    .addItem(
      "Restore Selected Invoice",
      "vscntsRestoreSelectedInvoice"
    )
    .addSeparator()
    .addItem(
      "Restore Missing Invoices",
      "vscntsRestoreMissingInvoices"
    )
    .addItem(
      "Show All Invoice Tabs",
      "vscntsShowAllInvoiceTabs"
    )
    .addItem(
      "Enable Automatic Invoice Creation",
      "vscntsInstallAutoInvoiceTrigger"
    )
    .addItem(
      "Protect All Invoice Sheets",
      "vscntsProtectAllInvoices"
    )
    .addToUi();

  SpreadsheetApp.getUi().alert(
    "VSCNTS Invoice Safety",
    "Invoice Safety tools are now available under the VSCNTS Invoice Safety menu.",
    SpreadsheetApp.getUi().ButtonSet.OK
  );
}
