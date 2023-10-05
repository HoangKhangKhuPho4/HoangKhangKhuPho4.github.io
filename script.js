document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit_contact', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    // Xử lý dữ liệu ở đây, như lưu vào cơ sở dữ liệu hoặc gửi email

    res.send('Thank you for your message!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// JavaScript
const elements = document.querySelectorAll('.expand-on-scroll');

window.addEventListener('scroll', () => {
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight) {
            element.classList.add('active');
        }
    });
});
