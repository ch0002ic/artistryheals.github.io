const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-6 bg-[#5b352e] text-white text-center z-10"
      style={{ fontFamily: 'Open Sans, sans-serif' }}
    >
      <p>&copy; 2025 Artistry Heals. All rights reserved.</p>
      <p>
        Follow us on
        <a
          href="https://www.facebook.com/profile.php?id=61562706217997"
          className="text-[#ff66c4] hover:text-opacity-80 ml-1"
        >
          Facebook
        </a>
        ,
        <a
          href="https://www.instagram.com/artistryheals.official"
          className="text-[#ff66c4] hover:text-opacity-80 ml-1"
        >
          Instagram
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer; 