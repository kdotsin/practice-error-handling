class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class PaymentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PaymentError";
  }
}

function processOrder(productId: string, quantity: number, price: number) {
  if (quantity < 1) {
    throw new ValidationError('this is less than 1');
  }
  if (price < 0) {
    throw new PaymentError('Cannot have negative price');
  }
}

function handleOrder() {
  try {
    processOrder('1', 0, 10);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation Error: ", error.message);
    }
  }
  try {
    processOrder('1', 1, -1)
  } catch (error) {
    if (error instanceof PaymentError) {
      console.error("Payment Error: ", error.message);
    }
  }
}

handleOrder()
console.log('hello')