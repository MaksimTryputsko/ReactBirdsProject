import { TaskBird } from '@view/TaskBird/TaskBird';
import { BirdsBlock } from '../BirdsBlock/BirdsBlock';
import { useState } from 'react';
import { type IPropsBird } from './BirdSection.interface';
import { type IBird } from '@constans/interface/birds.interface';
import { type IMainBird } from '@constans/interface/IMainBird.interface';

const BirdSection: React.FC<IPropsBird> = ({ url, song, birds }) => {
  const [mainBird, setMainBird] = useState<IMainBird | IBird>({
    name: '******',
    img: 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg',
  });
  const [percentage, setPercentage] = useState(0);
  return (
    <>
      <TaskBird song={song} mainBird={mainBird} percentage={percentage} setPercentage={setPercentage} />
      <BirdsBlock
        birds={birds}
        url={url}
        setMainBird={setMainBird}
        setPercentage={setPercentage}
        percentage={percentage}
      />
    </>
  );
};

export { BirdSection };
