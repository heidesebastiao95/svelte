import type { PageLoad } from './$types';
import type { ProjectDTO } from '../main/dtos/ProjectDTO';
import type { Project } from '../main/entity/Project';
import type { APIResponse } from '../main/dtos/APIResponse';



export const load: PageLoad = async ({fetch}) => {

    let result : Project[] = [];


    
    return {result};
};
