// index.js

const axios = require('axios');
const cron = require('node-cron');
const nodemailer = require('nodemailer');

// Replace 'YOUR_API_ENDPOINT' with the actual API endpoint you want to call
const apiEndpoint = 'YOUR_API_ENDPOINT';

// Configure nodemailer with your email service provider details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password',
  },
});

// Replace 'your_email@gmail.com' and 'your_email_password' with your actual email and password

// Function to make the API call and send the result via email
const makeApiCallAndSendEmail = async () => {
  try {
    const response = await axios.get(apiEndpoint);
    const apiResult = response.data;

    // Compose email content
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: 'recipient_email@example.com',
      subject: 'API Call Result',
      text: `API Call Result:\n${JSON.stringify(apiResult, null, 2)}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.error('Error sending email:', error.message);
      }
      console.log('Email sent:', info.response);
    });
  } catch (error) {
    console.error('Error making API call:', error.message);
  }
};

// Schedule the API call and email sending every 30 minutes
cron.schedule('*/30 * * * *', () => {
  console.log('Making API call and sending email...');
  makeApiCallAndSendEmail();
});

console.log('API Caller started. Waiting for scheduled API calls and emails...');
