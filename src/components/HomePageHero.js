import { Link } from "react-router-dom";
import "./HomePageHero.css";
export const HomePageHero = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <p> Dapatkan barang impian Anda sekarang. Jelajahi katalog produk kami dan temukan pilihan barang yang sesuai dengan kebutuhan Anda.</p>
        <Link to="/shop" className="hero__link">
          Shop Now
        </Link>
      </div>
    </div>
  );
};
