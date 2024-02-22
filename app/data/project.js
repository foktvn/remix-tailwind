import fs from "fs/promises";

export async function getStoreProject () {
    const rawFileContents = await fs.readFile('project.json', {encoding: 'utf-8'});
    const data = JSON.parse(rawFileContents);
    const storedProject = data.project ?? [];
    return storedProject;
}

export function storeProject (project) {
    return fs.writeFile('note.json', JSON.stringify({project : project || []}));
}