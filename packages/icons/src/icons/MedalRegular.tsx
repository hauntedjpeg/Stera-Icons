import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedalRegularProps = Omit<IconBaseProps, 'children'>;

const MedalRegular = memo(
  forwardRef<SVGSVGElement, MedalRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.8 1.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v1.82c0 .67.01 1.18-.15 1.64q-.2.59-.64 1.03c-.34.35-.8.57-1.4.87l-1.81.9v.04h-.07l-1.47.73c1.53 1.03 2.54 2.78 2.54 4.77 0 3.18-2.57 5.75-5.75 5.75S6.25 20.18 6.25 17c0-1.99 1-3.74 2.54-4.77l-1.47-.73h-.07v-.04l-1.82-.9c-.59-.3-1.05-.52-1.4-.87q-.43-.45-.63-1.03c-.16-.46-.15-.97-.15-1.64V5.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM12 12.75q-.68 0-1.3.2C9 13.5 7.75 15.11 7.75 17c0 2.35 1.9 4.25 4.25 4.25s4.25-1.9 4.25-4.25c0-1.9-1.24-3.5-2.95-4.05q-.62-.2-1.3-.2m-3.25-2.21 1.8.9h.01q.5-.14 1.04-.18h.08l.32-.01.32.01h.08q.54.04 1.05.18l1.8-.9V2.75h-6.5zM7.2 2.75q-.83 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.82c0 .77.01.98.07 1.15q.1.27.29.47c.12.13.3.23 1 .57l1.14.58V2.75zm9.55 7.04 1.15-.58c.69-.34.87-.44 1-.57q.18-.2.28-.47c.06-.17.07-.38.07-1.15V5.2q0-.83-.02-1.25c-.03-.29-.07-.43-.12-.52q-.18-.35-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02h-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedalRegular.displayName = 'MedalRegular';

// Triple export pattern
export { MedalRegular, MedalRegular as MedalRegularIcon, MedalRegular as SiMedalRegular };
export default MedalRegular;
export type { MedalRegularProps };
