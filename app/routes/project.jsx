import FormProject from "../components/form";
import { getStoreProject, storeProject } from "../data/project";
import { redirect } from "@remix-run/react";

export default function Poject () {
    return (
        <div className="flex flex-col w-screen h-screen p-6 gap-y-8 overflow-x-hidden">
            <h1 className="text-3xl font-bold">Masukan project baru anda</h1>
            <FormProject />
        </div>
    )
}

export async function action ({request}) {
    const formData = await request.formData();
    const projectData = Object.fromEntries(formData);
    // Add Validation
    const existingProject = await getStoreProject();
    projectData.id = new Date().toISOString(); 
    const updateProject = existingProject.concat(projectData);
    await storeProject(updateProject);
    return redirect('/project')
}