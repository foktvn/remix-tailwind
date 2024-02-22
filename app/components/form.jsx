export default function FormProject () {
    return (
        <form className="flex flex-col items-start gap-y-6" method="post" action="/project">
            <p className="flex justify-center gap-4"> 
                <label className="text-xl" htmlFor="project_name">Nama Projek : </label>
                <input className="rounded-md bg-transparent border" type="text" id="project_name" name="project_name" />
            </p>
            <p className="flex justify-center gap-4"> 
                <label className="text-xl" htmlFor="project_detail">Detail Projek : </label>
                <textarea className="rounded-md bg-transparent border" name="project_detail" id="project_detail" cols="30" rows="5"></textarea>
            </p>
            <button className="flex w-[450px] justify-center rounded-md bg-white text-gray-600 font-bold border border-gray-600 p-3">Simpan</button>
        </form> 
    )
}