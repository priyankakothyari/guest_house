<template>
  <section class="hero-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="hero-text">
            <font-awesome-icon :icon="['fas', 'house']" />
            <h1>Our Services</h1>
            <p>Register yourself and use our free services.</p>
            <a href="#" class="primary-btn">Discover Now</a>
          </div>
        </div>
        <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
          <div class="booking-form">
            <h3>Register Your Hotel</h3>
            <form action="#">
              <div class="check-date">
                <label for="owner_name">Owner Name:<span class="required">*</span></label>
                <input type="text" class="" id="owner_name" required>
                <i class=""></i>
              </div>
              <div class="check-date">
                <label for="contact_number">Contact Number:<span class="required">*</span></label>
                <input type="text" class="" id="contact_number" required>
                <i class=""></i>
              </div>
              <div class="check-date">
                <label for="total_rooms">Total Rooms:<span class="required">*</span></label>
                <input type="number" class="" id="total_rooms" required>
                <i class=""></i>
              </div>
              <div class="check-date">
                <label for="hotel_contact">Hotel Contact Details:<span class="required">*</span></label>
                <input type="text" class="" id="hotel_contact" required>
                <i class=""></i>
              </div>
              <div class="select-option">
                <label for="logo">Logo:</label>
                <input type="file" name="logo_image" id="logo">
              </div>

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.required {
  color: red;
}

.hero-section {
  background-image: url('@/assets/img/hero/hero-1.jpg'); /* Path to your background image */
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the background image */
}
</style>
