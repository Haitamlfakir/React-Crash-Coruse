import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";

export function DeliveryOptions({deliveryOptions, cartItem}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOptions) => {
        let priceString = "FREE Shipping";
        if (deliveryOptions.priceCents > 0) {
          priceString = `${formatMoney(deliveryOptions.priceCents)} - Shipping`;
        }
        return (
          <div key={deliveryOptions.id} className="delivery-option">
            <input
              type="radio"
              checked={deliveryOptions.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(deliveryOptions.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D",
                )}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
