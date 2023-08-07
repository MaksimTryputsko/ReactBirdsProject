import { Link } from 'react-router-dom';
import { Button } from '@shared/Button/Button';
import { type IButton } from '@shared/Button/Button.interface';

const ButtonNavigation: React.FC<IButton> = ({ url = '', onClick, disabled, designType }) => (
  <Link to={`../${url}`}>
    <Button url={url} onClick={onClick} disabled={disabled} designType={designType}>
      Next Level
    </Button>
  </Link>
);

export { ButtonNavigation };
