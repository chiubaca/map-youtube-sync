import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-col min-h-screen">
        <header className="flex flex-row  justify-between p-10">
          <span>My Store</span>

          <ul className="flex flex-row gap-10">
            <li>About</li>
            <li>Checkout 🧺</li>
          </ul>
        </header>

        <div className=" flex-1">{children}</div>

        <footer className=" text-center p-10">My Store ™️ (2022) </footer>
      </body>
    </html>
  );
}
