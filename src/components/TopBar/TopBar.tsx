import { Box, ButtonGroup } from '@mui/material';
import { TopBarContainer } from './TopBar.style';
import { NavigationButton } from './NavigationButton/NavigationButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Logo from '../../assets/ESCNLogo.svg';
import { ColoredRoundButton, LightRoundButton } from '../UI/Buttons/RoundButton.style';

export const TopBar = () => {
  return (
    <TopBarContainer>
      <Logo style={{ height: '5rem', width: '10rem' }} />
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <ButtonGroup sx={{ gap: '1rem' }}>
          <NavigationButton label="Home" />
          <NavigationButton label="Projeto" />
          <NavigationButton label="Baixe o App" />
          <NavigationButton label="Contato" />
        </ButtonGroup>
        <LightRoundButton>Entrar</LightRoundButton>
        <ColoredRoundButton>
          Cadastrar
          <ArrowOutwardIcon sx={{ height: '1.1rem' }} />
        </ColoredRoundButton>
      </Box>
    </TopBarContainer>
  );
};
