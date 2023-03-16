import { ButtonBase } from '@mui/material';
import config from 'config';
import { Link } from 'react-router-dom';
import { menuOpen } from 'store/rtk/features/todo/todoSlice';
import { useAppSelector, useAppDispatch } from 'store/rtk/store';
import Logo from 'ui-component/Logo';

const LogoSection = () => {
  const defaultId = useAppSelector((state) => state.customization.defaultId);
  const dispatch = useAppDispatch();

  return (
    <ButtonBase
      disableRipple
      onClick={() => dispatch(menuOpen({ id: defaultId }))}
      component={Link}
      to={config.defaultPath}
    >
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
