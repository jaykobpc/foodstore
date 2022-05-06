<template>
  <div class="orderview__groupbox">
    <h3 class="orderview__groupbox__title">Order Details</h3>
    <section class="orderview__contextbox">
      <table class="orderview__groupbox__table">
        <tbody>
          <tr>
            <td>1x</td>
            <td>Squid sweet and sour salad</td>
            <td align="right" class="text-green">$19.99</td>
          </tr>
          <tr>
            <td>1x</td>
            <td>Squid sweet and sour salad</td>
            <td align="right" class="text-green">$19.99</td>
          </tr>
          <tr>
            <td></td>
            <td>Teriyaki Sauce</td>
            <td align="right" class="text-green">$1.99</td>
          </tr>
          <tr>
            <td></td>
            <td>Chilli Omlette</td>
            <td align="right" class="text-green">$1.99</td>
          </tr>
          <tr>
            <td>1x</td>
            <td>Squid sweet and sour salad</td>
            <td align="right" class="text-green">$19.99</td>
          </tr>
        </tbody>
      </table>
      <div class="orderview__groupbox__row">
        <h3 class="orderview__groupbox__smtitle">Subtotal</h3>
        <p class="text-green orderview__groupbox__smtext">$32.99</p>
      </div>
      <div class="orderview__groupbox__row">
        <h3 class="orderview__groupbox__smtitle">Shipping</h3>
        <p class="text-green orderview__groupbox__smtext">$3.99</p>
      </div>
      <div class="orderview__groupbox__col">
        <div class="orderview__groupbox__subrow">
          <h3 class="orderview__groupbox__smtitle">Total payment</h3>
          <p class="text-green orderview__groupbox__smtext">$36.00</p>
        </div>
        <div class="orderview__groupbox__subrow">
          <h3 class="orderview__groupbox__smtitle">Duration</h3>
          <p class="text-green orderview__groupbox__smtext">15-20 mins</p>
        </div>
        <div class="orderview__groupbox__subrow">
          <h3 class="orderview__groupbox__smtitle">Address</h3>
          <p class="text-green orderview__groupbox__smtext">Hse No 5, Royal Palms, Kiambu</p>
        </div>
        <div class="orderview__groupbox__subrow">
          <h3 class="orderview__groupbox__smtitle">Payment</h3>
          <p class="text-green orderview__groupbox__smtext">Payment on delivery (Cash)</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
};
</script>
