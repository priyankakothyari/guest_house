<template>
  <section class="hero-section">
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
          <div >
            <div class="booking-form">
              <h3>Generate Invoice</h3>
              <form @submit.prevent="submitForm">
                <div class="check-date">
                  <label for="guest_house_name">Guest House Name:<span class="required">*</span></label>
                  <input type="text" v-model="guestHouseName" id="guest_house_name" required>
                </div>
                <div class="check-date">
                  <label for="owner_name">Owner Name:<span class="required">*</span></label>
                  <input type="text" v-model="ownerName" id="owner_name" required>
                </div>
                <div class="check-date">
                  <label for="contact_number">Contact Number(Owner):<span class="required">*</span></label>
                  <input type="text" maxlength="10" pattern="\d{10}" v-model="contactNumber" id="contact_number" required>
                  <span v-if="errors.contactNumber" class="error-message">{{ errors.contactNumber }}</span>
                </div>
                <div class="check-date">
                  <label for="guest_name">Guest Name:<span class="required">*</span></label>
                  <input type="text" v-model="guestName" id="guest_name" required>
                </div>
                <div class="check-date">
                  <label for="total_guests">No of guests:<span class="required">*</span></label>
                  <input type="number" v-model="totalGuests" id="total_guests" required>
                </div>
                <div class="check-date">
                  <label for="total_rooms">Total Rooms:<span class="required">*</span></label>
                  <input type="number" v-model="totalRooms" id="total_rooms" required>
                </div>
                <div class="check-date">
                  <label for="check_in">Check In:<span class="required">*</span></label>
                  <input type="date" v-model="checkIn" id="check_in" required>
                </div>
                <div class="check-date">
                  <label for="check_out">Check Out:<span class="required">*</span></label>
                  <input type="date" v-model="checkOut" id="check_out" required>
                  <span v-if="errors.checkOut" class="error-message">{{ errors.checkOut }}</span>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const guestHouseName = ref('');
const ownerName = ref('');
const contactNumber = ref('');
const guestName = ref('');
const totalGuests = ref(0);
const totalRooms = ref(0);
const checkIn = ref(null);
const checkOut = ref(null);
const errors = ref({
  contactNumber: '',
  checkOut: '',
});

const router = useRouter();

const validateForm = () => {
  let valid = true;
  errors.value.contactNumber = '';
  errors.value.checkOut = '';

  if (contactNumber.value.length !== 10) {
    errors.value.contactNumber = 'Contact number must be exactly 10 digits long.';
    valid = false;
  }

  if (new Date(checkOut.value) <= new Date(checkIn.value)) {
    errors.value.checkOut = 'The check-out date should be at least one day after the check-in date.';
    valid = false;
  }

  return valid;
};

const submitForm = () => {
  if (validateForm()) {
    // Redirect to display page
    router.push({ name: 'Invoice', params: { 
        guestHouseName: guestHouseName.value,
        ownerName: ownerName.value,
        contactNumber: contactNumber.value,
        guestName: guestName.value,
        totalGuests: totalGuests.value,
        totalRooms: totalRooms.value,
        checkIn:checkIn.value,
        checkOut:checkOut.value,
      } });
  }
};
</script>

<style scoped>
.required {
  color: red;
}

.error-message {
  color: red;
  font-size: 12px;
}

.hero-section {
  background-image: url('@/assets/img/hero/hero-1.jpg'); /* Path to your background image */
  background-size: cover; /* Cover the entire section */
  background-position: center; /* Center the background image */
}

.toggle-btn {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.toggle-btn:hover {
  background-color: #0056b3;
}
</style>
