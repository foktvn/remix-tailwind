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
      <body>
        <h1 className="flex w-screen h-screen items-center justify-center text-white bg-gray-800 text-4xl font-bold">Lets Try Remix</h1>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
