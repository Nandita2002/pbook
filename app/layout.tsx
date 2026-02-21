import "./globals.css"

export const metadata = {
  title: "PBook",
  description: "Political Engagement Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B1120] text-white">
        {children}
      </body>
    </html>
  )
}
