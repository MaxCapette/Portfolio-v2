import Link from 'next/link';
import './sneaker.css'
export default function Sneaker(){
    return (
        <Link href="/" className="sneaker">
        <p className=" logoNeon neon-violet text-4xl"><span className="neon-green">どん</span><span>だけ</span></p>
        
      </Link>
      
    );
}