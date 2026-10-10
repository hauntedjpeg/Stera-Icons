import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RocketRegularProps = Omit<IconBaseProps, 'children'>;

const RocketRegular = memo(
  forwardRef<SVGSVGElement, RocketRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 19.25c.41 0 .75.34.75.75q-.02.49-.27.96c-.42.84-1.17 1.39-1.98 1.94-.81-.55-1.56-1.1-1.98-1.94q-.25-.46-.27-.96c0-.41.34-.75.75-.75zM12 7.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M11.58 1.38c.26-.17.58-.17.84 0 2.36 1.57 3.77 3.37 4.54 5.2.43 1.03.64 2.06.72 3.04l2.85 2.85q.26.27.21.64l-1 6.5c-.04.25-.2.47-.43.57s-.5.09-.7-.04l-3.82-2.39H9.2L5.4 20.14q-.35.2-.71.04c-.23-.1-.4-.32-.43-.57l-1-6.5q-.05-.37.21-.64l2.85-2.85q.1-1.48.72-3.03c.77-1.84 2.18-3.64 4.54-5.21M4.8 13.26l.77 5 2.42-1.51q-.21-.38-.47-.94c-.44-.99-.94-2.37-1.14-3.97l-.02-.14zm12.82-1.42c-.2 1.6-.7 2.98-1.14 3.97q-.26.56-.47.94l2.42 1.51.77-5-1.57-1.56zM12 2.91c-1.88 1.35-2.98 2.82-3.57 4.25-.65 1.54-.74 3.1-.56 4.5s.62 2.64 1.02 3.53q.31.68.52 1.04l.01.02h5.16v-.02q.22-.37.53-1.04c.4-.89.85-2.13 1.02-3.53s.09-2.96-.56-4.5c-.6-1.43-1.69-2.9-3.57-4.25" clipRule="evenodd" />
    </IconBase>
  ))
);

RocketRegular.displayName = 'RocketRegular';

// Triple export pattern
export { RocketRegular, RocketRegular as RocketRegularIcon, RocketRegular as SiRocketRegular };
export default RocketRegular;
export type { RocketRegularProps };
