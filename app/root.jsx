import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import styles from "./styles/global.css";

export const links= () => [
  { rel: "stylesheet", href: styles },
];


export default function App() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta
          title="My Remix App"
          description="Welcome to my Remix app."
        />
        <Links />
      </head>
      <body className="bg-gray-400 text-white w-screen h-full">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
