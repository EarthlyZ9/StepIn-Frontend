import { ProjectUpdateParam } from "./projectApi.type";

export class ProjectApi {
  async getProjects(): Promise<Project[]> {
    // TODO: define function
  }
  async patchProject(id: number, body: ProjectUpdateParam): Promise<Project> {
    // TODO: define function
  }
}
