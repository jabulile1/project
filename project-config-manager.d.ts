/*! firebase-admin v11.6.0 */
import { ProjectConfig, UpdateProjectConfigRequest } from './project-config';
/**
 * Defines the project config manager used to help manage project config related operations.
 * This includes:
 * <ul>
 * <li>The ability to update and get project config.</li>
 */
export declare class ProjectConfigManager {
    private readonly authRequestHandler;
    /**
     * Get the project configuration.
     *
     * @returns A promise fulfilled with the project configuration.
     */
    getProjectConfig(): Promise<ProjectConfig>;
    /**
     * Updates an existing project configuration.
     *
     * @param projectConfigOptions - The properties to update on the project.
     *
     * @returns A promise fulfilled with the updated project config.
     */
    updateProjectConfig(projectConfigOptions: UpdateProjectConfigRequest): Promise<ProjectConfig>;
}
