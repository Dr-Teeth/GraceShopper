export function getTotalQuantity(orders, loggedInUserId) {
    let totalQuantity = 0;
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].userId === loggedInUserId) {
        totalQuantity += orders[i].quantity;
      }
    }
    return totalQuantity;
  }