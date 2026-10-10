import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RocketRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RocketRegularDuotone = memo(
  forwardRef<SVGSVGElement, RocketRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.32 9.62q-.07 1.08.04 2.08L4.8 13.26l.77 5 2.42-1.51.12.22.19.32.05.09.02.02v.01q.24.33.63.34h.21L5.4 20.14q-.35.2-.71.04c-.23-.1-.4-.32-.43-.57l-1-6.5c-.04-.23.04-.47.21-.64zM20.53 12.47q.26.27.21.64l-1 6.5c-.04.25-.2.47-.43.57s-.5.09-.7-.04l-3.82-2.39H15c.25 0 .49-.13.62-.34h.01l.02-.03.05-.09.2-.32.11-.22 2.42 1.51.77-5-1.57-1.56q.12-1 .05-2.08zM12 7.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" opacity={0.4} />
        <path d="M13.5 19.25c.41 0 .75.34.75.75v.12l-.04.2q-.05.27-.23.64c-.25.5-.71 1.1-1.56 1.66l-.41.28-.42-.27c-.85-.57-1.32-1.17-1.57-1.67q-.19-.37-.23-.63l-.03-.2v-.08l-.01-.03V20c0-.41.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M11.58 1.38c.26-.17.58-.17.84 0 2.36 1.57 3.77 3.37 4.54 5.2.76 1.84.86 3.66.66 5.26s-.7 2.99-1.14 3.97q-.34.75-.59 1.16l-.19.32-.05.09-.02.02v.01q-.2.29-.54.33l-.09.01H8.9c-.2-.03-.4-.15-.52-.33l-.01-.02-.02-.02-.05-.09-.2-.32q-.24-.41-.58-1.16c-.44-.98-.94-2.37-1.14-3.97s-.1-3.42.66-5.25c.77-1.84 2.18-3.64 4.54-5.21M12 2.9c-1.88 1.35-2.98 2.82-3.57 4.25-.65 1.54-.74 3.1-.56 4.5s.62 2.64 1.02 3.53q.31.68.52 1.04l.01.02h5.16v-.02q.22-.37.53-1.04c.4-.89.85-2.13 1.02-3.53s.09-2.96-.56-4.5c-.6-1.43-1.69-2.9-3.57-4.25" clipRule="evenodd" />
    </IconBase>
  ))
);

RocketRegularDuotone.displayName = 'RocketRegularDuotone';

// Triple export pattern
export { RocketRegularDuotone, RocketRegularDuotone as RocketRegularDuotoneIcon, RocketRegularDuotone as SiRocketRegularDuotone };
export default RocketRegularDuotone;
export type { RocketRegularDuotoneProps };
