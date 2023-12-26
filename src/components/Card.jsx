import qrcode from "../assets/images/image-qr-code.png";
import './Card.css';

export default function Card() {
  return (
    <div className='card'>
      <img src={qrcode} alt="qr code" className="qr"/>
      <h1 className="card-title">Improve your front-end skills by building projects</h1>
      <p className="card-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  );
}
