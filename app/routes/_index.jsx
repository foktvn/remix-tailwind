import { Link } from "@remix-run/react"

export default function Home() {
    return  (
        <div className="flex flex-col bg-[url('/bg.jpg')] w-screen overflow-x-hidden">
            <div className="flex flex-col w-full h-screen items-center justify-center gap-y-6">
               <img src="/laptop.png" width={250} alt="" />
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-400">Fenny Oktaviani</h1>
                <div className="flex text-lg gap-x-4">
                    <Link className="border border-white p-1 rounded-md hover:border-purple-600 hover:text-purple-600" to="/education
                    ">Education</Link>
                    <Link className="border border-white p-1 rounded-md hover:border-purple-600 hover:text-purple-600"  to="/experience">Experience</Link>
                    <Link className="border border-white p-1 rounded-md hover:border-purple-600 hover:text-purple-600"  to="/project">Project</Link>
                </div>
                <p className="font-bold text-center px-36">"Passionate Junior Software Engineer with a zest for exploring diverse realms in the tech world. Currently immersed in Frontend development and QA, I'm eager to deepen my knowledge and skills further. Ready to embrace challenges, I constantly seek opportunities to learn and grow. 🚀💻 #JuniorDev #WebDevelopmentExplorer #FrontendDev #QAEnthusiast"</p>
            </div>
           
        </div>
    )
}