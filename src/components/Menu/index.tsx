import { useTheme } from 'styled-components';
import { MenuButton } from '../MenuButton';
import { MenuButtonContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import { MenuData } from '../../data/MenuData';
import { MenuProps } from '../../interface/menu';

export function Menu({ selectedMenu, setSelectedMenu }: MenuProps) {
  const colors = useTheme();
  const navigate = useNavigate();

  return (
    <MenuButtonContainer>
      {MenuData.map((title) => (
        <MenuButton
          title={title.title}
          key={title.title}
          color={colors['grayscale-900']}
          onClick={() => {
            setSelectedMenu(title.title);
            navigate(title.url);
          }}
          isActive={title.title === selectedMenu ? 'true' : 'false'}
        />
      ))}
    </MenuButtonContainer>
  );
}
