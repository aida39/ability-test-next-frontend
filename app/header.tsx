import Link from 'next/link';

const header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <Link className="header__logo" href="/">
                    FashionablyLate
                </Link>
            </div>
        </header>
    );
};

export default header;