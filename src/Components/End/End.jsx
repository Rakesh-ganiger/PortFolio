import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const footerContainer = "bg-gray-950 text-cyan-600 w-full";
const footerWrapper = `flex flex-col justify-center items-center gap-5 p-4`;
const logo = `mt-5 md:mt-7 text-xl font-semibold text-amber-600 `;
const socialMediaWrapper = `flex justify-center items-center gap-5`;
const socialMediaIcon = `hover:text-cyan-400 text-2xl`;
const copyright = `mb-5 text-light text-amber-500 flex flex-col md:flex-row md:gap-3 justify-center items-center`;

function End() {
  return (
    <footer id="Footer" className={footerContainer}>
      <div className={footerWrapper}>
        <div className={logo}>Your Name</div>
        <div className={socialMediaWrapper}>
          <a className={socialMediaIcon} href="https://github.com/Rakesh-ganiger" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a className={socialMediaIcon} href="mailto:your-rakeshganiger64@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail />
          </a>
          <a className={socialMediaIcon} href="https://www.linkedin.com/in/rakesh-ganiger-2ba44825b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <div className={copyright}>
          <span>&copy; {new Date().getFullYear()} Your Name</span>
        </div>
      </div>
    </footer>
  );
}

export default End;