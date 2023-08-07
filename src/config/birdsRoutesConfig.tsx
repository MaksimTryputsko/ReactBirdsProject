import {
  END_GAME,
  WARM_UP_PAGE,
  SPARROW_PAGE,
  SINGERS_BIRDS_PAGE,
  FORESTS_BIRDS_PAGE,
  PREDATORY_BIRDS_PAGE,
  MARINE_BIRDS,
} from '@constans/path';
import { warmUp, sparrowBirds, forestsBirds, singersBirds, predatoryBirds, marineBirds } from '@constans/birds/birds';

export const birdsRoutesConfig = [
  {
    path: WARM_UP_PAGE,
    nextPath: SPARROW_PAGE,
    song: warmUp[0].song,
    birds: warmUp,
  },
  {
    path: SPARROW_PAGE,
    nextPath: FORESTS_BIRDS_PAGE,
    song: sparrowBirds[0].song,
    birds: sparrowBirds,
  },
  {
    path: FORESTS_BIRDS_PAGE,
    nextPath: SINGERS_BIRDS_PAGE,
    song: forestsBirds[2].song,
    birds: forestsBirds,
  },
  {
    path: SINGERS_BIRDS_PAGE,
    nextPath: PREDATORY_BIRDS_PAGE,
    song: singersBirds[5].song,
    birds: singersBirds,
  },
  {
    path: PREDATORY_BIRDS_PAGE,
    nextPath: MARINE_BIRDS,
    song: predatoryBirds[2].song,
    birds: predatoryBirds,
  },
  {
    path: MARINE_BIRDS,
    nextPath: END_GAME,
    song: marineBirds[0].song,
    birds: marineBirds,
  },
];
