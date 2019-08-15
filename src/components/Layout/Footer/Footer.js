import React from 'react';

const Footer = () => (
  <footer className="Footer">
    <div className="Footer__links">
      <a href="https://www.instagram.com/?hl=en" alt="instagram link" aria-label="Visit our social media page on Instagram"><i class="fab fa-instagram"></i></a>
      <a href="https://www.facebook.com/" alt="facebook link" aria-label="Visit our social media page on Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com/?lang=en" alt="twitter link" aria-label="Visit our social media page on Twitter"><i class="fab fa-twitter"></i></a>
      <a href="https://twitter.com/?lang=en" alt="twitter link" aria-label="Visit our social media page on Twitter"><i class="fab fa-google-plus-g"></i></a>
    </div>

    <div className="Footer__copyright">
      <p  class="Footer__highlightText" >ARC SURF</p>
      <p class="Footer__text">&copy; Copyright 2019 Arc Surf Inc.</p>
      <p class="Footer__text">All rights reserved. Powered by Rainmaker</p>
    </div>
  </footer>
);

export default Footer;