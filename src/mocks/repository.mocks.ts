import { Repository } from '../models/repository.interface';
import { USER_LIST } from './user.mocks';

const repositoryLists: Repository[] = [
  {
    name: 'Ionic 3 Camera',
    description: 'This repository shows the usage of the camera.',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 1 GPS',
    description: 'This repository shows the usage of the gps.',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 2 Photo',
    description: 'This repository shows the usage of the phot.',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 4 Radio',
    description: 'This repository shows the usage of the radio.',
    owner: USER_LIST[0]
  }
]

export const REPOSITORY_LIST = repositoryLists;
