export function calculateTotal(cartItems) {
  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return parseFloat(total.toFixed(2));
}


export function CalculateDiscount(totalPrice, discountPerc) {
  if (!discountPerc || discountPerc <= 0) return totalPrice;
  const discountAmount = (totalPrice * discountPerc) / 100;
  return parseFloat((totalPrice - discountAmount).toFixed(2));
}

export function getCouponDiscount(coupon, totalPrice) {
  let discountPerc = 0;

  switch (coupon?.toUpperCase()) {
    case "FOOFIFY10":
      discountPerc = 10;
      break;
    case "FOOFIFY20":
      discountPerc = 20;
      break;
    case "FOOFIFY30":
      discountPerc = 30;
      break;
    default:
      discountPerc = 0;
  }

  const discountAmount = (totalPrice * discountPerc) / 100;

  return {
    isValidCoupon: discountPerc > 0,
    couponDiscountPercentage: discountPerc,
    couponDiscountAmount: parseFloat(discountAmount.toFixed(2)),
  };
}
