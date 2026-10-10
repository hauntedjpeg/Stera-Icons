import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeadphonesRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeadphonesRegularDuotone = memo(
  forwardRef<SVGSVGElement, HeadphonesRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.27 2.35c2.83.08 5.35 1.36 7.08 3.34 1.57 1.8 2.03 4.03 2 6.26-.03 2.21-.56 4.54-1.02 6.61-.09.4-.48.65-.88.58l.54-2.42c.16-.73 0-1.46-.41-2.03q.24-1.4.27-2.77c.03-2.02-.39-3.82-1.63-5.24-1.42-1.63-3.46-2.69-5.76-2.82h-.92C9.24 4 7.2 5.06 5.78 6.68 4.54 8.1 4.12 9.9 4.15 11.92q.04 1.36.27 2.77c-.4.57-.57 1.3-.41 2.03l.53 2.42c-.4.07-.78-.18-.87-.58-.46-2.07-.98-4.4-1.02-6.61-.03-2.23.43-4.45 2-6.26C6.44 3.65 9.07 2.35 12 2.35z" opacity={.4} />
        <path fillRule="evenodd" d="M5.94 13.68c1.38-.3 2.74.56 3.05 1.93l.58 2.64c.3 1.38-.56 2.74-1.93 3.04-1.38.3-2.74-.56-3.05-1.93l-.58-2.64c-.3-1.37.56-2.74 1.93-3.04m1.58 2.26c-.12-.57-.68-.92-1.25-.8-.57.13-.92.69-.8 1.25l.59 2.64c.12.57.68.92 1.25.8.57-.13.92-.69.8-1.25zM15.01 15.61c.3-1.37 1.67-2.24 3.05-1.93 1.37.3 2.24 1.67 1.93 3.04l-.58 2.64c-.3 1.37-1.67 2.24-3.05 1.93-1.37-.3-2.24-1.66-1.93-3.04zm2.72-.47c-.57-.12-1.13.23-1.25.8l-.59 2.64c-.12.56.23 1.12.8 1.25s1.13-.23 1.25-.8l.59-2.64c.12-.56-.23-1.12-.8-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

HeadphonesRegularDuotone.displayName = 'HeadphonesRegularDuotone';

// Triple export pattern
export { HeadphonesRegularDuotone, HeadphonesRegularDuotone as HeadphonesRegularDuotoneIcon, HeadphonesRegularDuotone as SiHeadphonesRegularDuotone };
export default HeadphonesRegularDuotone;
export type { HeadphonesRegularDuotoneProps };
