import { IModalRepository } from './IModalRepository';

export interface IModalRepositoryFactory {
    create(): IModalRepository;
}
