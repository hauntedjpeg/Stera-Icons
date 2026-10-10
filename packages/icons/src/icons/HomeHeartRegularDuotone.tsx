import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeHeartRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeHeartRegularDuotone = memo(
  forwardRef<SVGSVGElement, HomeHeartRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.02 2.19c.64-.18 1.32-.18 1.96 0 .77.2 1.43.74 2.43 1.52l3.55 2.77c.7.55 1.17.9 1.5 1.36q.45.6.64 1.3c.16.55.15 1.14.15 2.03v3.63q.01 1.34-.05 2.2-.04.87-.39 1.57c-.38.75-1 1.36-1.74 1.74q-.7.34-1.57.4-.86.05-2.2.04H8.7q-1.34.01-2.2-.05-.87-.04-1.57-.39c-.75-.38-1.36-1-1.74-1.74-.24-.47-.34-.99-.4-1.57q-.05-.86-.04-2.2v-3.63c0-.89 0-1.48.15-2.03q.2-.7.63-1.3c.34-.46.8-.81 1.51-1.36L8.59 3.7c1-.78 1.66-1.32 2.43-1.52m1.57 1.44q-.6-.15-1.18 0c-.4.11-.8.4-1.9 1.26L5.96 7.66c-.76.6-1.03.82-1.22 1.07q-.28.38-.4.81c-.08.31-.09.66-.09 1.63v3.63c0 .92 0 1.57.04 2.07s.12.8.23 1.01q.37.73 1.1 1.1c.22.11.51.19 1 .23.51.04 1.16.04 2.08.04h6.6c.92 0 1.57 0 2.07-.04s.8-.12 1.01-.23q.73-.37 1.1-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08v-3.63c0-.97 0-1.32-.1-1.63q-.1-.44-.39-.8c-.19-.26-.46-.48-1.22-1.08L14.49 4.9c-1.1-.86-1.5-1.15-1.9-1.26" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M13.9 8.75c1.57 0 2.85 1.26 2.85 2.83 0 1.15-.62 2.03-.83 2.31-1.03 1.43-2.47 2.42-3.45 3.2-.28.21-.66.21-.94 0-.98-.78-2.42-1.77-3.45-3.2-.2-.28-.83-1.16-.83-2.31 0-1.57 1.28-2.83 2.85-2.83.73 0 1.4.28 1.9.73.5-.45 1.17-.73 1.9-.73m0 1.5c-.54 0-1 .32-1.22.78-.12.26-.39.43-.68.43s-.56-.17-.68-.43c-.21-.46-.68-.78-1.22-.78-.75 0-1.35.6-1.35 1.33 0 .64.36 1.17.54 1.44.76 1.04 1.75 1.79 2.71 2.53.89-.69 1.8-1.38 2.54-2.31l.16-.22c.2-.27.55-.8.55-1.44 0-.73-.6-1.33-1.35-1.33" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeHeartRegularDuotone.displayName = 'HomeHeartRegularDuotone';

// Triple export pattern
export { HomeHeartRegularDuotone, HomeHeartRegularDuotone as HomeHeartRegularDuotoneIcon, HomeHeartRegularDuotone as SiHomeHeartRegularDuotone };
export default HomeHeartRegularDuotone;
export type { HomeHeartRegularDuotoneProps };
