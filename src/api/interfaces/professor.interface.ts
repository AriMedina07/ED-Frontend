import { IProfessor } from '../../interfaces/professor';

export abstract class ProfessorApi {
   abstract getProfessors(): Promise<IProfessor[]>;
}
