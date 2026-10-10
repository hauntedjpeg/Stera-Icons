import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubePackageBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubePackageBoldDuotone = memo(
  forwardRef<SVGSVGElement, CubePackageBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 10.86 2.43-1.35c.29.17.43.28.54.4q.3.32.43.73c.05.14.07.3.08.57L13 12.59v7.65q-.22.09-.4.12-.6.12-1.2 0-.19-.03-.4-.12v-7.65L4.07 8.74l.08-.33q.2-.61.64-1.09.14-.15.33-.29zM18.88 7.03q.2.15.33.29.43.47.64 1.1l.08.32-2.59 1.43-.04-.16q-.27-.82-.86-1.46l-.1-.1z" opacity={0.4} />
        <path fillRule="evenodd" d="M11 1.68q1-.21 2 0c.8.16 1.52.57 2.6 1.17l2.6 1.45c1.13.63 1.9 1.05 2.48 1.66q.72.8 1.07 1.83c.26.8.25 1.67.25 2.98v2.46c0 1.3.01 2.18-.25 2.98q-.36 1.03-1.07 1.83c-.57.61-1.35 1.03-2.49 1.66l-2.6 1.45c-1.07.6-1.8 1.01-2.58 1.17q-1.01.21-2.02 0c-.78-.16-1.5-.57-2.58-1.17L5.8 19.7c-1.14-.63-1.92-1.04-2.49-1.66q-.72-.8-1.07-1.82C2 15.42 2 14.54 2 13.23v-2.46c0-1.3-.01-2.18.25-2.98q.36-1.03 1.07-1.83c.57-.61 1.35-1.03 2.49-1.66l2.6-1.45c1.07-.6 1.8-1 2.58-1.17m1.6 1.96q-.6-.12-1.2 0c-.4.08-.79.28-1.84.86l4.96 2.75c.83.47 1.46.8 1.92 1.3q.59.64.86 1.46c.21.65.2 1.36.2 2.31V13c0 .55-.45 1-1 1s-1-.45-1-1v-.68c0-1.1-.01-1.41-.1-1.68q-.14-.41-.43-.73c-.2-.2-.47-.37-1.42-.9L7.5 5.63l-.72.4c-1.26.7-1.68.95-1.99 1.28q-.43.48-.64 1.1c-.14.41-.15.9-.15 2.35v2.46c0 1.44.01 1.94.15 2.36q.2.61.64 1.09c.3.33.73.58 1.99 1.28l2.6 1.44c1.19.66 1.6.88 2.02.96q.6.12 1.2 0c.42-.08.83-.3 2.02-.96l2.6-1.44c1.26-.7 1.68-.95 1.99-1.28q.43-.47.64-1.1c.14-.41.15-.9.15-2.35v-2.46c0-1.44-.01-1.94-.15-2.36q-.2-.61-.64-1.09c-.3-.33-.73-.58-1.99-1.27l-2.6-1.45c-1.19-.66-1.6-.88-2.02-.96" clipRule="evenodd" />
    </IconBase>
  ))
);

CubePackageBoldDuotone.displayName = 'CubePackageBoldDuotone';

// Triple export pattern
export { CubePackageBoldDuotone, CubePackageBoldDuotone as CubePackageBoldDuotoneIcon, CubePackageBoldDuotone as SiCubePackageBoldDuotone };
export default CubePackageBoldDuotone;
export type { CubePackageBoldDuotoneProps };
