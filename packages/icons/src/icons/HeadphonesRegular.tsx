import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeadphonesRegularProps = Omit<IconBaseProps, 'children'>;

const HeadphonesRegular = memo(
  forwardRef<SVGSVGElement, HeadphonesRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.27 2.35c2.83.08 5.35 1.36 7.08 3.34 1.57 1.8 2.03 4.03 2 6.26-.03 2.21-.56 4.54-1.02 6.61-.09.4-.48.65-.88.58l-.04.22c-.3 1.37-1.67 2.24-3.05 1.93-1.37-.3-2.24-1.67-1.93-3.04l.58-2.64c.3-1.37 1.67-2.24 3.05-1.93.64.14 1.17.52 1.52 1.01q.24-1.4.27-2.77c.03-2.02-.39-3.82-1.63-5.24-1.42-1.63-3.46-2.69-5.76-2.82h-.92C9.24 4 7.2 5.06 5.78 6.68 4.54 8.1 4.12 9.9 4.15 11.92q.04 1.36.27 2.77c.35-.5.88-.87 1.52-1.01 1.38-.3 2.74.56 3.05 1.93l.58 2.64c.3 1.37-.56 2.74-1.93 3.04-1.38.3-2.74-.56-3.05-1.93l-.05-.22c-.4.07-.78-.18-.87-.58-.46-2.07-.98-4.4-1.02-6.61-.03-2.23.43-4.45 2-6.26C6.44 3.65 9.07 2.35 12 2.35zM7.52 15.94c-.12-.57-.68-.92-1.25-.8-.57.13-.92.69-.8 1.25l.59 2.64c.12.57.68.92 1.25.8.57-.13.92-.69.8-1.25zm10.21-.8c-.57-.12-1.13.23-1.25.8l-.59 2.64c-.12.56.23 1.12.8 1.25s1.13-.23 1.25-.8l.59-2.64c.12-.56-.23-1.12-.8-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

HeadphonesRegular.displayName = 'HeadphonesRegular';

// Triple export pattern
export { HeadphonesRegular, HeadphonesRegular as HeadphonesRegularIcon, HeadphonesRegular as SiHeadphonesRegular };
export default HeadphonesRegular;
export type { HeadphonesRegularProps };
