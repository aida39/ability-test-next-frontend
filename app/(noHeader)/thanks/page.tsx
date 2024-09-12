import Link from 'next/link';
import "../../styles/thanks.css";

export default function ThanksPage() {
    return (
        <div className="thanks__content">
            <div className="thanks__inner">
                <p className="thanks__text">お問い合わせありがとうございました</p>
                <Link className="thanks__button" href="/">HOME</Link>
            </div>
            <div className="thanks__background">
                <p>Thank you</p>
            </div>
        </div>
    );
}