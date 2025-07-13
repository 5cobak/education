import { Button } from 'src/shared/ui/Button';
import { useTheme } from 'src/shared/lib/theme/useTheme';
import SwitcherDark from './assets/icons/switcherDark.svg';
import SwitcherLight from './assets/icons/switcherLight.svg';
import Icon from 'src/shared/ui/Icon';
import { memo } from 'react';

export const ThemeSwitcher: React.FC = memo(() => {
    const { toggleTheme } = useTheme();

    return (
        <Button theme="clear" onClick={toggleTheme}>
            <Icon dark={<SwitcherDark />} light={<SwitcherLight />} />
        </Button>
    );
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
