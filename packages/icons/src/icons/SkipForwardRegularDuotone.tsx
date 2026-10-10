import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipForwardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SkipForwardRegularDuotone = memo(
  forwardRef<SVGSVGElement, SkipForwardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.5 4.25c.41 0 .75.34.75.75v14c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5c0-.41.34-.75.75-.75" opacity={.4} />
        <path fillRule="evenodd" d="M5.54 4.12c.32.02.61.15.85.28q.42.23 1.01.63l7.02 4.68q.61.4 1.01.71c.26.21.52.47.66.81.2.5.2 1.05 0 1.54-.14.34-.4.6-.66.8q-.4.32-1.01.72L7.4 18.97q-.59.4-1 .63c-.28.15-.62.3-1 .28-.52-.03-.99-.28-1.3-.7-.23-.3-.3-.66-.32-.97q-.04-.49-.03-1.2V7q0-.71.03-1.2c.03-.3.1-.67.32-.98.31-.4.78-.66 1.3-.69zm-.07 1.5q-.1 0-.16.09l-.04.22c-.02.24-.02.56-.02 1.06V17c0 .5 0 .82.02 1.06l.04.22q.06.07.16.09.03 0 .21-.1.29-.15.9-.56l7-4.68c.44-.29.72-.47.91-.63.2-.15.22-.22.22-.22q.08-.19 0-.38s-.03-.07-.22-.22c-.2-.16-.47-.34-.9-.63L6.57 6.28c-.41-.28-.68-.45-.89-.57z" clipRule="evenodd" />
    </IconBase>
  ))
);

SkipForwardRegularDuotone.displayName = 'SkipForwardRegularDuotone';

// Triple export pattern
export { SkipForwardRegularDuotone, SkipForwardRegularDuotone as SkipForwardRegularDuotoneIcon, SkipForwardRegularDuotone as SiSkipForwardRegularDuotone };
export default SkipForwardRegularDuotone;
export type { SkipForwardRegularDuotoneProps };
