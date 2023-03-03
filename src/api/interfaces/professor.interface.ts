import { IProfessor } from '../../interfaces/professor';

export abstract class IProfessorApi {
   abstract getProfessors(): Promise<IProfessor[]>;
}
