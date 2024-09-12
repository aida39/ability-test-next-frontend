import Header from '../header';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
            <div>
                <Header />
                {children}
            </div>
    );
}