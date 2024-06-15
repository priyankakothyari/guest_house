<template>
      <button @click="downloadPdf">Download PDF</button>
    <div class="container" ref="pdfContent">
      <header>
        <h2>{{ guestHouseName }}</h2>
        <h3>Reservation Confirmation</h3>
        <!-- <h4>Confirmation No: 121213</h4> -->
      </header>
  
      <section>
        <p>Dear Mr. {{ guestName }},</p>
        <p>
          Thank you for choosing {{ guestHouseName }}. We are pleased to confirm
          your reservation as under:
        </p>
        <!-- Table for reservation details -->
        <table>
          <tr>
            <td><strong>Guest Name:</strong></td>
            <td>{{ guestName }}</td>
          </tr>
          <tr>
            <td><strong>Number of Guests:</strong></td>
            <td>{{ totalGuests }}</td>
          </tr>
          <tr>
            <td><strong>Number of Rooms:</strong></td>
            <td>{{ totalRooms }}</td>
          </tr>
          <tr>
            <td><strong>Room Category:</strong></td>
            <td>Double Bed</td> <!-- Adjust if room category is dynamic -->
          </tr>
          <tr>
            <td><strong>Mode of Payment:</strong></td>
            <td>Online</td> <!-- Adjust if payment method is dynamic -->
          </tr>
          <tr>
            <td><strong>Check-in Date:</strong></td>
            <td>{{ formatDate(checkInDate) }}</td>
          </tr>
          <tr>
            <td><strong>Check-out Date:</strong></td>
            <td>{{ formatDate(checkOutDate) }}</td>
          </tr>
        </table>
      </section>
  
      <footer>
        <p class="text-center">
          Current government regulations require Indian residents to present proof
          of identity at the time of check-in. The proof of identity can be the
          guest’s driving license, passport, Aadhar card or voter’s identity card.
        </p>
        <div class="text-left">
          <p>Thank you for choosing our guest house!</p>
          <p>{{ ownerName }}</p>
          <p>+91 {{ contactNumber }}</p>
          <p>{{ guestHouseName }}</p>
        </div>
      </footer>
  
    
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import html2pdf from 'html2pdf.js';
  
  const route = useRoute();
  
  const guestHouseName = ref(route.params.guestHouseName || '');
  const ownerName = ref(route.params.ownerName || '');
  const contactNumber = ref(route.params.contactNumber || '');
  const guestName = ref(route.params.guestName || '');
  const totalGuests = ref(route.params.totalGuests || 0);
  const totalRooms = ref(route.params.totalRooms || 0);
  const hotelContact = ref(route.params.hotelContact || '');
  const checkInDate = ref(route.params.checkIn || '');
  const checkOutDate = ref(route.params.checkOut || '');
  
  const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  const getFormattedTimestamp = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
};
  
  const downloadPdf = () => {
    const element = document.querySelector('.container');
    const timestamp = getFormattedTimestamp();

    const filename = `${guestName.value}_${timestamp}.pdf`;

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };
  </script>
  
  <style scoped>
  body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    color: #333333; /* Dark text color */
  }
  
  .container {
    width: 100%;
    max-width: 800px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
  }
  
  header {
    padding: 10px;
    text-align: center;
  }
  
  h2 {
    margin: 0;
    color: #d00505; /* Slightly darker heading color */
  }
  
  h3 {
    margin-top: 5px;
    color: #444444; /* Slightly darker heading color */
  }
  
  section {
    margin-top: 20px;
    padding: 15px;
  }
  
  footer {
    margin-top: 20px;
    padding: 10px;
    border-top: 2px solid #ddd;
    color: #666666; /* Lighter footer text */
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
  }
  
  table td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  
  table td:first-child {
    width: 40%;
    font-weight: bold;
  }
  
  .text-left {
    text-align: left;
  }
  
  .text-center {
    text-align: center;
    color: #d00505;
  }
  
  button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  