import '../styles/HeroSection.scss';
import ConnectButton from './ConnectButton';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Web3 Revolution</h1>
        <p>
          Experience the future of decentralized applications with our secure and intuitive platform. 
          Connect your wallet to get started on your Web3 journey.
        </p>
        <ConnectButton />
      </div>
    </section>
  );
}