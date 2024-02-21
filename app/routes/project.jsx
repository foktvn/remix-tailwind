import FormProject from "../components/form";

export default function Poject () {
    return (
        <div className="flex flex-col w-screen h-screen items-center p-6 gap-y-8">
            <h1 className="text-3xl font-bold">Masukan project baru anda</h1>
            <FormProject />
            <div className="grid grid-cols-3">
                <div className="w-full h-[500px] bg-white rounded-md">

                </div>
            </div>
        </div>
    )
}